import React, { useContext } from "react";
import TodoContext from "../../TodoContext";
import "./Todo.css";

const Todo = ({ item }) => {
  const { todos, setTodos } = useContext(TodoContext);

  const deleteHandler = () => {
    let filteredTodos = todos.filter((todo) => todo.id !== item.id);
    setTodos(filteredTodos);
  };

  const completeHandler = () => {
    let completedList = todos.map((todo) => {
      if (todo.id === item.id) {
        return { ...todo, complete: !todo.complete };
      }
      return todo;
    });
    setTodos(completedList);
  };

  return (
    <div className="todo">
      <p>Todo: {item.title}</p>
      <p>complete: {item.complete ? "yes" : "no"}</p>
      <button onClick={deleteHandler}>Delete</button>
      <button onClick={completeHandler}>update</button>
    </div>
  );
};

export default Todo;
