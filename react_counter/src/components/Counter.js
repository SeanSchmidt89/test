import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(3);

  const upHandler = () => {
    setCount(prevCount => prevCount + 1)
  };

  const downHandler = () => {
    setCount(prevCount => prevCount - 1)
  };

  return (
    <div>
      <h1>Counter</h1>
      <br />
      <p>Your count is: {count}</p>
      <button onClick={upHandler}>Up</button>
      <button onClick={downHandler}>Down</button>
    </div>
  );
};

export default Counter;
