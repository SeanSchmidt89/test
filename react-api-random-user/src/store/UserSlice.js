import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
};

const UserSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const UserSliceActions = UserSlice.actions;

export default UserSlice.reducer;
