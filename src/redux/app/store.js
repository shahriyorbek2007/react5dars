import { configureStore } from "@reduxjs/toolkit";
import shopReducer from '../future/shopSlice'

export const store = configureStore({
    reducer: {
        shop: shopReducer,
    }
})