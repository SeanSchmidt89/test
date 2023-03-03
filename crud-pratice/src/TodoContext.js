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
    let priorityNumber = 0;
    if (priority === "high") {
      priorityNumber = 1;
    } else if (priority === "medium") {
      priorityNumber = 2;
    } else {
      priorityNumber = 3;
    }

    e.preventDefault();
    let newTodo = {
      id: Math.random() * 10000,
      title: title,
      complete: false,
      priority: priority,
      priorityNum: priorityNumber,
    };
    setTodos((prevTodos) => {
      return [...prevTodos, newTodo];
    });
    setTitle("");
  };

  const filterTodos = (e) => {
    let sortSetting = e.target.value;
    if (sortSetting === "high") {
      let sortedTodos = todos.sort((a, b) => {
        return a.priorityNum - b.priorityNum;
      });
      console.log(sortedTodos);
      setTodos([...sortedTodos]);
    } else if (sortSetting === "low") {
      let sortedTodos = todos.sort((a, b) => {
        return b.priorityNum - a.priorityNum;
      });
      console.log(sortedTodos);
      setTodos([...sortedTodos]);
    }
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        title,
        filterTodos,
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
