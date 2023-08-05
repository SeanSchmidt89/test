import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, completeTodo } from "../../store/TodoSlice";
import "./Todo.css";

const Todo = ({ todo }) => {
  const [edit, setEdit] = useState(false);
  const dispatch = useDispatch();

  const deleteHandler = (e) => {
    let id = todo.id;
    dispatch(deleteTodo(id));
  };

  const editHandler = (e) => {
    setEdit(!edit);
  };

  const completeHandler = (e) => {
    let id = todo.id;
    dispatch(completeTodo(id));
  };
  // need to put exisiting string of item inside input as place holder

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
        <button onClick={editHandler}>Edit</button>
        <button onClick={completeHandler}>Complete</button>
      </div>
      <div className="todo-text"></div>
      <div className="border-one" />
      <div className="border-two" />
      {edit && <input />}
    
    </div>
  );
};

export default Todo;
