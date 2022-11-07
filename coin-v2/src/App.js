import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { coinSliceActions } from "./store/coinSlice";
import Coin from "./components/Coin/Coin";
import axios from "axios";

function App() {
  const dispatch = useDispatch();
  const coins = useSelector((state) => state.coins.coins);

  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false&price_change_percentage=24h";
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        console.log(response.data);
        dispatch(coinSliceActions.topCoins(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  }, [dispatch]);

  return (
    <div className="App">
      APP
      <div className="container">
        <h2>List of Coins</h2>
        {coins.length > 0 &&
          coins.map((item) => <Coin key={item.id} item={item} />)}
      </div>
    </div>
  );
}

export default App;
