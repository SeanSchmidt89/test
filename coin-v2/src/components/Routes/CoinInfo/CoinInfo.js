import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { coinSliceActions } from "../../../store/coinSlice";
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
              {coin.image ? (
                <img src={coin.image.small} alt={coin.name} />
              ) : null}
              <p>{coin.name}</p>
              <p>{coin.symbol}</p>
            </div>
            <div className="coin-price">
              {coin.market_data ? (
                <h1>{coin.market_data.current_price.usd}</h1>
              ) : null}
            </div>
          </div>
        </div>
        <div className="content">
          <table>
            <thead>
              <tr>
                <th>1h</th>
                <th>24h</th>
                <th>7d</th>
                <th>14d</th>
                <th>30d</th>
                <th>1yr</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  {coin.market_data ? (
                    <p>
                      {
                        coin.market_data.price_change_percentage_1h_in_currency
                          .usd
                      }
                    </p>
                  ) : (
                    <p>-</p>
                  )}
                </td>
                <td>
                  {coin.market_data ? (
                    <p>
                      {
                        coin.market_data.price_change_percentage_24h_in_currency
                          .usd
                      }
                    </p>
                  ) : (
                    <p>-</p>
                  )}
                </td>
                <td>
                  {coin.market_data ? (
                    <p>
                      {
                        coin.market_data.price_change_percentage_7d_in_currency
                          .usd
                      }
                    </p>
                  ) : (
                    <p>-</p>
                  )}
                </td>
                <td>
                  {coin.market_data ? (
                    <p>
                      {
                        coin.market_data.price_change_percentage_14d_in_currency
                          .usd
                      }
                    </p>
                  ) : (
                    <p>-</p>
                  )}
                </td>
                <td>
                  {coin.market_data ? (
                    <p>
                      {
                        coin.market_data.price_change_percentage_30d_in_currency
                          .usd
                      }
                    </p>
                  ) : (
                    <p>-</p>
                  )}
                </td>
                <td>
                  {coin.market_data ? (
                    <p>
                      {
                        coin.market_data.price_change_percentage_1y_in_currency
                          .usd
                      }
                    </p>
                  ) : (
                    <p>-</p>
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="content">
          <div className="stats">
            <div className="left">
              <div className="row">
                <h4>24 Hour Low</h4>
                {coin.market_data ? (
                  <p>{coin.market_data.low_24h.usd}</p>
                ) : (
                  <p>-</p>
                )}
              </div>
              <div className="row">
                <h4>24 Hour High</h4>
                {coin.market_data ? (
                  <p>{coin.market_data.high_24h.usd}</p>
                ) : (
                  <p>-</p>
                )}
              </div>
            </div>
            <div className="right">
              <div className="row">
                <h4>Market Cap</h4>
                {coin.market_data ? (
                  <p>{coin.market_data.market_cap.usd}</p>
                ) : (
                  <p>-</p>
                )}
              </div>
              <div className="row">
                <h4>Circulating Supply</h4>
                {coin.market_data ? (
                  <p>{coin.market_data.circulating_supply.usd}</p>
                ) : (
                  <p>-</p>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="about">
            <h3>About</h3>
            {coin.description ? <p>{coin.description.en}</p> : <p>-</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoinInfo;

// //53.40
// "price_change_24h": -1977.2551344444,
//         "price_change_percentage_24h": -9.98861,
//         "price_change_percentage_7d": -13.03977,
//         "price_change_percentage_14d": -11.33262,
//         "price_change_percentage_30d": -8.38283,
//         "price_change_percentage_60d": -16.5815,
//         "price_change_percentage_200d": -55.18296,
//         "price_change_percentage_1y": -73.64888,
