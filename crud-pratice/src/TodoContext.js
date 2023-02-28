import React, { useState, createContext } from "react";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");

  const titleHandler = (e) => {
    setTitle(e.target.value);
  };

  const formHandler = (e) => {
    e.preventDefault();
    let newTodo = {
      id: Math.random() * 10000,
      title: title,
      complete: false,
    };
    setTodos((prevTodos) => {
      return [...prevTodos, newTodo];
    });
    setTitle("");
  };

  return (
    <TodoContext.Provider
      value={{ todos, setTodos, title, titleHandler, formHandler}}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
