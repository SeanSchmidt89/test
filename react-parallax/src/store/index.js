import { legacy_createStore as createStore } from "redux";

const CounterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "add") {
    console.log('worked')
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === "delete") {
    return {
      counter: state.counter - 1,
    };
  }
  return state;
};

const store = createStore(CounterReducer);

export default store;
