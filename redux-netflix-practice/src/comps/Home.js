import React, { useEffect } from "react";
import axios from "axios";

const Home = () => {
  const getMovies = async () => {
    const response = await axios
      .get("http://www.omdbapi.com/?apikey=21a9d206&s=Harry&type=movie")
      .catch((error) => {
        console.log(error);
      });
    console.log(response);
  };
  return (
    <div>
      Home<button onClick={getMovies}>Get movies</button>
    </div>
  );
};

export default Home;
