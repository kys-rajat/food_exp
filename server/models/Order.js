const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        items: [
            {
                foodId: mongoose.Schema.Types.ObjectId,
                name: String,
                price: Number,
                quantity: Number
            }
        ],
        totalAmount: {
            type: Number,
            required: true
        },
        deliveryAddress: {
            type: String,
            required: true
        },
        paymentMethod: {
            type: String,
            enum: ["COD", "ONLINE"],
            required: true
        },
        status: {
            type: String,
            enum: [
                "Pending",
                "Preparing",
                "Out for Delivery",
                "Delivered",
                "Cancelled"
            ],
            default: "Pending"
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);







