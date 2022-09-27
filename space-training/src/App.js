import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import NavBar from "./components/nav/NavBar";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
