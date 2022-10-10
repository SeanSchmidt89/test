import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: {},
};

const MovieSlice = createSlice({
  name: "movies",
  initialState: initialState,
  reducers: {
    addMovies: (state, action) => {
      state.movies = action.payload;
    },
  },
});

export const MovieSliceActions = MovieSlice.actions;

export const moviesList = (state) => state.movies.movies;

export default MovieSlice.reducer;
