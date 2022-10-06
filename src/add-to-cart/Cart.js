import React from "react";

const Cart = () => {
  const product = [
    { name: "product-1", price: 100 },
    { name: "product-2", price: 200 },
    { name: "product-3", price: 300 },
  ];
  return (
    <div className="product-box">
      <div className="product-list">
        <div className="product-details">
          <h4>{product[0].name}</h4>
          <div className="product-sum">
            <h4>{product[0].price}</h4>
            <h4>X</h4>
            <h4>1</h4>
          </div>
          <h4>100</h4>
        </div>
      </div>
      <div className="product-list">
        <div className="product-details">
          <h4>{product[0].name}</h4>
          <div className="product-sum">
            <h4>{product[0].price}</h4>
            <h4>X</h4>
            <h4>1</h4>
          </div>
          <h4>100</h4>
        </div>
      </div>
      <div className="product-list">
        <div className="product-details">
          <h4>{product[0].name}</h4>
          <div className="product-sum">
            <h4>{product[0].price}</h4>
            <h4>X</h4>
            <h4>1</h4>
          </div>
          <h4>100</h4>
        </div>
      </div>
      <div className="product-list">
        <div className="product-details">
          <h4>Grand Total</h4>
          <div className="product-sum"></div>
          <h4>100</h4>
        </div>
      </div>
    </div>
  );
};

export default Cart;
