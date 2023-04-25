import React, { useState } from "react";
import { deleteTodo, completeTodo, updateTodo } from "../../store/todoSlice";
import { useDispatch } from "react-redux";
import "./TodoItem.css";

const TodoItem = ({ item }) => {
  const [showUpdate, setShowUpdate] = useState(false);
  const [updateText, setUpdateText] = useState(item.title);
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

  const updateFormHandler = (e) => {
    e.preventDefault();
    setShowUpdate(false);
    let newTitle = updateText;
    setUpdateText("");
    dispatch(updateTodo({ id: item.id, title: newTitle }));
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
      {showUpdate && (
        <form onSubmit={updateFormHandler}>
          <input
            onChange={(e) => setUpdateText(e.target.value)}
            value={updateText}
            placeholder="update todo"
          />
          <button type="submit">Update</button>
        </form>
      )}
    </div>
  );
};

export default TodoItem;
