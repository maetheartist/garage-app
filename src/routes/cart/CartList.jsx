import React from "react";
import { Fragment } from "react";
import Logo from "../../component/logo/Logo";
import { Outlet, Link } from "react-router-dom";
import Shop from "../shop/Shop";
import CartDropDown from "../../component/cart-dropdown/CartDropDown";

export default function CartList() {
  return (
    <Fragment>
      <div>
        <Link to="/cart">
          Here is your shopping cart.
          <h2>No Items Selected</h2>
        </Link>
      </div>
      <CartDropDown />
      <Outlet />
    </Fragment>
  );
}
