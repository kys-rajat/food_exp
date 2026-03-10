const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");

const {
    createFoodItem,
    getFoodByRestaurant,
    updateFoodItem,
    deleteFoodItem
} = require("../controllers/foodController");


router.get("/:restaurantId", getFoodByRestaurant);

router.post(
    "/:restaurantId",
    authMiddleware,
    adminMiddleware,
    createFoodItem
);

router.put(
    "/item/:id",
    authMiddleware,
    adminMiddleware,
    updateFoodItem
);

router.delete(
    "/item/:id",
    authMiddleware,
    adminMiddleware,
    deleteFoodItem
);

module.exports = router;