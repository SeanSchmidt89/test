import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  coins: [],
  info: {},
};

const coinSlice = createSlice({
  name: "coins",
  initialState: initialState,
  reducers: {
    topCoins: (state, action) => {
      state.coins = action.payload;
    },
    coinInfo: (state, action) => {
      state.info = action.payload;
    },
  },
});

export const coinSliceActions = coinSlice.actions;

export default coinSlice.reducer;
