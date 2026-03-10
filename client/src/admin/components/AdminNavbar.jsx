import { Link, useNavigate } from "react-router-dom";

export default function AdminNavbar() {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        navigate("/admin/login");
    };

    return (
        <nav className="sticky top-0 z-50 bg-white border-b">
            <div className="w-full px-6 py-3 flex items-center justify-between">


                <Link
                    to="/admin/dashboard"
                    className="flex items-center gap-2 text-lg font-bold"
                >
                    <span className="bg-orange-500 text-white p-2 rounded-md">
                        🧑‍🍳
                    </span>
                    <span>
                        Foodie<span className="text-orange-500">Express</span>
                        <span className="ml-2 text-sm text-gray-500 font-medium">
                            Admin
                        </span>
                    </span>
                </Link>


                <div className="flex items-center gap-6 text-gray-700 font-medium">
                    <Link
                        to="/admin/dashboard"
                        className="hover:text-orange-500 transition"
                    >
                        Dashboard
                    </Link>

                    <Link
                        to="/admin/restaurants"
                        className="hover:text-orange-500 transition"
                    >
                        Restaurants
                    </Link>

                    <Link
                        to="/admin/orders"
                        className="hover:text-orange-500 transition"
                    >
                        Orders
                    </Link>

                    <button
                        onClick={logout}
                        className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-600 transition"
                    >
                        Logout
                    </button>
                </div>
            </div>
        </nav>
    );
}









