import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import API from "../../api/api";
import AdminNavbar from "../components/AdminNavbar";

export default function Foods() {
    const { restaurantId } = useParams();
    const [foods, setFoods] = useState([]);

    const fetchFoods = async () => {
        const res = await API.get(`/foods/${restaurantId}`);
        setFoods(res.data);
    };

    useEffect(() => {
        fetchFoods();
    }, [restaurantId]);

    const deleteFood = async (id) => {
        if (!window.confirm("Delete this food item?")) return;
        await API.delete(`/foods/item/${id}`);
        fetchFoods();
    };

    return (
        <>
            <AdminNavbar />

            <div className="min-h-screen bg-[#fafafa] px-4 py-8">
                <div className="max-w-6xl mx-auto">


                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-semibold text-gray-800">
                            Manage Foods
                        </h2>

                        <Link
                            to={`/admin/foods/add/${restaurantId}`}
                            className="bg-orange-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-orange-600 transition"
                        >
                            + Add Food
                        </Link>
                    </div>


                    <div className="bg-white rounded-xl shadow-sm border overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead className="bg-gray-100 text-gray-600">
                                <tr>
                                    <th className="text-left px-4 py-3">Name</th>
                                    <th className="text-left px-4 py-3">Price</th>
                                    <th className="text-left px-4 py-3">Category</th>
                                    <th className="text-left px-4 py-3">Available</th>
                                    <th className="text-left px-4 py-3">Actions</th>
                                </tr>
                            </thead>

                            <tbody className="divide-y">
                                {foods.map((f) => (
                                    <tr key={f._id} className="hover:bg-gray-50">
                                        <td className="px-4 py-3 font-medium text-gray-800">
                                            {f.name}
                                        </td>

                                        <td className="px-4 py-3 text-orange-500 font-semibold">
                                            ₹{f.price}
                                        </td>

                                        <td className="px-4 py-3 text-gray-600">
                                            {f.category}
                                        </td>

                                        <td className="px-4 py-3">
                                            <span
                                                className={`px-3 py-1 rounded-full text-xs font-medium ${f.isAvailable
                                                    ? "bg-green-100 text-green-600"
                                                    : "bg-red-100 text-red-600"
                                                    }`}
                                            >
                                                {f.isAvailable ? "Yes" : "No"}
                                            </span>
                                        </td>

                                        <td className="px-4 py-3 space-x-2">
                                            <Link
                                                to={`/admin/foods/edit/${f._id}`}
                                                className="px-3 py-1 text-sm rounded-md border border-gray-300 hover:bg-gray-100"
                                            >
                                                Edit
                                            </Link>

                                            <button
                                                onClick={() => deleteFood(f._id)}
                                                className="px-3 py-1 text-sm rounded-md bg-red-500 text-white hover:bg-red-600"
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        {foods.length === 0 && (
                            <div className="text-center text-gray-500 py-8">
                                No food items found
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}






