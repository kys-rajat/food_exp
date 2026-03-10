const Restaurant = require("../models/Restaurant");
const FoodItem = require("../models/FoodItem");
const Order = require("../models/Order");

exports.getDashboardStats = async (req, res) => {
    try {
        const totalRestaurants = await Restaurant.countDocuments();
        const totalFoods = await FoodItem.countDocuments();
        const totalOrders = await Order.countDocuments();
        const pendingOrders = await Order.countDocuments({ status: "Pending" });

        res.json({
            totalRestaurants,
            totalFoods,
            totalOrders,
            pendingOrders
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};




