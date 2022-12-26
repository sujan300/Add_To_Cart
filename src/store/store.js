import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../Features/cartSlice";
const cartReducer = cartSlice;
const store = configureStore({
    reducer:{
        allCarts:cartReducer,
    },
})

export default store;
