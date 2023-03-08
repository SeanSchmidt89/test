import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoLists: [],
};

export const todoSlice = createSlice({
  name: "todoSlice",
  initialState: initialState,
  reducers: {
    addList: (state, action) => {
      state.todoLists = action.payload;
    },
  },
});

export const { addList } = todoSlice.actions;

export default todoSlice.reducer;
