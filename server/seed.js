require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = require("./config/db");
const Restaurant = require("./models/Restaurant");
const FoodItem = require("./models/FoodItem");

const restaurantsData = require("./data/restaurants");
const foodsData = require("./data/foods");

const seedDatabase = async () => {
    try {
        await connectDB();


        await Restaurant.deleteMany();
        await FoodItem.deleteMany();

        console.log("Old data cleared");


        const restaurants = await Restaurant.insertMany(restaurantsData);
        console.log("Restaurants seeded");


        const restaurantMap = {};
        restaurants.forEach((r) => {
            restaurantMap[r.name] = r._id;
        });


        const foodsWithIds = foodsData.map((food) => ({
            restaurantId: restaurantMap[food.restaurantName],
            name: food.name,
            image: food.image,
            price: food.price,
            category: food.category,
            isAvailable: food.isAvailable
        }));

        await FoodItem.insertMany(foodsWithIds);
        console.log("Food items seeded");

        console.log("✅ DATABASE SEEDED SUCCESSFULLY");
        process.exit();
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

seedDatabase();








