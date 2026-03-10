const Restaurant = require("../models/Restaurant");


exports.createRestaurant = async (req, res) => {
    try {
        const restaurant = await Restaurant.create(req.body);
        res.status(201).json(restaurant);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


exports.getAllRestaurants = async (req, res) => {
    try {
        const restaurants = await Restaurant.find({ isActive: true });
        res.json(restaurants);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


exports.getRestaurantById = async (req, res) => {
    try {
        const restaurant = await Restaurant.findById(req.params.id);
        res.json(restaurant);
    } catch (error) {
        res.status(404).json({ message: "Restaurant not found" });
    }
};


exports.updateRestaurant = async (req, res) => {
    try {
        const updated = await Restaurant.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(updated);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


exports.deleteRestaurant = async (req, res) => {
    try {
        await Restaurant.findByIdAndDelete(req.params.id);
        res.json({ message: "Restaurant deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};







