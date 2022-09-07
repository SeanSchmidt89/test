import React, { useContext } from "react";
import TodoContext from "../context/todo-context";

const Modal = () => {
  const {
    todos,
    setTodos,
    openModal,
    setOpenModal,
    inputText,
    setInputText,
    updateTodo,
  } = useContext(TodoContext);

  const closeHandler = () => {
    setOpenModal(false);
  };

  const inputHandler = (e) => {
    setInputText(e.target.value);
  };

  const updateHandler = (e) => {
    const updatedList = todos.map((item) => {
      if (item.id === updateTodo) {
        return { ...item, title: inputText };
      }
      return item;
    });
    setTodos(updatedList);
    setInputText("");
    setOpenModal(false);
  };

  if (!openModal) return null;
  return (
    <div>
      Modal
      <input
        onChange={inputHandler}
        value={inputText}
        placeholder="Update Todo"
      />
      <button onClick={updateHandler}>Update</button>
      <button onClick={closeHandler}>Close</button>
    </div>
  );
};

export default Modal;
