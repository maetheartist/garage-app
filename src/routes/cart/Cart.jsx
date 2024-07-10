import React from "react";
import { Fragment } from "react";
import Logo from "../../component/logo/Logo"
import { Outlet, Link } from "react-router-dom";

export default function Cart() {
  return (
    <Fragment>
      <div>
        <Link to="/">
        <Logo/>
        </Link>
        <Link to="/cart">Here is your shopping cart.
        <h2>No Items Selected</h2>
        </Link>
        <Link to="/shop">
        <button>Start Shopping</button>
        </Link>
      </div>
      <Outlet />
    </Fragment>
  );
}
