import { configureStore } from "@reduxjs/toolkit";
import TodoSliceReducer from "./TodoSlice";

export const store = configureStore({
  reducer: {
    todos: TodoSliceReducer,
  },
});

export default store;
