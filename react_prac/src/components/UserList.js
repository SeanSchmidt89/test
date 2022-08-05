import React, { useState } from "react";

const UserList = (props) => {
  return (
    <div>
      <h1>List</h1>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
