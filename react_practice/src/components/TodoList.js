import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos }) => {
  return (
    <div>
      <h3>List:</h3>
      {todos.map((todo) => {
        return (
          <Todo
            key={todo.id}
            title={todo.title}
            todo={todo}
            todos={todos}
            setTodos={setTodos}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
