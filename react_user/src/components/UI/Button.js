import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      onClick={props.onCLick}
      className={classes.button}
      type={props.type || "button"}
    >
        {props.children}
    </button>
  );
};

export default Button;
