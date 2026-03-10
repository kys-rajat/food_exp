import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { ShoppingCart, LogOut, User, ChefHat } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function Navbar() {
    const { token, logout, user } = useContext(AuthContext);
    const { cartCount } = useCart();

    return (
        <nav className="sticky top-0 z-50 bg-white border-b">

            <div className="w-full px-6 py-3 flex items-center justify-between">


                <Link to="/" className="flex items-center gap-2 text-xl font-bold">
                    <span className="bg-orange-500 text-white p-2 rounded-md">
                        <ChefHat size={22} />
                    </span>
                    <span>
                        Foodie<span className="text-orange-500">Express</span>
                    </span>
                </Link>


                <div className="hidden md:flex gap-8 text-gray-600 font-medium">
                    <Link to="/" className="hover:text-orange-500">Home</Link>
                    <Link to="/orders" className="hover:text-orange-500">My Orders</Link>
                </div>


                <div className="flex items-center gap-5">


                    <Link to="/cart" className="relative hover:text-orange-500">
                        <ShoppingCart size={22} />
                        <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                            {cartCount}
                        </span>
                    </Link>

                    {!token ? (
                        <>

                            <Link
                                to="/login"
                                className="text-gray-700 hover:text-orange-500 text-sm"
                            >
                                Login
                            </Link>


                            <Link
                                to="/register"
                                className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm hover:bg-orange-600 transition"
                            >
                                Sign Up
                            </Link>
                        </>
                    ) : (
                        <>

                            <div className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full text-sm">
                                <User size={16} />
                                <span>{user?.name || "User"}</span>
                            </div>


                            <button
                                onClick={logout}
                                className="text-gray-600 hover:text-red-500"
                                title="Logout"
                            >
                                <LogOut size={20} />
                            </button>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
}





