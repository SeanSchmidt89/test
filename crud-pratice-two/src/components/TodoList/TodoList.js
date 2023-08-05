import React from "react";
import Todo from "../Todo/Todo";
import { useSelector } from "react-redux/es/hooks/useSelector";
import "./TodoList.css";

const TodoList = () => {
  const todos = useSelector((state) => state.todos.todos);
  return (
    <div className="todo-list">
      {todos.length > 0 && (
        <div>
          <h2>TodoList</h2>{" "}
          {todos.map((item) => (
            <Todo key={item.id} todo={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TodoList;
