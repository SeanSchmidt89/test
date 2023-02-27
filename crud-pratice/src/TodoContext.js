import React, { useState, createContext } from "react";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todoList, setTodoList] = useState([]);

  const addTodo = (todo) => {
    setTodoList((prevList) => {
      return [...prevList, todo];
    });
  };
  return (
    <TodoContext.Provider value={{ todoList, addTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext
