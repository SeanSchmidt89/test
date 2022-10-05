import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import Header from "./components/Header/Header";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Footer from "./components/Footer/Footer";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/movie/:imdbID" element={<MovieDetails />} />
        <Route element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
