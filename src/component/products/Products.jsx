import React from "react";
import Product from "../product/Product";
import "./products.css";
import { allProducts } from "../../data";

export default function Products() {
  return (
    <div className="product-container">
      {allProducts.map(({ id, pic, description, price }) => (
        <Product key={id} pic={pic} description={description} price={price} />
      ))}
    </div>
  );
}
