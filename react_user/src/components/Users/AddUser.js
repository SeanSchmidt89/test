import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";

const AddUser = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();

    if (name.trim().length === 0 || age.trim().length === 0) {
      return alert("Please enter a value");
    }
    if (+age < 1) {
      return alert("enter a valid age");
    } 
    props.onAddUser(name, age);
    setName("");
    setAge("");
  };

  const nameHandler = (event) => {
    setName(event.target.value);
  };

  const ageHandler = (event) => {
    setAge(event.target.value);
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input onChange={nameHandler} value={name} id="username" type="text" />
        <label htmlFor="age">Age</label>
        <input onChange={ageHandler} value={age} id="age" type="number" />
        <Button type="submit">Add</Button>
      </form>
    </Card>
  );
};

export default AddUser;
