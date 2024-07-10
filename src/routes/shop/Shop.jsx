import React from "react";
import { allProducts } from "../../data";
import { Link, Outlet } from "react-router-dom";
import Product from "../../component/product/Product";

export default function Shop() {
  return (
    <div>
      <Link to="/shop">
        <h3>Shop</h3>
        <h3>Product</h3>
      </Link>
      <Outlet />
    </div>
  );
}
