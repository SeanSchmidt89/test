import React from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import User from "./components/User";
import { UserSliceActions } from "./store/UserSlice";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const fetchApi = async () => {
    const response = await axios
      .get("https://randomuser.me/api/")
      .catch((error) => {
        console.log("ERROR", error);
      });
    dispatch(UserSliceActions.addUser(response));
  };

  //response.data.results[0]

  const randomHandler = (e) => {
    fetchApi();
  };

  return (
    <div className="App">
      <button onClick={randomHandler}>API CALL</button>
      <User />
    </div>
  );
}

export default App;
