import { Link } from "react-router-dom";

export default function RestaurantCard({ restaurant }) {
    return (
        <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition border w-[320px] overflow-hidden">


            <div className="relative">
                <img
                    src={restaurant.image}
                    alt={restaurant.name}
                    className="w-full h-44 object-cover"
                />
            </div>


            <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                    {restaurant.name}
                </h3>

                <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                    {restaurant.description}
                </p>

                <Link to={`/restaurant/${restaurant._id}`}>
                    <button className="mt-4 w-full bg-orange-500 text-white py-2 rounded-lg font-medium hover:bg-orange-600 transition">
                        View Menu
                    </button>
                </Link>
            </div>
        </div>
    );
}








