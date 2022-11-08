import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "./CoinInfo.css";

const CoinInfo = () => {
  const {coinId} = useParams();
  const coins = useSelector((state) => state.coins.coins);
  let coin = coins.filter((item) => item.id === coinId).pop();
  

  return <div>Coin Name: {coin.name}</div>;
};

export default CoinInfo;
