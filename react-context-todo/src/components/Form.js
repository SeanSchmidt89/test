import React, { useContext } from "react";
import TodoContext from "../context/todo-context";

const Form = () => {
  const { inputText, inputHandler, submitHandler } = useContext(TodoContext);
  return (
    <div>
      <h3>Form</h3>
      <form>
        <input onChange={inputHandler} value={inputText} />
        <button onClick={submitHandler}>Add</button>
      </form>
    </div>
  );
};

export default Form;
