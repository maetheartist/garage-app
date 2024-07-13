import React from "react";
import { allProducts } from "../../data";
import { Link, Outlet } from "react-router-dom";
import Product from "../../component/product/Product";
import CartDropDown from "../../component/cart-dropdown/CartDropDown";
import "./shop.css";

export default function Shop() {
  return (
    <div className="shop-page">
      
      <Link to="/shop">Shop</Link>
      <Link to="/shop"> Product</Link>
      <CartDropDown />
      {/* <Outlet /> */}
    </div>
  );
}
