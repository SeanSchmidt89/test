import React from "react";
import "./MovieCard.css";

const MovieCard = ({ data }) => {
  return (
    <div className="card-container">
      <div className="upper-card">
        <img src={data.Poster} alt="/" />
      </div>
      <div className="lower-card"></div>
    </div>
  );
};

export default MovieCard;
