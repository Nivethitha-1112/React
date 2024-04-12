import { configureStore } from "@reduxjs/toolkit";
import customerReducer from './slices/customerSlice';

export const store = configureStore({
    devTools:true,
    reducer: { //application state changes in response to actions
        customers: customerReducer
    }
})