import { configureStore } from "@reduxjs/toolkit";
import MoviesReducer from "./MovieSlice";

const MovieStore = configureStore({
  reducer: {
    movies: MoviesReducer,
  },
});

export default MovieStore;
