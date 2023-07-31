import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, completeTodo } from "../../store/TodoSlice";
import "./Todo.css";

const Todo = ({ todo }) => {
  const dispatch = useDispatch();

  const deleteHandler = (e) => {
    let id = todo.id;
    dispatch(deleteTodo(id));
  };

  const completeHandler = (e) => {
    let id = todo.id;
    dispatch(completeTodo(id));
  };
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
          <div>date</div>
          <div>{todo.completed ? "✓" : "X"}</div>
        </div>
      </div>
      <div className="todo-buttons">
        <button onClick={deleteHandler}>Delete</button>
        <button>Text</button>
        <button onClick={completeHandler}>Complete</button>
      </div>
      <div className="todo-text"></div>
      <div className="border-one" />
      <div className="border-two" />
    </div>
  );
};

export default Todo;
