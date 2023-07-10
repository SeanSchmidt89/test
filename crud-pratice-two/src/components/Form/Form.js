import React, { useState } from "react";
import { useDispatch} from "react-redux";
import { addTodo } from "../../store/TodoSlice";
import "./Form.css";

const Form = () => {
  const [inputText, setInputText] = useState("");
  // const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();
  const formHandler = (e) => {
    e.preventDefault();
    let todo = {
      name: inputText,
      id: Math.random() * 10000,
      completed: false,
    };
    dispatch(addTodo(todo));
    setInputText("");
  };

  const inputHandler = (e) => {
    setInputText(e.target.value);
  };

  //next create a todo object, import slice actions, send todo to slice
  //import store to app, add provider
  return (
    <div>
      <h2>Form</h2>
      <form onSubmit={formHandler}>
        <input
          onChange={inputHandler}
          value={inputText}
          placeholder="ADD A TODO"
        />
        <button type="submit">ADD</button>
      </form>
    </div>
  );
};

export default Form;
