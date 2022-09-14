import React from "react";

const Movie = ({ movie }) => {
  return (
    <div>
      <p>Name: {movie.title}</p>
      <p>Opening Lines {movie.openingText}</p>
      <p>Director: {movie.director}</p>
      <p>Release Date: {movie.release_date}</p>
    </div>
  );
};

export default Movie;
