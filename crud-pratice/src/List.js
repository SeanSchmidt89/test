import React, { useContext } from "react";
import TodoContext from "./TodoContext";
import Todo from "./Todo";

const List = () => {
  const { todoList } = useContext(TodoContext);
  return (
    <div>
      {todoList.map((item) => (
        <Todo key={item.todoTitle} item={item} />
      ))}
    </div>
  );
};

export default List;
