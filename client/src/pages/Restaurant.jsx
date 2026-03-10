import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../api/api";
import FoodCard from "../components/FoodCard";

export default function Restaurant() {
    const { id } = useParams();
    const [foods, setFoods] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchFoods = async () => {
            try {
                const res = await API.get(`/foods/${id}`);
                setFoods(res.data);
            } catch (error) {
                alert("Failed to load menu");
            } finally {
                setLoading(false);
            }
        };

        fetchFoods();
    }, [id]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center text-gray-600">
                Loading menu...
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#fafafa] px-4 py-8">
            <div className="max-w-7xl mx-auto">


                <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                    Menu
                </h2>


                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {foods.map((food) => (
                        <FoodCard key={food._id} food={food} />
                    ))}
                </div>

            </div>
        </div>
    );
}





