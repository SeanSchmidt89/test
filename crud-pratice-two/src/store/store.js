import { configureStore } from "@reduxjs/toolkit";
import todoSliceReducer from "./TodoSlice";

const store = configureStore({
  reducer: {
    name: "todos",
    slice: TodoReducer,
  },
});

//have to double check this

export default store;
