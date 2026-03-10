const Cart = require("../models/Cart");
const Order = require("../models/Order");
const Payment = require("../models/Payment");


exports.placeOrder = async (req, res) => {
    try {
        const { deliveryAddress, paymentMethod } = req.body;
        const userId = req.user.id;

        const cart = await Cart.findOne({ userId }).populate("items.foodId");
        if (!cart || cart.items.length === 0) {
            return res.status(400).json({ message: "Cart is empty" });
        }

        const orderItems = cart.items.map((item) => ({
            foodId: item.foodId._id,
            name: item.foodId.name,
            price: item.foodId.price,
            quantity: item.quantity
        }));

        const order = await Order.create({
            userId,
            items: orderItems,
            totalAmount: cart.totalAmount,
            deliveryAddress,
            paymentMethod
        });


        await Payment.create({
            userId,
            orderId: order._id,
            amount: order.totalAmount,
            method: paymentMethod,
            status: "SUCCESS",
            transactionId: "TXN" + Date.now()
        });


        await Cart.deleteOne({ userId });

        res.status(201).json({
            message: "Order placed successfully",
            orderId: order._id
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


exports.getUserOrders = async (req, res) => {
    const orders = await Order.find({ userId: req.user.id }).sort({
        createdAt: -1
    });
    res.json(orders);
};


exports.getAllOrders = async (req, res) => {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.json(orders);
};


exports.updateOrderStatus = async (req, res) => {
    const order = await Order.findByIdAndUpdate(
        req.params.id,
        { status: req.body.status },
        { new: true }
    );
    res.json(order);
};








