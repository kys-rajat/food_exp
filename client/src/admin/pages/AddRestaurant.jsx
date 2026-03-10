import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../api/api";
import AdminNavbar from "../components/AdminNavbar";

export default function AddRestaurant() {
    const [form, setForm] = useState({
        name: "",
        image: "",
        description: "",
        address: "",
        isActive: true,
    });

    const navigate = useNavigate();

    const handleChange = (e) =>
        setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await API.post("/restaurants", form);
        navigate("/admin/restaurants");
    };

    return (
        <>
            <AdminNavbar />

            <div className="min-h-screen bg-[#fafafa] px-4 py-8">
                <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-md p-8">


                    <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                        Add Restaurant
                    </h2>


                    <form onSubmit={handleSubmit} className="space-y-5">

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Restaurant Name
                            </label>
                            <input
                                name="name"
                                placeholder="e.g. Spice Hub"
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Image URL
                            </label>
                            <input
                                name="image"
                                placeholder="https://image-url"
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Address
                            </label>
                            <input
                                name="address"
                                placeholder="Full restaurant address"
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Description
                            </label>
                            <textarea
                                name="description"
                                placeholder="Short description about the restaurant"
                                rows={4}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-orange-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Active
                            </label>
                            <select
                                name="isActive"
                                onChange={handleChange}
                                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                            >
                                <option value={true}>Yes</option>
                                <option value={false}>No</option>
                            </select>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
                        >
                            Save Restaurant
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}














