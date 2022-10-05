import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { TodoSliceActions } from "../store/TodoSlice";

const TodoForm = () => {
  const [inputText, setInputText] = useState("");
  const dispatch = useDispatch();

  const inputHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(TodoSliceActions.addTodo({ name: inputText }));
    setInputText("");
  };
  return (
    <div>
      TodoForm
      <form onSubmit={submitHandler}>
        <input
          onChange={inputHandler}
          value={inputText}
          placeholder="add a todo"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TodoForm;
