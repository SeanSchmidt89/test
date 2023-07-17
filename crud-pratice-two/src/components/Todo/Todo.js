import React from "react";
import "./Todo.css";

const Todo = ({ todo }) => {
  return (
    <div className="todo">
      Name: {todo.name}
      Completed: {todo.completed ? "Done" : "Not"}
    </div>
  );
};

export default Todo;
