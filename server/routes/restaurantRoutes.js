const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");

const {
    createRestaurant,
    getAllRestaurants,
    getRestaurantById,
    updateRestaurant,
    deleteRestaurant
} = require("../controllers/restaurantController");


router.get("/", getAllRestaurants);
router.get("/:id", getRestaurantById);


router.post("/", authMiddleware, adminMiddleware, createRestaurant);
router.put("/:id", authMiddleware, adminMiddleware, updateRestaurant);
router.delete("/:id", authMiddleware, adminMiddleware, deleteRestaurant);

module.exports = router;