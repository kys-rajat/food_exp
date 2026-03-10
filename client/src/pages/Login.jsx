import { useState, useContext } from "react";
import API from "../api/api";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
    const [form, setForm] = useState({ email: "", password: "" });
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleChange = (e) =>
        setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await API.post("/auth/login", form);
            login(res.data.token, res.data.user);
            navigate("/");
        } catch (err) {
            alert(err.response?.data?.message || "Login failed");
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

                    <h2 className="text-2xl font-semibold mt-6">Welcome back</h2>
                    <p className="text-gray-500 text-sm mt-1">
                        Sign in to your account
                    </p>
                </div>


                <form onSubmit={handleSubmit} className="space-y-5">
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
                            placeholder="••••••••"
                            onChange={handleChange}
                            required
                            className="mt-1 w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
                    >
                        Sign In
                    </button>
                </form>


                <p className="text-center text-sm text-gray-500 mt-6">
                    Don&apos;t have an account?{" "}
                    <Link
                        to="/register"
                        className="text-orange-500 font-medium hover:underline"
                    >
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    );
}















