import React from "react";
import { useDispatch } from "react-redux";
import { toggleComplete, deleteTodo } from "../redux/todoSlice";

const Todo = ({ title, completed, id }) => {
  const dispatch = useDispatch();

  const completeHandler = () => {
    dispatch(toggleComplete({ id: id, completed: !completed }));
  };

  const deleteHandler = () => {
    dispatch(deleteTodo({ id: id }));
  };
  return (
    <li>
      <p>
        title: {title} {completed ? "complete!" : ""}
        <button onClick={completeHandler}>complete</button>
        <button onClick={deleteHandler}>delete</button>
      </p>
    </li>
  );
};

export default Todo;
