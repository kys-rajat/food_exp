export default function Hero() {
    return (
        <section
            className="relative h-[500px] flex items-center"
            style={{
                backgroundImage:
                    "url('https://images.unsplash.com/photo-1600891964599-f61ba0e24092')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >

            <div className="absolute inset-0 bg-black/50"></div>

            <div className="relative z-10 max-w-6xl mx-auto px-6 text-white">
                <h1 className="text-5xl font-bold mb-4">
                    Delicious food,
                    <span className="text-orange-500"> delivered fast.</span>
                </h1>

                <p className="text-lg mb-6 max-w-xl">
                    Order from the best restaurants near you. Fresh food
                    delivered to your doorstep.
                </p>


                <div className="flex max-w-xl bg-white rounded-lg overflow-hidden">
                    <input
                        type="text"
                        placeholder="Search restaurants or cuisines..."
                        className="flex-1 px-4 py-3 text-gray-700 outline-none"
                    />
                    <button className="bg-orange-500 px-6 text-white font-semibold hover:bg-orange-600">
                        Search
                    </button>
                </div>
            </div>
        </section>
    );
}







