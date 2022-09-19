import { legacy_createStore as createStore } from "redux";

const counterReducer = (state = { counter: 0, show: true }, action) => {
  if (action.type === "add") {
    return {
      counter: state.counter + 1,
      show: true,
    };
  }
  if (action.type === "delete") {
    return {
      counter: state.counter - 1,
      show: true,
    };
  }
  if(action.type === 'show') {
    return {
        counter: state.counter,
        show: !state.show,
    }
  }
  return state;
};

const store = createStore(counterReducer);

export default store;
