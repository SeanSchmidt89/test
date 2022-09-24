import React from "react";
import NavBar from "./components/navbar/NavBar";
import Hero from "./components/hero/Hero";
import Find from "./components/find/Find";
import Luxury from "./components/luxury/Luxury";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Find />
      <Luxury />
    </div>
  );
}

export default App;
