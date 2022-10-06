import React, { createContext, useState, useContext } from "react";

const Cart = createContext();

const Context = ({ children }) => {
  const [count, setCount] = useState(0);
  const product = [
    { name: "product-1", price: 100 },
    { name: "product-2", price: 200 },
    { name: "product-3", price: 300 },
  ];
  const value = {
    product,
    count,
    setCount,
  };
  return <Cart.Provider value={value}>{children}</Cart.Provider>;
};

const useGlobleContext = () => {
  return useContext(Cart);
};
export { Context, useGlobleContext };
