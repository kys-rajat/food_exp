const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");

router.get("/user", authMiddleware, (req, res) => {
    res.json({
        message: "User authenticated",
        user: req.user
    });
});


router.get("/admin", authMiddleware, adminMiddleware, (req, res) => {
    res.json({
        message: "Admin authenticated"
    });
});

module.exports = router;