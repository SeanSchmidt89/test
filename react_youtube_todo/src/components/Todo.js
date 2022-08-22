import React from "react";

const Todo = ({ title, todo, todos, setTodos }) => {
  const deleteHandler = () => {
    const deleteList = todos.filter((item) => item.id !== todo.id);
    setTodos(deleteList);
  };

  const completeHandler = () => {
    const completedList = todos.map((item) => {
      if (item.id === todo.id) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    setTodos(completedList);
  };

  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {title}
      </li>
      <button onClick={completeHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
