import React from "react";
import "./product.css";
import { styled } from "styled-components";

export default function Product({ pic, description, price }) {
  return (
    <Container className="product" pic={pic}>
      <div className="product-image"></div>
      <p>{description}</p>
      <p className="price">{price}</p>
    </Container>
  );
}
const Container = styled.div`
  width: 173px;
  background-color: white;
  flex-basis: 173px;
  color: (rgba(0, 0, 0, 0.1));
  line-height: 21px;
  font-size: 14px;
  

  .product-image {
    width: 173px;
    height: 189px;
    background-image: url(${({ pic }) => pic});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 4px;
  }
  .price {
    font-weight: 800;
  }
`;
