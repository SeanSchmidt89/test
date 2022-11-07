import React from "react";
import "./Coin.css";

const Coin = ({ coin }) => {
  return (
    <div className="coin-row">
      <p>{coin.market_cap_rank}</p>
      <div className="img-symbol">
        <img src={coin.image} alt={coin.name} />
        <p>{coin.symbol}</p>
      </div>
      <p>{coin.current_price.toFixed(2)}</p>
      <p>{coin.price_change_percentage_24h.toFixed(2)}</p>
      <p className="hide-moblie">{coin.total_volume.toFixed(2)}</p>
      <p>{coin.market_cap.toFixed(2)}</p>
    </div>
  );
};

export default Coin;
