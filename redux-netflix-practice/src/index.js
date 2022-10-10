import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import MovieStore from "./Store/MovieStore";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={MovieStore}>
      <App />
    </Provider>
  </React.StrictMode>
);
