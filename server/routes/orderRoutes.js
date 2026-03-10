const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");

const {
    placeOrder,
    getUserOrders,
    getAllOrders,
    updateOrderStatus
} = require("../controllers/orderController");


router.post("/", authMiddleware, placeOrder);
router.get("/user", authMiddleware, getUserOrders);


router.get("/admin", authMiddleware, adminMiddleware, getAllOrders);
router.put(
    "/:id/status",
    authMiddleware,
    adminMiddleware,
    updateOrderStatus
);

module.exports = router;







