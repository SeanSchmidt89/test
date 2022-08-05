import React, {useState} from 'react';

const UserList = (props) => {
    return (
        <div>
            <h1>List</h1>
            {props.list.map((user) => {
                <p key={user.id}>{user.name}</p>
            })}
        </div>
    )
}

export default UserList;