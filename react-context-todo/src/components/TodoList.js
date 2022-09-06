import React, { useContext } from "react";
import TodoContext from "../context/todo-context";
import Todo from "./Todo";

const TodoList = () => {
  const { todos } = useContext(TodoContext);
  return (
    <div>
      <h3>List</h3>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
