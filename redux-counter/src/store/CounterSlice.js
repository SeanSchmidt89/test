import { createSlice } from "@reduxjs/toolkit";

const CounterSlice = createSlice({
  name: "count",
  initialState: { counter: 0, showCounter: true },
  reducers: {
    increase(state) {
      state.counter = state.counter + 1;
    },
    decrease(state) {
      state.counter = state.counter - 1;
    },
    increaseFive(state, action) {
      state.counter = state.counter + action.payload;
    },
    decreaseFive(state, action) {
      state.counter = state.counter + action.payload;
    },
    input(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterAction = CounterSlice.actions;

export default CounterSlice;
