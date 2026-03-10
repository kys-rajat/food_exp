const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");

const { getDashboardStats } = require("../controllers/adminController");

router.get(
    "/dashboard-stats",
    authMiddleware,
    adminMiddleware,
    getDashboardStats
);

module.exports = router;






