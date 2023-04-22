import React, { useState } from "react";
import { deleteTodo, completeTodo } from "../../store/todoSlice";
import { useDispatch } from "react-redux";
import "./TodoItem.css";

const TodoItem = ({ item }) => {
  const [showUpdate, setShowUpdate] = useState(false);
  const dispatch = useDispatch();

  const deleteHandler = () => {
    dispatch(deleteTodo(item.id));
  };

  const completeHandler = () => {
    dispatch(completeTodo(item.id));
  };

  const showUpdateHandler = () => {
    setShowUpdate(!showUpdate);
  };
  return (
    <div className="todo-item">
      <div className="item-title">
        <p>{item.title}</p>
        <p className="complete">{item.complete ? "Done" : "Not Done"}</p>
      </div>
      <div>
        <button onClick={deleteHandler}>Delete</button>
        <button onClick={completeHandler}>Complete</button>
        <button onClick={showUpdateHandler}>Update</button>
      </div>
      {showUpdate && <p>show update</p>}
    </div>
  );
};

export default TodoItem;
