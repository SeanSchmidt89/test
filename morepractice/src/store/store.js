import { configureStore } from "@reduxjs/toolkit";
import todoSliceReducer from "./todoSlice";

const todoStore = configureStore({
  reducers: { todos: todoSliceReducer },
});

export default store;
