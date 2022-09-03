import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import "./App.css";

function App() {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = (event) => {
    setShowCart(true);
  };

  const hideCartHandler = (event) => {
    setShowCart(false);
  };
  return (
    <CartProvider>
      {showCart && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
