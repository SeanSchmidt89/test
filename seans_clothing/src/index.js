import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import {store} from "./store/store"
import App from "./App";
import { ProductsProvider } from "./context/products.context";
import { CartProvider } from "./context/cart.context";
import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
          <ProductsProvider>
            <CartProvider>
              <App />
            </CartProvider>
          </ProductsProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
