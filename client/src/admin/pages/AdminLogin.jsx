import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../api/api";

export default function AdminLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await API.post("/auth/login", { email, password });

            if (res.data.role !== "admin") {
                alert("Admin access only");
                return;
            }

            localStorage.setItem("token", res.data.token);
            localStorage.setItem("role", "admin");

            navigate("/admin/dashboard");
        } catch (error) {
            alert("Invalid admin credentials");
        }
    };

    return (
        <div className="min-h-screen bg-[#fafafa] flex items-center justify-center px-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-8">


                <div className="text-center mb-6">
                    <div className="flex justify-center items-center gap-2 text-2xl font-bold">
                        <span className="bg-orange-500 text-white p-2 rounded-md">
                            🧑‍🍳
                        </span>
                        <span>
                            Foodie<span className="text-orange-500">Express</span>
                        </span>
                    </div>

                    <h2 className="text-2xl font-semibold mt-6">
                        Admin Login
                    </h2>
                    <p className="text-gray-500 text-sm mt-1">
                        Restricted access for administrators
                    </p>
                </div>


                <form onSubmit={handleLogin} className="space-y-5">

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Admin Email
                        </label>
                        <input
                            type="email"
                            placeholder="admin@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
                    >
                        Login as Admin
                    </button>
                </form>
            </div>
        </div>
    );
}








