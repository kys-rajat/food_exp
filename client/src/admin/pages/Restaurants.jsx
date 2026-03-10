import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../../api/api";
import AdminNavbar from "../components/AdminNavbar";

export default function Restaurants() {
    const [restaurants, setRestaurants] = useState([]);

    const fetchRestaurants = async () => {
        const res = await API.get("/restaurants");
        setRestaurants(res.data);
    };

    useEffect(() => {
        fetchRestaurants();
    }, []);

    const deleteRestaurant = async (id) => {
        if (!window.confirm("Delete this restaurant?")) return;
        await API.delete(`/restaurants/${id}`);
        fetchRestaurants();
    };

    return (
        <>
            <AdminNavbar />

            <div className="min-h-screen bg-[#fafafa] px-4 py-8">
                <div className="max-w-6xl mx-auto">


                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-semibold text-gray-800">
                            Manage Restaurants
                        </h2>

                        <Link
                            to="/admin/restaurants/add"
                            className="bg-orange-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-orange-600 transition"
                        >
                            + Add Restaurant
                        </Link>
                    </div>


                    <div className="bg-white rounded-xl shadow-sm border overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead className="bg-gray-100 text-gray-600">
                                <tr>
                                    <th className="text-left px-4 py-3">Name</th>
                                    <th className="text-left px-4 py-3">Address</th>
                                    <th className="text-left px-4 py-3">Active</th>
                                    <th className="text-left px-4 py-3">Actions</th>
                                </tr>
                            </thead>

                            <tbody className="divide-y">
                                {restaurants.map((r) => (
                                    <tr key={r._id} className="hover:bg-gray-50">
                                        <td className="px-4 py-3 font-medium text-gray-800">
                                            {r.name}
                                        </td>

                                        <td className="px-4 py-3 text-gray-600">
                                            {r.address}
                                        </td>

                                        <td className="px-4 py-3">
                                            <span
                                                className={`px-3 py-1 rounded-full text-xs font-medium ${r.isActive
                                                    ? "bg-green-100 text-green-600"
                                                    : "bg-red-100 text-red-600"
                                                    }`}
                                            >
                                                {r.isActive ? "Yes" : "No"}
                                            </span>
                                        </td>

                                        <td className="px-4 py-3 space-x-2 whitespace-nowrap">
                                            <Link
                                                to={`/admin/restaurants/edit/${r._id}`}
                                                className="px-3 py-1 text-sm rounded-md border border-gray-300 hover:bg-gray-100"
                                            >
                                                Edit
                                            </Link>

                                            <Link
                                                to={`/admin/foods/${r._id}`}
                                                className="px-3 py-1 text-sm rounded-md bg-blue-500 text-white hover:bg-blue-600"
                                            >
                                                Manage Foods
                                            </Link>

                                            <button
                                                onClick={() => deleteRestaurant(r._id)}
                                                className="px-3 py-1 text-sm rounded-md bg-red-500 text-white hover:bg-red-600"
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        {restaurants.length === 0 && (
                            <div className="text-center text-gray-500 py-8">
                                No restaurants found
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}





