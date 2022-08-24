import { createContext, useState } from "react";

const addCartItem = (cartItems, productsToAdd) => {
  const existingCartItem = cartItems.find(
    (item) => item.id === productsToAdd.id
  );
  if (existingCartItem) {
    return cartItems.map((item) =>
      item.id === productsToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };
  const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
