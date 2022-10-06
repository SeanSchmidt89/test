import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import movieApi from "../../common/apis/movieApi";
import { APIkey } from "../../common/apis//MovieApiKey";

const Home = () => {
  useEffect(() => {
    const movieText = "Harry";

    const fetchMovies = async () => {
      const response = await movieApi
        .get(`?apikey=${APIkey}&s=${movieText}&type=movie`)
        .catch((err) => {
          console.log("error: ", err);
        });
      console.log("response: ", response);
    };

    fetchMovies();
  }, []);
  return (
    <div className="home">
      <div className="banner-img">
        <MovieListing />
      </div>
    </div>
  );
};

export default Home;
