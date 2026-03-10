import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";

export default function FoodCard({ food }) {
    const { cart, addToCart, changeQuantity } = useCart();
    const [qty, setQty] = useState(0);


    useEffect(() => {
        const item = cart.items.find(
            (i) =>
                (typeof i.foodId === "string" && i.foodId === food._id) ||
                (i.foodId?._id === food._id)
        );
        setQty(item ? item.quantity : 0);
    }, [cart, food._id]);

    return (
        <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition border w-[320px] overflow-hidden">
            <img
                src={food.image}
                alt={food.name}
                className="w-full h-44 object-cover"
            />

            <div className="p-4">
                <h4 className="text-lg font-semibold text-gray-800">
                    {food.name}
                </h4>

                <p className="text-orange-500 font-bold mt-1">
                    ₹{food.price}
                </p>

                <div className="mt-4">
                    {qty === 0 ? (
                        <button
                            onClick={() => addToCart(food._id)}
                            className="w-full border border-orange-500 text-orange-500 py-2 rounded-lg font-medium
                                       hover:bg-orange-500 hover:text-white transition-all duration-300 active:scale-95"
                        >
                            ADD
                        </button>
                    ) : (
                        <div className="flex justify-between items-center bg-orange-500 text-white py-2 px-4 rounded-lg animate-scaleIn">
                            <button
                                onClick={() => changeQuantity(food._id, -1)}
                                className="text-xl font-bold hover:scale-110 transition"
                            >
                                −
                            </button>

                            <span className="font-semibold">{qty}</span>

                            <button
                                onClick={() => changeQuantity(food._id, 1)}
                                className="text-xl font-bold hover:scale-110 transition"
                            >
                                +
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}