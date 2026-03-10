const Cart = require("../models/Cart");
const FoodItem = require("../models/FoodItem");


const calculateTotal = async (items) => {
    let total = 0;
    for (let item of items) {
        const food = await FoodItem.findById(item.foodId);
        total += food.price * item.quantity;
    }
    return total;
};


exports.addToCart = async (req, res) => {
    try {
        const { foodId, quantity } = req.body;
        const userId = req.user.id;

        let cart = await Cart.findOne({ userId });

        if (!cart) {
            cart = new Cart({ userId, items: [] });
        }

        const itemIndex = cart.items.findIndex(
            (item) => item.foodId.toString() === foodId
        );

        if (itemIndex > -1) {
            cart.items[itemIndex].quantity += quantity;
        } else {
            cart.items.push({ foodId, quantity });
        }

        cart.totalAmount = await calculateTotal(cart.items);
        await cart.save();

        res.json(cart);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


exports.getCart = async (req, res) => {
    try {
        const cart = await Cart.findOne({ userId: req.user.id }).populate(
            "items.foodId"
        );

        if (!cart) {
            return res.json({ items: [], totalAmount: 0 });
        }

        res.json(cart);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


exports.removeFromCart = async (req, res) => {
    try {
        const cart = await Cart.findOne({ userId: req.user.id });

        cart.items = cart.items.filter(
            (item) => item.foodId.toString() !== req.params.foodId
        );

        cart.totalAmount = await calculateTotal(cart.items);
        await cart.save();

        res.json(cart);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};