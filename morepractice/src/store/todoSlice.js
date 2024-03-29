import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todoSlice",
  initialState: initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action) => {
      let id = action.payload;
      state.todos = state.todos.filter((item) => item.id !== id);
    },
    completeTodo: (state, action) => {
      let id = action.payload;
      state.todos = state.todos.map((item) => {
        if (item.id === id) {
          return { ...item, complete: !item.complete };
        }
        return item;
      });
    },
    updateTodo: (state, action) => {
      let id = action.payload.id;
      let newTitle = action.payload.title;
      state.todos = state.todos.map((item) => {
        if (item.id === id) {
          return { ...item, title: newTitle };
        }
        return item;
      });
    },
  },
});

export const { addTodo, deleteTodo, completeTodo, updateTodo } =
  todoSlice.actions;

export default todoSlice.reducer;

//notes
