import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const TodoSlice = createSlice({
  name: "todoSlice",
  initialState: initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((item) => item.id !== action.payload);
    },
    completeTodo: (state, action) => {
      let id = action.payload;
      state.todos = state.todos.map((item) => {
        if (item.id === id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      });
    },
  },
});

export const { addTodo, deleteTodo, completeTodo } = TodoSlice.actions;

export default TodoSlice.reducer;
