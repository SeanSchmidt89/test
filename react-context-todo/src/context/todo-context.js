import React, { createContext, useState } from "react";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [updateTodo, setUpdateTodo] = useState(null);

  const inputHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const todo = {
      id: Math.floor(Math.random() * 10000),
      title: inputText,
      complete: false,
    };
    setTodos((preList) => [...preList, todo]);
    setInputText("");
  };
  return (
    <TodoContext.Provider
      value={{
        todos,
        inputText,
        setInputText,
        setTodos,
        inputHandler,
        submitHandler,
        openModal,
        setOpenModal,
        updateTodo,
        setUpdateTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
