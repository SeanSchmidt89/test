import React, { useContext } from "react";
import TodoContext from "../context/todo-context";

const Todo = ({ todo }) => {
  const { todos, setTodos } = useContext(TodoContext);

  const deleteHandler = () => {
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
        return { ...item, complete: !item.complete };
      }
      return item;
    });
    setTodos(completeList);
  };
  return (
    <div>
      <p className={todo.complete ? 'completed' : ''}>{todo.title}</p>
      <button onClick={deleteHandler}>Delete</button>
      <button onClick={completeHandler}>Completed</button>
    </div>
  );
};

export default Todo;
