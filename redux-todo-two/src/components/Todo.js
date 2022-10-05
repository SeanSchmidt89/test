import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { TodoSliceActions } from "../store/TodoSlice";

const Todo = ({ todo, name, completed, id }) => {
  const [inputText, setInputText] = useState("");
  const dispatch = useDispatch();
  const completeHandler = () => {
    dispatch(TodoSliceActions.completedTodo({ id: id }));
  };

  const inputHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(TodoSliceActions.updateTodo({ name: inputText, id: id }));
    setInputText("");
  };
  return (
    <div>
      Todo
      <p>
        name: {name} completed: {!completed ? "false" : "true"}
      </p>
      <button onClick={completeHandler}>Complete</button>
      <p>UPDATE</p>
      <form onSubmit={submitHandler}>
        <input onChange={inputHandler} value={inputText} />
        <button type="submit">update</button>
      </form>
    </div>
  );
};

export default Todo;
