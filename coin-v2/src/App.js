import React, { useEffect, useState } from "react";
import Coin from "./components/Coin/Coin";
import axios from "axios";

function App() {
  const [coins, setCoins] = useState([]);

  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false&price_change_percentage=24h";
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        console.log(response.data);
        setCoins(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="App">
      APP
      <div className="container">
        <h2>List of Coins</h2>
        {coins.length > 0 && coins.map((item) => <Coin key={item.id} item={item} />)}
      </div>
    </div>
  );
}

export default App;
