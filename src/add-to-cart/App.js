import React from "react";
import Products from "./Products";
import Cart from "./Cart";
const App = () => {
  return (
    <>
      <div className="main-div">
        <Products />
        <Cart />
      </div>
    </>
  );
};

export default App;
