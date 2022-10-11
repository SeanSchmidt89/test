import React from "react";
import apiBase from "../Api/apiBase";
import apiKey from "../Api/apiKey";
import { useDispatch } from "react-redux";
import { MovieSliceActions } from "../Store/MovieSlice";
import { moviesList } from "../Store/MovieSlice";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";
import "./Home.css";

const Home = () => {
  const dispatch = useDispatch();
  const movies = useSelector(moviesList);
  const searchInput = "Harry";
  const getMovies = async () => {
    const response = await apiBase
      .get(`?apikey=${apiKey}&type=movie&s=${searchInput}`)
      .catch((error) => {
        console.log("error is :", error);
      });
    dispatch(MovieSliceActions.addMovies(response.data));
  };
  console.log(movies);
  return (
    <div>
      Home<button onClick={getMovies}>Get movies</button>
      <div className="movies-container">
        {movies.Search &&
          movies.Search.map((movie, index) => (
            <MovieCard key={index} data={movie} />
          ))}
      </div>
    </div>
  );
};

export default Home;
