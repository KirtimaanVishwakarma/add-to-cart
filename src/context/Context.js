import React, { createContext, useContext } from "react";

const Cart = createContext();
const Context = ({ children }) => {
  const [region, setRegion] = React.useState("");
  const [paidRegion, setPaidRegion] = React.useState([]);
  const value = {
    price: 58.5,
    region,
    setRegion,
    paidRegion,
    setPaidRegion,
  };
  return <Cart.Provider value={value}>{children}</Cart.Provider>;
};

const useGlobalContext = () => {
  return useContext(Cart);
};

export { Context, useGlobalContext };
