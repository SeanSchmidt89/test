import { configureStore } from "@reduxjs/toolkit";
import coinSlice from "./coinSlice";

const store = configureStore({
    name: 'coins',
    reducer: {
        
    }
})