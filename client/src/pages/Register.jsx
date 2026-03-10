import { useState } from "react";
import API from "../api/api";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
    });

    const navigate = useNavigate();

    const handleChange = (e) =>
        setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await API.post("/auth/register", form);
            alert("Registration successful");
            navigate("/login");
        } catch (err) {
            alert(err.response?.data?.message || "Error");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#fafafa] px-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-8">


                <div className="text-center mb-6">
                    <div className="flex justify-center items-center gap-2 text-2xl font-bold">
                        <span className="bg-orange-500 text-white px-2 py-1 rounded-md">
                            🍔
                        </span>
                        <span>
                            Foodie<span className="text-orange-500">Express</span>
                        </span>
                    </div>

                    <h2 className="text-2xl font-semibold mt-6">
                        Create an account
                    </h2>
                    <p className="text-gray-500 text-sm mt-1">
                        Join FoodieExpress today
                    </p>
                </div>


                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="text-sm font-medium text-gray-700">
                            Full Name
                        </label>
                        <input
                            name="name"
                            placeholder="John Doe"
                            onChange={handleChange}
                            required
                            className="mt-1 w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                    </div>

                    <div>
                        <label className="text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            name="email"
                            type="email"
                            placeholder="you@example.com"
                            onChange={handleChange}
                            required
                            className="mt-1 w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                    </div>

                    <div>
                        <label className="text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            name="password"
                            type="password"
                            placeholder="Min. 6 characters"
                            onChange={handleChange}
                            required
                            minLength={6}
                            className="mt-1 w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
                    >
                        Create Account
                    </button>
                </form>


                <p className="text-center text-sm text-gray-500 mt-6">
                    Already have an account?{" "}
                    <Link
                        to="/login"
                        className="text-orange-500 font-medium hover:underline"
                    >
                        Sign in
                    </Link>
                </p>
            </div>
        </div>
    );
}





