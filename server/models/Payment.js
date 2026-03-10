const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema(
    {
        userId: mongoose.Schema.Types.ObjectId,
        orderId: mongoose.Schema.Types.ObjectId,
        amount: Number,
        method: String,
        status: String,
        transactionId: String
    },
    { timestamps: true }
);

module.exports = mongoose.model("Payment", paymentSchema);








