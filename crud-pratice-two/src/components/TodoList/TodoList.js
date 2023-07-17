import React from "react";
import Todo from "../Todo/Todo";
import { useSelector } from "react-redux/es/hooks/useSelector";
import "./TodoList.css";

const TodoList = () => {
  const todos = useSelector((state) => state.todos.todos);
  return (
    <div>
      TodoList
      {todos.length > 0 ? todos.map((item) => <Todo todo={item} />) : null}
    </div>
  );
};

export default TodoList;
