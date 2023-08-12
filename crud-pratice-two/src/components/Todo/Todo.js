import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, completeTodo, updateName } from "../../store/TodoSlice";
import "./Todo.css";

const Todo = ({ todo }) => {
  const [update, setUpdate] = useState(false);
  const [updatedName, setUpdatedName] = useState(todo.name);
  const dispatch = useDispatch();

  const deleteHandler = (e) => {
    let id = todo.id;
    dispatch(deleteTodo(id));
  };

  const updateHandler = (e) => {
    setUpdate(!update);
  };

  const completeHandler = (e) => {
    let id = todo.id;
    dispatch(completeTodo(id));
  };

  const newInputTextHandler = (e) => {
    let text = e.target.value;
    setUpdatedName(text);
  };

  const updateFormHandler = (e) => {
    e.preventDefault();
    let newTodoInfo = { id: todo.id, name: updatedName };
    dispatch(updateName(newTodoInfo));
    setUpdate(false);
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
          <div>{todo.name.slice(0, 17)}</div>
          <div>date</div>
          <div>{todo.completed ? "✓" : "X"}</div>
        </div>
      </div>
      <div className="todo-buttons">
        <button onClick={updateHandler}>Update</button>
        <button onClick={deleteHandler}>Delete</button>
        <button onClick={completeHandler}>Complete</button>
      </div>
      <div className="todo-text"></div>
      <div className="border-one" />
      <div className="border-two" />
      {update && (
        <div className="updateform">
          <form onSubmit={updateFormHandler}>
            <input value={updatedName} onChange={newInputTextHandler} />
            <button type="submit">Add</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Todo;
