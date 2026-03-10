import { useEffect, useState } from "react";
import API from "../api/api";
import RestaurantCard from "../components/RestaurantCard";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

export default function Home() {
    const [restaurants, setRestaurants] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRestaurants = async () => {
            try {
                const res = await API.get("/restaurants");
                setRestaurants(res.data);
            } catch (error) {
                alert("Failed to load restaurants");
            } finally {
                setLoading(false);
            }
        };

        fetchRestaurants();
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                Loading restaurants...
            </div>
        );
    }

    return (
        <>

            <Hero />


            <section className="bg-[#fafafa] py-10 px-4">
                <div className="max-w-7xl mx-auto">

                    <h2 className="text-3xl font-semibold text-gray-800 mb-6">
                        Popular Restaurants
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {restaurants.map((restaurant) => (
                            <RestaurantCard
                                key={restaurant._id}
                                restaurant={restaurant}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}











