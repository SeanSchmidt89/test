import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.show);

  const addHandler = () => {
    dispatch({ type: "add" });
  };

  const deleteHandler = () => {
    dispatch({ type: "delete" });
  };

  const showHandler = () => {
    dispatch({ type: "show" });
  };
  return (
    <div>
      <h2>counter</h2>
      {show && <p>{counter}</p>}
      <button onClick={addHandler}>add</button>
      <button onClick={deleteHandler}>delete</button>
      <button onClick={showHandler}>Show counter</button>
    </div>
  );
};

export default Counter;
