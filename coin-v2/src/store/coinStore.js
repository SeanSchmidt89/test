import { configureStore } from "@reduxjs/toolkit";
import coinSliceReducer from "./coinSlice";

const coinStore = configureStore({
  reducer: {
    coins: coinSliceReducer,
  },
});

export default coinStore;
