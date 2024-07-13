import "./cart.css";
import React from "react";
import cartIcon from "../../images/Tote.png";

export default function Cart() {
  return (
    <div className="cart-icon-container">
      <img className="shopping-icon" src={cartIcon} alt="cart" />
      <span className="item-count">0</span>
    </div>
  );
}
