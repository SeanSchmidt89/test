import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const TodoSlice = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos = state.todos.push(action.payload);
    },
  },
});

//  export {addTodo} = TodoSlice.actions()
//double check this
