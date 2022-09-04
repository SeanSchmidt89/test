import React, { createContext, useState } from "react";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  const inputHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const todo = {
      id: Math.floor(Math.random() * 10000),
      title: inputText,
      completed: false,
    };
    setTodos((prevList) => [...prevList, todo]);
    setInputText("");
  };
  return (
    <TodoContext.Provider value={{ todos, inputText, inputHandler, submitHandler }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
