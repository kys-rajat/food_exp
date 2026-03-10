import { useEffect, useState } from "react";
import API from "../api/api";

export default function Orders() {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const res = await API.get("/orders/user");
                setOrders(res.data);
            } catch (error) {
                alert("Please login to view orders");
            } finally {
                setLoading(false);
            }
        };

        fetchOrders();
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center text-gray-600">
                Loading orders...
            </div>
        );
    }

    if (orders.length === 0) {
        return (
            <div className="min-h-screen flex items-center justify-center text-gray-500">
                No orders found
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#fafafa] px-4 py-8">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-semibold mb-6 text-gray-800">
                    Your Orders
                </h2>

                <div className="space-y-6">
                    {orders.map((order) => (
                        <div
                            key={order._id}
                            className="bg-white rounded-xl shadow-sm border p-6"
                        >

                            <div className="flex flex-wrap justify-between gap-4 mb-4">
                                <div>
                                    <p className="text-sm text-gray-500">Order ID</p>
                                    <p className="font-medium text-gray-800">
                                        {order._id}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-sm text-gray-500">Status</p>
                                    <span className="inline-block px-3 py-1 rounded-full text-sm bg-orange-100 text-orange-600">
                                        {order.status}
                                    </span>
                                </div>

                                <div>
                                    <p className="text-sm text-gray-500">Payment</p>
                                    <p className="font-medium text-gray-800">
                                        {order.paymentMethod}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-sm text-gray-500">Total</p>
                                    <p className="font-semibold text-orange-500">
                                        ₹{order.totalAmount}
                                    </p>
                                </div>
                            </div>


                            <div>
                                <p className="font-medium text-gray-700 mb-2">
                                    Items
                                </p>
                                <ul className="divide-y">
                                    {order.items.map((item, index) => (
                                        <li
                                            key={index}
                                            className="py-2 flex justify-between text-sm"
                                        >
                                            <span>
                                                {item.name} × {item.quantity}
                                            </span>
                                            <span className="font-medium">
                                                ₹{item.price}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}





