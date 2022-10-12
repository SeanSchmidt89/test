import React from "react";
import { useSelector } from "react-redux";

const User = () => {
    const user = useSelector(state => state.user)
    console.log(user)
  return (
    <>
      {user.picture ? <div className="user-container">
      <div className="upper">
        <img src={user.picture.large} alt={user.name.first}/>
      </div>
      <div className="lower">
        <h2>Name: {user.name.title}. {user.name.last}, {user.name.first}</h2>
        <p>Age: {user.dob.age}</p>
        <p>Gender: {user.gender}</p>
        <p>Location: {user.location.city}, {user.location.country}</p>
        <p>Cell Number: {user.cell}</p>
      </div>
    </div> : null}
    </>
  );
};

export default User;
