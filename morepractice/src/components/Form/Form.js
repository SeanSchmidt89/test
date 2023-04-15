import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../store/todoSlice";
import "./Form.css";

export const Form = () => {
  const [inputText, setInputText] = useState("");
  const [priority, setPriority] = useState("medium");
  const dispatch = useDispatch();

  const inputHandler = (e) => {
    setInputText(e.target.value);
  };

  const formHandler = (e) => {
    e.preventDefault();
    let todo = {
      id: Math.random() * 10000,
      title: inputText,
      complete: false,
      priority: priority,
    };
    dispatch(addTodo(todo));
    setInputText("");
  };
  return (
    <div className="form">
      Form
      <form onSubmit={formHandler}>
        <h2>Add a Todo</h2>
        <input
          onChange={inputHandler}
          value={inputText}
          placeholder="Todo Name"
        />
        <select defaultValue="medium">
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};
