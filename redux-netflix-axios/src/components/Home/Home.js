import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import movieApi from "../../common/apis/movieApi";
import { APIkey } from "../../common/apis//MovieApiKey";
import { useDispatch } from "react-redux";
import { addMovies } from "../../store/movieSlice";

const Home = () => {
  const dispatch = useDispatch();
  const movieText = "Harry";
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await movieApi
        .get(`?apikey=${APIkey}&s=${movieText}&type=movie`)
        .catch((err) => {
          console.log("error: ", err);
        });
      dispatch(addMovies(response.data));
    };
    fetchMovies();
  }, [dispatch]);
  return (
    <div className="home">
      <div className="banner-img">
        <MovieListing />
      </div>
    </div>
  );
};

export default Home;
