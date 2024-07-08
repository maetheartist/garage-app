import React from "react";
import Product from "../product/Product";
import "./products.css";

export default function Products({ allProducts }) {
  return (
    <div className="product-container">
      {allProducts.map(({ id, pic, description, price }) => (
        <Product key={id} pic={pic} description={description} price={price} />
      ))}
    </div>
  );
}
