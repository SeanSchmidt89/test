import React, {useState} from 'react';
import AddUser from './components/AddUser';
import UserList from './components/UserList';

function App() {
  const[userList, setUserList] = useState([])

  const addUser = (userName, userPassword) => {
    setUserList((prevList) => {
      return [...prevList, {
                  id: Math.random().toString(),
                  name: userName,
                  password: userPassword,
      }]
    })
  }

  return (
    <div className="App">
      <AddUser onAdd={addUser}/>
      <UserList users={userList}/>
    </div>
  );
}

export default App;
