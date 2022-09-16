import React from "react";
import { useDispatch, useSelector } from "react-redux";
import store from "../store";

const TextBox = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const addHandler = () => {
    dispatch({ type: "add" });
  };

  const deleteHandler = () => {
    dispatch({ type: "delete" });
  };

  return (
    <div className="text-box">
      <h3>text-box</h3>
      <p>Count: {counter}</p>
      <button onClick={addHandler}>add</button>
      <button onClick={deleteHandler}>delete</button>
    </div>
  );
};

export default TextBox;
