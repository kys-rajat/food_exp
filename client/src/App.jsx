import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";
import Restaurant from "./pages/Restaurant";
import Navbar from "./components/Navbar";
import Checkout from "./pages/Checkout";
import AdminLogin from "./admin/pages/AdminLogin";
import Dashboard from "./admin/pages/Dashboard";
import AdminRoutes from "./admin/AdminRoutes";
import Restaurants from "./admin/pages/Restaurants";
import AddRestaurant from "./admin/pages/AddRestaurant";
import EditRestaurant from "./admin/pages/EditRestaurant";
import Foods from "./admin/pages/Foods";
import AddFood from "./admin/pages/AddFood";
import EditFood from "./admin/pages/EditFood";
import AdminOrders from "./admin/pages/Orders";
import UserLayout from "./layouts/UserLayout";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserLayout> <Home /> </UserLayout>} />
        <Route path="/login" element={<UserLayout> <Login /> </UserLayout>} />
        <Route path="/register" element={<Register />} />
        <Route path="/restaurant/:id" element={<UserLayout> <Restaurant /> </UserLayout>} />
        <Route path="/cart" element={<UserLayout> <Cart /> </UserLayout>} />
        <Route path="/orders" element={<UserLayout><Orders /> </UserLayout>} />
        <Route path="/checkout" element={<UserLayout> <Checkout /> </UserLayout>} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminRoutes>
          <Dashboard />
        </AdminRoutes>} />
        <Route
          path="/admin/restaurants"
          element={
            <AdminRoutes>
              <Restaurants />
            </AdminRoutes>
          }
        />

        <Route
          path="/admin/restaurants/add"
          element={
            <AdminRoutes>
              <AddRestaurant />
            </AdminRoutes>
          }
        />

        <Route
          path="/admin/restaurants/edit/:id"
          element={
            <AdminRoutes>
              <EditRestaurant />
            </AdminRoutes>
          }
        />

        <Route
          path="/admin/foods/:restaurantId"
          element={
            <AdminRoutes>
              <Foods />
            </AdminRoutes>
          }
        />

        <Route
          path="/admin/foods/add/:restaurantId"
          element={
            <AdminRoutes>
              <AddFood />
            </AdminRoutes>
          }
        />

        <Route
          path="/admin/foods/edit/:id"
          element={
            <AdminRoutes>
              <EditFood />
            </AdminRoutes>
          }
        />

        <Route
          path="/admin/orders"
          element={
            <AdminRoutes>
              <AdminOrders />
            </AdminRoutes>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;















































