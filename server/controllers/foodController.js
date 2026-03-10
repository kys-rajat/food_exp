const FoodItem = require("../models/FoodItem");

exports.createFoodItem = async (req, res) => {
    try {
        const food = await FoodItem.create({
            restaurantId: req.params.restaurantId,
            ...req.body
        });
        res.status(201).json(food);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


exports.getFoodByRestaurant = async (req, res) => {
    try {
        const foods = await FoodItem.find({
            restaurantId: req.params.restaurantId,
            isAvailable: true
        });
        res.json(foods);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


exports.updateFoodItem = async (req, res) => {
    try {
        const updated = await FoodItem.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(updated);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


exports.deleteFoodItem = async (req, res) => {
    try {
        await FoodItem.findByIdAndDelete(req.params.id);
        res.json({ message: "Food item deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};