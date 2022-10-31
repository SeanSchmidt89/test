import axios from "axios";
import React, { useEffect } from "react";
import { FiArrowUpRight, FiArrowDown } from "react-icons/fi";
import BTC from "../../assets/btc-img.png";
import { useDispatch, useSelector } from "react-redux";
import { cryptoSliceActions } from "../../store/cryptoSlice";
import "./Featured.css";

const Featured = () => {
  const dispatch = useDispatch();
  const cryptoList = useSelector(state => state.crypto.crypto)
  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false"
      )
      .then((response) => {
        console.log(response.data);
        dispatch(cryptoSliceActions.add(response.data));
      });
  }, [dispatch]);
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
            <FiArrowUpRight />
            2.5%
          </span>
        </div>
      </div>
      {cryptoList && cryptoList.map((item) => <p key={item.id}>Name: {item.id}</p>)}
    </div>
  );
};

export default Featured;
