import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();

    if (name.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age',
      })
      return;
    }
    if (+age < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age',
      })
      return;
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

  const errorHandler = () => {
    setError(null)
  }

  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} onErrorHandler={errorHandler}/>}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            onChange={nameHandler}
            value={name}
            id="username"
            type="text"
          />
          <label htmlFor="age">Age</label>
          <input onChange={ageHandler} value={age} id="age" type="number" />
          <Button type="submit">Add</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
