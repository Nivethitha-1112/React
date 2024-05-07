import React, { createContext, useState } from 'react'
import all_product from '../components/Assets/all_product'


export const ShopContext = createContext(null); //createcontext is a way to share data accross multiple components

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < all_product.length + 1; index++) {
        cart[index] = 0;
    }
    return cart;
}
const ShopContextProvider = (props) => {
    //defining a component called ShopContext provider
    const [cartItems, setCartItem] = useState(getDefaultCart());

    const addToCart = (itemId) => {
        setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
    const removeFromCart = (itemId) => {
        setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = all_product.find((product) => product.id === Number(item));
                totalAmount += itemInfo.new_price * cartItems[item];
            }
        }
        return totalAmount;
    }

    const getTotalCartItems = () => {
        let totalItem = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalItem += cartItems[item];
            }
        }
        return totalItem;
    }


    const contextValue = { getTotalCartAmount, getTotalCartItems, all_product, cartItems, addToCart, removeFromCart };
    return ( //Wrapping the child components with ShopContext.Provider and provide them the contextValue. This ensures that all children components can access the all_product data.
        < ShopContext.Provider value={contextValue} >
            {props.children}
        </ShopContext.Provider >
    )
}

export default ShopContextProvider;

//his code sets up a way to share the all_product data with any component in our application that needs it.