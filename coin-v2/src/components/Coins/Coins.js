import React from "react";
import { useSelector } from "react-redux";
import Coin from "../Coin/Coin";
import "./Coins.css";

const Coins = () => {
  const coins = useSelector((state) => state.coins.coins);
  return (
    <div className="container">
      <div>
        <div className="heading">
          <p>#</p>
          <p className="coin-name">Coin</p>
          <p>Price</p>
          <p>24h</p>
          <p className="hide-moblie">Volume</p>
          <p className="hide-moblie">Mkt Cap</p>
        </div>
        {coins.length > 0 &&
          coins.map((coin) => {
            return <Coin key={coin.id} coin={coin} />;
          })}
      </div>
    </div>
  );
};

export default Coins;
