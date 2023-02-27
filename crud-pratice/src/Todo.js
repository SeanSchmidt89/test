import React from "react";

const Todo = ({ item }) => {
  return (
    <div>
      <p>{item.todoTitle}</p>
      <p>{item.todoContent}</p>
    </div>
  );
};

export default Todo;
