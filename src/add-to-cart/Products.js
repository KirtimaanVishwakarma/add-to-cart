import React from "react";
import ProductList from "./ProductList";
import { useGlobleContext } from "./context/Context";

const Products = () => {
  const { product } = useGlobleContext();
  return (
    <div className="product-box">
      {product.map((val, ind) => (
        <ProductList key={ind} name={val.name} id={ind} price={val.price} />
      ))}
    </div>
  );
};

export default Products;
