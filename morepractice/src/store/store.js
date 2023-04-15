import { configureStore } from "@reduxjs/toolkit";
import todoSliceReducer from "./todoSlice";

export const store = configureStore({
  reducer: { todos: todoSliceReducer },
});

export default store;
