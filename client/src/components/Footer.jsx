import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 mt-20">
            <div className="max-w-7xl mx-auto px-6 py-14">


                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">


                    <div>
                        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                            🍔 Foodie<span className="text-orange-500">Express</span>
                        </h2>
                        <p className="mt-4 text-sm leading-relaxed">
                            Order food from your favourite restaurants and get it delivered
                            to your doorstep quickly and safely.
                        </p>
                    </div>


                    <div>
                        <h3 className="text-white font-semibold mb-4">Company</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/" className="hover:text-orange-500">About Us</Link></li>
                            <li><Link to="/" className="hover:text-orange-500">Careers</Link></li>
                            <li><Link to="/" className="hover:text-orange-500">Blog</Link></li>
                        </ul>
                    </div>


                    <div>
                        <h3 className="text-white font-semibold mb-4">Help</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/" className="hover:text-orange-500">FAQs</Link></li>
                            <li><Link to="/" className="hover:text-orange-500">Contact Us</Link></li>
                            <li><Link to="/" className="hover:text-orange-500">Support</Link></li>
                        </ul>
                    </div>


                    <div>
                        <h3 className="text-white font-semibold mb-4">Follow Us</h3>
                        <div className="flex gap-4">
                            <a href="#" className="hover:text-orange-500">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="hover:text-orange-500">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="hover:text-orange-500">
                                <Twitter size={20} />
                            </a>
                        </div>
                    </div>

                </div>


                <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm">
                    © {new Date().getFullYear()} FoodieExpress. All rights reserved.
                </div>
            </div>
        </footer>
    );
}








