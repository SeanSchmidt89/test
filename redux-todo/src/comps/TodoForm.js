import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";

const TodoForm = (props) => {
  const [inputText, setInputText] = useState("");
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addTodo({
        title: inputText,
      })
    );
    setInputText("");
  };
  return (
    <div>
      <h2>Todo Form</h2>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          onChange={(event) => setInputText(event.target.value)}
          value={inputText}
        />
        <button>Add</button>
      </form>
    </div>
  );
};

export default TodoForm;
