import React from "react";
import { useSelector } from "react-redux";
import Todo from "./Todo";

const TodoList = () => {
  const todosList = useSelector((state) => state.todos);
  return (
    <div>
      TodoList
      {todosList.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          name={todo.name}
          completed={todo.completed}
          id={todo.id}
        />
      ))}
    </div>
  );
};

export default TodoList;
