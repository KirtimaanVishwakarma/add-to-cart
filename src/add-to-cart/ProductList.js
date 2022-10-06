import React from "react";
import { useGlobleContext } from "./context/Context";
const ProductList = ({ name, price, id }) => {
  const { count, setCount } = useGlobleContext();
  const increse = (id) => {
    setCount(count + 1);
  };
  const decrese = () => {
    count > 0 ? setCount(count - 1) : setCount(0);
  };
  return (
    <div className="product-list">
      <div className="product-details">
        <h4>{name}</h4>
        <h4>{price}</h4>
      </div>
      <div className="counter">
        <button onClick={(id) => increse(id)}>+</button>
        <h4 className="count">{count}</h4>
        <button onClick={decrese}>-</button>
      </div>
    </div>
  );
};

export default ProductList;
