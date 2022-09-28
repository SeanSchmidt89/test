import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { counterAction } from "../../store/CounterSlice";
import styles from "./Counter.module.css";

const Counter = () => {
  const [input, setInput] = useState("");
  const [nan, setNan] = useState(false);
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter);

  const increaseHandler = () => {
    dispatch(counterAction.increase());
  };

  const decreaseHandler = () => {
    dispatch(counterAction.decrease());
  };

  const increaseFiveHandler = () => {
    dispatch(counterAction.increaseFive(5));
  };

  const decreaseFiveHandler = () => {
    dispatch(counterAction.decreaseFive(-5));
  };

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    let inputNum = parseInt(input);
    if (isNaN(inputNum)) {
      setNan(true);
      setInput("");
      return;
    }
    dispatch(counterAction.input(inputNum));
    setInput("");
    setNan(false);
  };

  return (
    <div className={styles.counterContainer}>
      <div className={styles.btns}>
        <button onClick={increaseHandler}>increase</button>
        <button onClick={decreaseHandler}>decrease</button>
        <button onClick={increaseFiveHandler}>Add 5</button>
        <button onClick={decreaseFiveHandler}>Subtract 5</button>
      </div>
      <div className={styles.input}>
        <form onSubmit={submitHandler}>
          <input
            onChange={inputHandler}
            value={input}
            placeholder="add an amount"
          />
          <button type="submit">Submit</button>
        </form>
        <p className={styles.nan}>{nan && "Please choose a number"}</p>
      </div>

      <div className={styles.count}>{count}</div>
    </div>
  );
};

export default Counter;
