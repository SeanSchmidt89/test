import React from "react";
import "./CoinItem.css";

const CoinItem = ({ coin }) => {
  return (
    <div className="coin-row">
      <p>{coin.market_cap_rank}</p>
      <div className="img-symbol">
        <img src={coin.image} alt={coin.name} />
        <p>{coin.symbol}</p>
      </div>
      <p>{coin.current_price}</p>
      <p>{coin.price_change_percentage_24h}</p>
      <p className="hide-moblie">{coin.total_volume}</p>
      <p>{coin.market_cap}</p>
    </div>
  );
};

export default CoinItem;
