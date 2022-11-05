import React from "react";
import "./Coin.css";

const Coin = ({ item }) => {
  return (
    <>
      <h3>{item.name}</h3>
      <img src={item.image} alt={item.name} />
    </>
  );
};

export default Coin;
