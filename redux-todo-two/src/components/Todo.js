import React from "react";
import { useDispatch } from "react-redux";
import { TodoSliceActions } from "../store/TodoSlice";

const Todo = ({ todo, name, completed, id }) => {
  const dispatch = useDispatch();
  const completeHandler = () => {
    dispatch(TodoSliceActions.completedTodo({ id: id }));
  };
  return (
    <div>
      Todo
      <p>
        name: {name} completed: {!completed ? "false" : "true"}
      </p>
      <button onClick={completeHandler}>Complete</button>
    </div>
  );
};

export default Todo;
