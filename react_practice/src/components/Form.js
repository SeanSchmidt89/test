import React, { useContext } from "react";
import TodoContext from "../context/TodoContext";

const Form = () => {
  const { inputText, inputHandler, submitHandler } = useContext(TodoContext);
  return (
    <div>
      <h3>Form</h3>
      <form>
        <input onChange={inputHandler} value={inputText} type="text" />
        <button onClick={submitHandler}>add</button>
      </form>
    </div>
  );
};

export default Form;
