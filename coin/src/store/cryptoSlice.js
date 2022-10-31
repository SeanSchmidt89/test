import { createSlice } from "@reduxjs/toolkit";

const initialState = { crypto: [] };

const cryptoSlice = createSlice({
  name: "crypto",
  initialState: initialState,
  reducers: {
    add: (state, action) => {
      state.crypto = action.payload;
    },
  },
});

export const cryptoSliceActions = cryptoSlice.actions;

export default cryptoSlice.reducer;
