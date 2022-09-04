import React, { useContext } from "react";
import TodoContext from "../context/TodoContext";

const Todo = ({ todo }) => {
  const { todos, setTodos } = useContext(TodoContext);

  const deleteHandler = (e) => {
    const deleteList = todos.filter((item) => {
      if (item.id !== todo.id) {
        return item;
      }
    });
    setTodos(deleteList);
  };

  const completeHandler = () => {
    const completeList = todos.map((item) => {
      if (item.id === todo.id) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    setTodos(completeList);
  };
  return (
    <li className={todo.completed && 'completed'}>
      name: {todo.title}
      <button onClick={deleteHandler}>delete</button>
      <button onClick={completeHandler}>Check</button>
    </li>
  );
};

export default Todo;
