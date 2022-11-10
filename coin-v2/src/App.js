import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { coinSliceActions } from "./store/coinSlice";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Coins from "./components/Coins/Coins";
import CoinInfo from "./components/Routes/CoinInfo/CoinInfo";
import About from "./components/About/About";
import Login from "./components/Routes/Login/Login";
import SignUp from "./components/Routes/SignUp/SignUp";
import axios from "axios";
import AuthContextProvider from "./context/AuthContext";
import { FaPowerOff } from "react-icons/fa";

function App() {
  const dispatch = useDispatch();

  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false&price_change_percentage=24h";
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        dispatch(coinSliceActions.topCoins(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  }, [dispatch]);

  return (
    <div className="App">
      <AuthContextProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Coins />} />
          <Route path="/coin-info" element={<CoinInfo />}>
            <Route path=":coinId" element={<CoinInfo />} />
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
