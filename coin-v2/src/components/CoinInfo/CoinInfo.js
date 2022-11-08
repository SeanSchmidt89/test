import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { coinSliceActions } from "../../store/coinSlice";
import axios from "axios";
import "./CoinInfo.css";

const CoinInfo = () => {
  const { coinId } = useParams();
  const dispatch = useDispatch();
  const coin = useSelector((state) => state.coins.info);

  const url = `https://api.coingecko.com/api/v3/coins/${coinId}`;
  useEffect(() => {
    axios
      .get(url)
      .then((resonse) => dispatch(coinSliceActions.coinInfo(resonse.data)))
      .catch((error) => console.log("Error:", error));
  }, [url, dispatch]);

  return (
    <div>
      <div className="container">
        <div className="content">
          <h1>{coin.name}</h1>
        </div>
        <div className="content">
          <div className="rank">
            <span className="rank-btn">Rank #{coin.market_cap_rank}</span>
          </div>
          <div className="info">
            <div className="coin-heading">
              <img src="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoinInfo;
