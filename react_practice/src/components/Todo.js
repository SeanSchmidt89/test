import React from "react";

const Todo = ({ title, todo, todos, setTodos }) => {
  const deleteHandler = (event) => {
    const deletedList = todos.filter((item) => {
      if (item.id !== todo.id) {
        return item;
      }
    });
    setTodos(deletedList);
  };
  return (
    <div>
      <p>
        Name: {title} <button onClick={deleteHandler}>Delete</button>
      </p>
    </div>
  );
};

export default Todo;
