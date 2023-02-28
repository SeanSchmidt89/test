import React, { useContext } from "react";
import "../../TodoContext";
import "./TodoList.css";
import "../Todo/Todo";
import Todo from "../Todo/Todo";
import TodoContext from "../../TodoContext";

const TodoList = () => {
  const { todos } = useContext(TodoContext);
  return (
    <div className="todoList">
      {todos.length > 0 ? (
        todos.map((item) => <Todo key={item.id} item={item} />)
      ) : (
        <p>no todos yet</p>
      )}
    </div>
  );
};

export default TodoList;
