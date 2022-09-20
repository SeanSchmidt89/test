import React from "react";
import Todo from "./Todo";
import { useSelector } from "react-redux";

const TodoList = (props) => {
  const todos = useSelector((state) => state.todos);
  return (
    <div>
      <h2>todo List</h2>
      <ul>
        {todos.map((todo) => (
          <Todo id={todo.id} title={todo.title} completed={todo.completed} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
