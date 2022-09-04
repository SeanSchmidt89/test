import React, { useContext } from "react";
import TodoContext from "../context/TodoContext";
import Todo from "./Todo";

const TodoList = () => {
  const { todos } = useContext(TodoContext);
  return (
    <div>
      <h3>Todo List</h3>
      {todos.map((todo) => {return(<Todo id={todo.id} todo={todo}/>)})}
    </div>
  );
};

export default TodoList;
