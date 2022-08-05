import React, { useState } from "react";

const AddUser = (props) => {
    const[name, setName] = useState('')
    const[password, setPassword] = useState('')


    const nameHandler = (event) => {
        setName(event.target.value)
    }

    const passwordHandler = (event) => {
        setPassword(event.target.value)
    }

    const formHandler = (event) => {
        event.preventDefault()
        props.onAdd(name, password)
        setName('')
        setPassword('')
    }

  return (
    <div>
      <form onSubmit={formHandler}>
        <input onChange={nameHandler} value={name} type="text" placeholder="Username" />
        <input onChange={passwordHandler} value={password} type="text" placeholder="Password" />
        <button>Add User</button>
      </form>
    </div>
  );
};

export default AddUser;
