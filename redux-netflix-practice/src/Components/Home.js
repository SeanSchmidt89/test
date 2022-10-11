import React, { useState } from "react";
import apiBase from "../Api/apiBase";
import apiKey from "../Api/apiKey";
import { useDispatch } from "react-redux";
import { MovieSliceActions } from "../Store/MovieSlice";
import { moviesList } from "../Store/MovieSlice";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";
import "./Home.css";

const Home = () => {
  const [inputText, setInputText] = useState("");
  const dispatch = useDispatch();
  const movies = useSelector(moviesList);

  const getMovies = async () => {
    const response = await apiBase
      .get(`?apikey=${apiKey}&type=movie&s=${inputText}`)
      .catch((error) => {
        console.log("error is :", error);
      });
    dispatch(MovieSliceActions.addMovies(response.data));
    setInputText("");
  };

  const submitHandler = (e) => {
    e.preventDefault();
    getMovies();
  };

  const inputHandler = (e) => {
    setInputText(e.target.value);
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input onChange={inputHandler} value={inputText} />
        <button type="submit">Get movies</button>
      </form>
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
