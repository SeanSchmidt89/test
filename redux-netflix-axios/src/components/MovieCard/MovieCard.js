import React from "react";
import "./MovieCard.scss";

const MovieCard = ({ data }) => {
  return (
    <div className="card-item">
      <div className="card-inner">
        <div className="card-top">
          <img src={data.Poster} alt={data.title} />
        </div>
        <div className="card-bottom">
          <div className="card-info"><p>{data.Title}</p></div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
