import React, { useState } from "react";

const AddUser = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const nameHandler = (event) => {
    setName(event.target.value);
  };

  const ageHandler = (event) => {
    setAge(event.target.value);
  };

  const formHandler = (event) => {
    event.preventDefault();
    props.onAdd(name, age)
    setName('')
    setAge('')
  };

  return (
    <div>
      <p>Add User Comp</p>
      <form onSubmit={formHandler}>
        <input
          type="text"
          onChange={nameHandler}
          value={name}
          placeholder="Name"
        />
        <input
          type="text"
          onChange={ageHandler}
          value={age}
          placeholder="Age"
        />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default AddUser;
