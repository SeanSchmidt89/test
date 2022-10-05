import { createSlice } from "@reduxjs/toolkit";

const TodoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        name: action.payload.name,
        completed: false,
        id: Math.floor(Math.random() * 10000),
      };
      state.push(newTodo);
    },
    completedTodo: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].completed = !state[index].completed;
    },
    updateTodo: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].name = action.payload.name;
    },
  },
});

export const TodoSliceActions = TodoSlice.actions;

export default TodoSlice.reducer;
