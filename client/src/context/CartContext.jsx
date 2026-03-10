import { createContext, useContext, useEffect, useState } from "react";
import API from "../api/api";
import { AuthContext } from "./AuthContext";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const { token } = useContext(AuthContext);

    const [cart, setCart] = useState({
        items: [],
        totalAmount: 0,
    });

    const [loading, setLoading] = useState(false);


    const fetchCart = async () => {
        if (!token) {
            setCart({ items: [], totalAmount: 0 });
            return;
        }

        try {
            setLoading(true);
            const res = await API.get("/cart");
            setCart(res.data);
        } catch (error) {
            console.error("Failed to fetch cart");
        } finally {
            setLoading(false);
        }
    };


    const addToCart = async (foodId, quantity = 1) => {
        try {
            await API.post("/cart/add", { foodId, quantity });
            await fetchCart();
        } catch (error) {
            alert("Please login to add items");
        }
    };


    const updateQuantity = async (foodId, quantity) => {
        try {
            if (quantity <= 0) {
                await removeFromCart(foodId);
            } else {
                await API.post("/cart/add", { foodId, quantity });
                await fetchCart();
            }
        } catch (error) {
            console.error("Update quantity failed");
        }
    };


    const removeFromCart = async (foodId) => {
        try {
            await API.delete(`/cart/remove/${foodId}`);
            await fetchCart();
        } catch (error) {
            console.error("Remove failed");
        }
    };


    const changeQuantity = async (foodId, delta, currentQty) => {
        try {
            if (delta === -1) {

                if (currentQty === 1) {
                    await API.delete(`/cart/remove/${foodId}`);
                } else {

                    await API.post("/cart/add", {
                        foodId,
                        quantity: -1,
                    });
                }
            } else {

                await API.post("/cart/add", {
                    foodId,
                    quantity: 1,
                });
            }
            await fetchCart();
        } catch (error) {
            console.error("Change quantity failed");
        }
    };


    const clearCart = () => {
        setCart({ items: [], totalAmount: 0 });
    };


    const cartCount = cart.items.reduce(
        (sum, item) => sum + item.quantity,
        0
    );

    useEffect(() => {
        fetchCart();
    }, [token]);

    return (
        <CartContext.Provider
            value={{
                cart,
                loading,
                cartCount,
                addToCart,
                updateQuantity,
                changeQuantity,
                removeFromCart,
                fetchCart,
                clearCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);