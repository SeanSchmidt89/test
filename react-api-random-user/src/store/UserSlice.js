import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
};

const UserSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    addUser: (state, action) => {
      if (action.payload.status === 200) {
        state.user = action.payload.data.results[0];
        console.log("worked");
      } else {
        console.log('didnt work')
      }
    },
  },
});

export const UserSliceActions = UserSlice.actions;

export default UserSlice.reducer;
