import React from "react";
import "./Todo.css";

const Todo = ({ todo }) => {
  return (
    <div className="todo">
      <div className="todo-header">
        <div className="left">
          <div>Name:</div>
          <div>Date:</div>
          <div>Completed:</div>
        </div>
        <div className="right">
          <div>{todo.name}</div>
          <div>{todo.completed ? "Done" : "No"}</div>
          <div>date</div>
        </div>
      </div>
      <div className="todo-buttons">
        <button>Title</button>
        <button>Text</button>
        <button>Complete</button>
      </div>
      <div className="todo-text"></div>
    </div>
  );
};

export default Todo;
