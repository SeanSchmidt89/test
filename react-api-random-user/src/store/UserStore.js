import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./UserSlice";

const UserStore = configureStore({
  name: "user",
  reducer: UserReducer,
});

export default UserStore;
