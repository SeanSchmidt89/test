import React from "react";
import { deleteTodo } from "../../store/todoSlice";
import { useDispatch } from "react-redux";
import "./TodoItem.css";

const TodoItem = ({ item }) => {
  const dispatch = useDispatch();

  const deleteHandler = () => {
    dispatch(deleteTodo(item.id));
  };
  return (
    <div className="todo-item">
      {item.title}
      <button onClick={deleteHandler}>Delete</button>
    </div>
  );
};

export default TodoItem;
// notes
