import axios from "axios";
import React, { useEffect } from "react";
import { FiArrowUpRight, FiArrowDown } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { cryptoSliceActions } from "../../store/cryptoSlice";
import "./Featured.css";

const Featured = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.crypto.crypto);

  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false";
  useEffect(() => {
    axios
      .get(url)
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
          <div className="top">
            <img src={data[1].image} alt={data[1].id} />
          </div>
          <div>
            <h5>{data[1].id}</h5>
            <p>${data[1].current_price.toLocaleString()}</p>
          </div>
          <span>
            <FiArrowUpRight />
            {data[1].price_change_percentage_24h}
          </span>
        </div>
      </div>
      {data &&
        data.map((item) => <p key={item.id}>Name: {item.id}</p>)}
    </div>
  );
};

export default Featured;
