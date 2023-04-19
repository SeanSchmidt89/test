import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../store/todoSlice";
import "./Form.css";

const Form = () => {
  const [inputText, setInputText] = useState("");
  const [priority, setPriority] = useState("Medium");
  const dispatch = useDispatch();

  const inputHandler = (e) => {
    setInputText(e.target.value);
  };

  const selectHandler = (e) => {
    setPriority(e.target.value);
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
      <form onSubmit={formHandler}>
        <h2>Add a Todo</h2>
        <div className="form-container">
          <div className="input-container">
            <input
              onChange={inputHandler}
              value={inputText}
              placeholder="Todo Name"
            />
            <select onChange={selectHandler} defaultValue="Medium">
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>
          </div>
          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
