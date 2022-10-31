import React from "react";
import { FiArrowUpRight, FiArrowDown } from "react-icons/fi";
import BTC from "../../assets/btc-img.png";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h2>Explore top Crypto's like Bitcoin, Ethereum, and Dogecoin</h2>
          <p>See all available assests: Cryptocurrencies and NFT's</p>
          <button className="btn">See More Coins</button>
        </div>
        <div className="right">
          <div className="top">
            <img src={BTC} alt="" />
          </div>
          <div>
            <h5>Bitcoin</h5>
            <p>$49,000</p>
          </div>
          <span>
            <FiArrowUpRight />2.5%
          </span>
        </div>
      </div>
    </div>
  );
};

export default Featured;
