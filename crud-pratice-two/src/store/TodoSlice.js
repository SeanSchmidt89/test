import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todosSlice",
  initialState: initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos = state.todos.push(action.payload);
    },
  },
});

export const { addTodo } = todoSlice.actions();

export default todoSlice.reducer;
