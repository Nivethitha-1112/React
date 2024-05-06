import React, { createContext } from 'react'
import all_product from '../components/Assets/all_product'


export const ShopContext = createContext(null); //createcontext is a way to share data accross multiple components

const ShopContextProvider = (props) => {
//defining a component called ShopContext provider
    const contextValue = { all_product };

    return ( //Wrapping the child components with ShopContext.Provider and provide them the contextValue. This ensures that all children components can access the all_product data.
        < ShopContext.Provider value={contextValue} >
            {props.children} 
        </ShopContext.Provider >
    )
}

export default ShopContextProvider;

//his code sets up a way to share the all_product data with any component in our application that needs it.