import React from "react";
import TodoItem from "../TodoItem/TodoItem";
import { useSelector } from "react-redux";
import "./TodoList.css";

const TodoList = () => {
  const data = useSelector((state) => state.todos.todos);
  return (
    <div className="todo-list">
      <h2>TodoList</h2>
      {data.length > 0 && (
        <div className="filter">
          <p>Filter Priorrity:</p>
          <select defaultValue="-">
            <option>-</option>
            <option>High</option>
            <option>Low</option>
          </select>
        </div>
      )}
      {data.length > 0 &&
        data.map((item) => <TodoItem key={item.id} item={item} />)}
    </div>
  );
};

export default TodoList;
