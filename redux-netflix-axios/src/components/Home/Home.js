import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import { useDispatch } from "react-redux";
import { addMovies } from "../../store/movieSlice";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {}, []);
  return (
    <div className="home">
      <div className="banner-img">
        <MovieListing />
      </div>
    </div>
  );
};

export default Home;
