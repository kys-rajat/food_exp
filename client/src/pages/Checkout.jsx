import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/api";

export default function Checkout() {
    const [address, setAddress] = useState("");
    const [paymentMethod, setPaymentMethod] = useState("COD");
    const navigate = useNavigate();

    const placeOrder = async () => {
        if (!address) {
            alert("Please enter delivery address");
            return;
        }

        try {
            await API.post("/orders", {
                deliveryAddress: address,
                paymentMethod,
            });

            alert("Order placed successfully");
            navigate("/orders");
        } catch (error) {
            alert("Failed to place order");
        }
    };

    return (
        <div className="min-h-screen bg-[#fafafa] flex justify-center px-4 py-10">
            <div className="w-full max-w-lg bg-white rounded-2xl shadow-md p-8">

                <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                    Checkout
                </h2>


                <div className="mb-5">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Delivery Address
                    </label>
                    <textarea
                        placeholder="Enter your full delivery address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        rows={4}
                        className="w-full px-4 py-3 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                </div>


                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Payment Method
                    </label>
                    <select
                        value={paymentMethod}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    >
                        <option value="COD">Cash on Delivery</option>
                        <option value="ONLINE">Online (Mock)</option>
                    </select>
                </div>


                <button
                    onClick={placeOrder}
                    className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
                >
                    Place Order
                </button>
            </div>
        </div>
    );
}








