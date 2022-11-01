import React from "react";
import { FiArrowUpRight, FiArrowDown } from "react-icons/fi";
import "./Coin.css";

const Coin = ({ data }) => {
  return (
    <div className="coin">
      <div className="top">
        <img src={data.image} alt={data.id} />
      </div>
      <div>
        <h5>{data.id}</h5>
        <p>${data.current_price.toLocaleString()}</p>
      </div>

      {data.price_change_percentage_24h > 0 ? (
        <span className="green">
          {data.price_change_percentage_24h.toFixed(2)}%
          <FiArrowUpRight size={15} style={{ color: "green" }} />
        </span>
      ) : (
        <span className="red">
          {data.price_change_percentage_24h.toFixed(2)}%
          <FiArrowDown size={15} style={{ color: "red" }} />
        </span>
      )}
    </div>
  );
};

export default Coin;
