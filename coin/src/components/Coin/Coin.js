import React from "react";
import { FiArrowUpRight, FiArrowDown } from "react-icons/fi";
import "./Coin.css";

const Coin = ({ data }) => {
  return (
    <div className="coin">
      <div className="top"><img src={data.image} alt={data.id} /></div>
      <div>
        <h5>{data.id}</h5>
        <p>${data.current_price}</p>
      </div>
      <span>
        <FiArrowUpRight size={10}/>
        {data.price_change_percentage_24h}
      </span>
    </div>
  );
};

export default Coin;
