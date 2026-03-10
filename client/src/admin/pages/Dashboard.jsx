import { useEffect, useState } from "react";
import API from "../../api/api";
import AdminNavbar from "../components/AdminNavbar";

export default function Dashboard() {
    const [stats, setStats] = useState(null);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const res = await API.get("/admin/dashboard-stats");
                setStats(res.data);
            } catch (error) {
                alert("Failed to load dashboard stats");
            }
        };

        fetchStats();
    }, []);

    if (!stats) {
        return (
            <>
                <AdminNavbar />
                <div className="min-h-screen flex items-center justify-center text-gray-600">
                    Loading dashboard...
                </div>
            </>
        );
    }

    return (
        <>
            <AdminNavbar />

            <div className="min-h-screen bg-[#fafafa] px-4 py-8">
                <div className="max-w-7xl mx-auto">


                    <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                        Admin Dashboard
                    </h2>


                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <DashboardCard
                            value={stats.totalRestaurants}
                            label="Restaurants"
                        />
                        <DashboardCard
                            value={stats.totalFoods}
                            label="Food Items"
                        />
                        <DashboardCard
                            value={stats.totalOrders}
                            label="Total Orders"
                        />
                        <DashboardCard
                            value={stats.pendingOrders}
                            label="Pending Orders"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}


function DashboardCard({ value, label }) {
    return (
        <div className="bg-white rounded-xl shadow-sm border p-6 text-center hover:shadow-md transition">
            <h3 className="text-3xl font-bold text-orange-500">
                {value}
            </h3>
            <p className="mt-2 text-gray-600 font-medium">
                {label}
            </p>
        </div>
    );
}







