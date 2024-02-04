import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./dataSlice";
const store = configureStore({
    reducer:{
        info:dataSlice
    }
})
export default store