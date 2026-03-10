import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { Trash2 } from "lucide-react";

export default function Cart() {
    const { cart, loading, changeQuantity } = useCart();
    const navigate = useNavigate();

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                Loading cart...
            </div>
        );
    }

    if (cart.items.length === 0) {
        return (
            <div className="min-h-screen flex items-center justify-center text-gray-600">
                Your cart is empty
            </div>
        );
    }

    const deliveryFee = 40;
    const tax = Math.round(cart.totalAmount * 0.05);
    const total = cart.totalAmount + deliveryFee + tax;

    return (
        <div className="min-h-screen bg-[#fafafa] px-4 py-8">
            <div className="max-w-6xl mx-auto">

                <h2 className="text-2xl font-bold mb-6">Your Cart</h2>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">


                    <div className="lg:col-span-2 space-y-4">
                        {cart.items.map((item) => {
                            const food = item.foodId;
                            return (
                                <div
                                    key={food._id}
                                    className="bg-white rounded-xl shadow-sm p-4 flex items-center justify-between"
                                >

                                    <div className="flex items-center gap-4">
                                        <img
                                            src={food.image}
                                            alt={food.name}
                                            className="w-20 h-20 rounded-lg object-cover"
                                        />

                                        <div>
                                            <h4 className="font-semibold text-gray-800">
                                                {food.name}
                                            </h4>
                                            <p className="text-orange-500 font-semibold">
                                                ₹{food.price}
                                            </p>
                                        </div>
                                    </div>


                                    <div className="flex items-center gap-3">
                                        <button
                                            onClick={() =>
                                                changeQuantity(
                                                    food._id,
                                                    -1,
                                                    item.quantity
                                                )
                                            }
                                            className="w-8 h-8 rounded-full border flex items-center justify-center hover:bg-gray-100"
                                        >
                                            −
                                        </button>

                                        <span className="font-semibold">
                                            {item.quantity}
                                        </span>

                                        <button
                                            onClick={() =>
                                                changeQuantity(
                                                    food._id,
                                                    1,
                                                    item.quantity
                                                )
                                            }
                                            className="w-8 h-8 rounded-full border flex items-center justify-center hover:bg-gray-100"
                                        >
                                            +
                                        </button>
                                    </div>


                                    <div className="flex items-center gap-4">
                                        <span className="font-semibold">
                                            ₹{food.price * item.quantity}
                                        </span>

                                        <button
                                            onClick={() =>
                                                changeQuantity(
                                                    food._id,
                                                    -1,
                                                    1
                                                )
                                            }
                                            className="text-gray-400 hover:text-red-500"
                                        >
                                            <Trash2 size={18} />
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>


                    <div className="bg-white rounded-xl shadow-sm p-6 h-fit">
                        <h3 className="text-lg font-semibold mb-4">
                            Order Summary
                        </h3>

                        <div className="space-y-2 text-gray-600">
                            <div className="flex justify-between">
                                <span>Subtotal</span>
                                <span>₹{cart.totalAmount}</span>
                            </div>

                            <div className="flex justify-between">
                                <span>Delivery Fee</span>
                                <span>₹{deliveryFee}</span>
                            </div>

                            <div className="flex justify-between">
                                <span>Tax (5%)</span>
                                <span>₹{tax}</span>
                            </div>
                        </div>

                        <hr className="my-4" />

                        <div className="flex justify-between text-lg font-bold">
                            <span>Total</span>
                            <span>₹{total}</span>
                        </div>

                        <button
                            onClick={() => navigate("/checkout")}
                            className="mt-6 w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
                        >
                            Proceed to Checkout →
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}




