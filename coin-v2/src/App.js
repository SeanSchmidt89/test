import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { coinSliceActions } from "./store/coinSlice";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Coins from "./components/Coins/Coins";
import About from "./components/About/About";
import axios from "axios";
import { FaPowerOff } from "react-icons/fa";

function App() {
  const dispatch = useDispatch();

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
    <NavBar />
      <Routes>
        <Route path="/" element={<Coins />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;