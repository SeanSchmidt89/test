import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cryptoSliceActions } from "../../store/cryptoSlice";
import Coin from "../Coin/Coin";
import "./Featured.css";

const Featured = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.crypto.crypto);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=12&page=1&sparkline=false"
      )
      .then((response) => {
        dispatch(cryptoSliceActions.add(response.data));
      })
      .catch((error) => {
        console.log(error);
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
          {data.length > 0 &&
            data.map((item) => <Coin key={item.id} data={item} />)}
        </div>
      </div>
    </div>
  );
};

export default Featured;