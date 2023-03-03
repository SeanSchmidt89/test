import React, { useContext } from "react";
import "../../TodoContext";
import "./TodoList.css";
import "../Todo/Todo";
import Todo from "../Todo/Todo";
import TodoContext from "../../TodoContext";

const TodoList = () => {
  const { todos, filterTodos } = useContext(TodoContext);
  return (
    <div className="todoList">
      {todos.length > 0 ? (
        <div className="filter">
          <h2>Filter by Priority:</h2>
          <select onChange={filterTodos}>
            <option> </option>
            <option>high</option>
            <option>low</option>
          </select>
        </div>
      ) : null}
      {todos.length > 0 ? (
        todos.map((item) => <Todo key={item.id} item={item} />)
      ) : (
        <p>no todos yet</p>
      )}
    </div>
  );
};

export default TodoList;
