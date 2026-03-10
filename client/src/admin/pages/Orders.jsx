import { useEffect, useState } from "react";
import API from "../../api/api";
import AdminNavbar from "../components/AdminNavbar";

const statusOptions = [
    "Pending",
    "Preparing",
    "Out for Delivery",
    "Delivered",
    "Cancelled",
];

export default function Orders() {
    const [orders, setOrders] = useState([]);

    const fetchOrders = async () => {
        const res = await API.get("/orders/admin");
        setOrders(res.data);
    };

    useEffect(() => {
        fetchOrders();
    }, []);

    const updateStatus = async (orderId, status) => {
        await API.put(`/orders/${orderId}/status`, { status });
        fetchOrders();
    };

    return (
        <>
            <AdminNavbar />

            <div className="min-h-screen bg-[#fafafa] px-4 py-8">
                <div className="max-w-6xl mx-auto">


                    <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                        Manage Orders
                    </h2>

                    <div className="space-y-6">
                        {orders.map((order) => (
                            <div
                                key={order._id}
                                className="bg-white rounded-xl shadow-sm border p-6"
                            >

                                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-4">
                                    <div>
                                        <p className="text-xs text-gray-500">Order ID</p>
                                        <p className="text-sm font-medium text-gray-800 break-all">
                                            {order._id}
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-xs text-gray-500">Status</p>
                                        <span
                                            className={`inline-block mt-1 px-3 py-1 rounded-full text-xs font-medium ${order.status === "Delivered"
                                                ? "bg-green-100 text-green-600"
                                                : order.status === "Cancelled"
                                                    ? "bg-red-100 text-red-600"
                                                    : "bg-orange-100 text-orange-600"
                                                }`}
                                        >
                                            {order.status}
                                        </span>
                                    </div>

                                    <div>
                                        <p className="text-xs text-gray-500">Payment</p>
                                        <p className="text-sm font-medium text-gray-800">
                                            {order.paymentMethod}
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-xs text-gray-500">Total</p>
                                        <p className="text-sm font-semibold text-orange-500">
                                            ₹{order.totalAmount}
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-xs text-gray-500">Update Status</p>
                                        <select
                                            value={order.status}
                                            onChange={(e) =>
                                                updateStatus(order._id, e.target.value)
                                            }
                                            className="mt-1 w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                                        >
                                            {statusOptions.map((s) => (
                                                <option key={s} value={s}>
                                                    {s}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>


                                <div className="mb-4">
                                    <p className="text-xs text-gray-500">Delivery Address</p>
                                    <p className="text-sm text-gray-700">
                                        {order.deliveryAddress}
                                    </p>
                                </div>


                                <div>
                                    <p className="text-sm font-medium text-gray-700 mb-2">
                                        Items
                                    </p>
                                    <ul className="divide-y text-sm">
                                        {order.items.map((item, idx) => (
                                            <li
                                                key={idx}
                                                className="py-2 flex justify-between"
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

                    {orders.length === 0 && (
                        <div className="text-center text-gray-500 mt-10">
                            No orders found
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}