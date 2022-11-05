import { createSlice } from "@reduxjs/toolkit";

initialState = {
  coins: [],
};

const coinSlice = createSlice({
  name: "coins",
  initialState: initialState,
  reducers: {
    topCoins: (state, action) => {
      state.coins = action.payload;
    },
  },
});

export const coinSliceActions = coinSlice.actions

export default coinSlice.reducer
