import React, { useState, createContext } from "react";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [priority, SetPriority] = useState("medium");

  const titleHandler = (e) => {
    setTitle(e.target.value);
  };

  const selectHandler = (e) => {
    SetPriority(e.target.value);
  };

  const formHandler = (e) => {
    e.preventDefault();
    let newTodo = {
      id: Math.random() * 10000,
      title: title,
      complete: false,
      priority: priority,
    };
    setTodos((prevTodos) => {
      return [...prevTodos, newTodo];
    });
    setTitle("");
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        title,
        selectHandler,
        setTodos,
        titleHandler,
        formHandler,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
