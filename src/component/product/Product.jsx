import React from "react";
import "./product.css";
import { styled } from "styled-components";

export default function Product({ pic, description, price }) {
  const bgImg = {
    backgroundImage: `url(${pic})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  return (
    <div className="product" pic={pic}>
      <div className="product-image" style={bgImg}></div>
      <p>{description}</p>
      <p className="price">{price}</p>
    </div>
  );
}
