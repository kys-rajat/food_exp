import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import API from "../../api/api";
import AdminNavbar from "../components/AdminNavbar";

export default function EditRestaurant() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [form, setForm] = useState(null);

    useEffect(() => {
        const fetchRestaurant = async () => {
            const res = await API.get(`/restaurants/${id}`);
            setForm(res.data);
        };
        fetchRestaurant();
    }, [id]);

    const handleChange = (e) =>
        setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await API.put(`/restaurants/${id}`, form);
        navigate("/admin/restaurants");
    };

    if (!form) {
        return (
            <>
                <AdminNavbar />
                <div className="min-h-screen flex items-center justify-center text-gray-600">
                    Loading...
                </div>
            </>
        );
    }

    return (
        <>
            <AdminNavbar />

            <div className="min-h-screen bg-[#fafafa] px-4 py-8">
                <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-md p-8">


                    <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                        Edit Restaurant
                    </h2>


                    <form onSubmit={handleSubmit} className="space-y-5">

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Restaurant Name
                            </label>
                            <input
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Image URL
                            </label>
                            <input
                                name="image"
                                value={form.image}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Address
                            </label>
                            <input
                                name="address"
                                value={form.address}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Description
                            </label>
                            <textarea
                                name="description"
                                value={form.description}
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
                                value={form.isActive}
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
                            Update Restaurant
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}







