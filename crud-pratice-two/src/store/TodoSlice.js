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
    updateName: (state, action) => {
      let nextName = action.payload;
      state.todos = state.todos.map((item) => {
        if (item.id === nextName.id) {
          return { ...item, name: nextName.name };
        }
        return item;
      });
    },
  },
});

export const { addTodo, deleteTodo, completeTodo, updateName } =
  TodoSlice.actions;

export default TodoSlice.reducer;
