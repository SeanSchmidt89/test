import React from "react";
import Counter from "./components/counter/Counter";
import { useDispatch, useSelector } from "react-redux";
import { counterAction } from "./store/CounterSlice";

function App() {
  const dispatch = useDispatch();
  const toggle = useSelector((state) => state.showCounter);
  const counterHandler = () => {
    dispatch(counterAction.toggle());
  };
  return (
    <div className="App">
      app
      {toggle ? <Counter /> : ''}
      <button onClick={counterHandler}>Display</button>
    </div>
  );
}

export default App;
