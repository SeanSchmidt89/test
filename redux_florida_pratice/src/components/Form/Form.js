import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../store/todoSlice";
import "./Form.css";

const Form = () => {
  const [inputText, setInputText] = useState("");
  const dispatch = useDispatch();

  const formHandler = (e) => {
    e.preventDefault();
    let todo = {
      id: Math.random() * 10000,
      title: inputText,
      complete: false,
      dateAdded: null,
      dateUpdated: null,
    };
    dispatch(addTodo(todo));
    setInputText("");
  };
  return (
    <div className="form">
      <h2>Todo Form</h2>
      <form onSubmit={formHandler}>
        <input
          onChange={(e) => setInputText(e.target.value)}
          value={inputText}
          placeholder="Add a todo"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default Form;
