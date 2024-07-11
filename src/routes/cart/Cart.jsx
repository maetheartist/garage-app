import React from "react";
import { Fragment } from "react";
import Logo from "../../component/logo/Logo";
import { Outlet, Link } from "react-router-dom";
import Shop from "../shop/Shop";

export default function Cart() {
  return (
    <Fragment>
      <div>
        <Link to="/cart">
          Here is your shopping cart.
          <h2>No Items Selected</h2>
        </Link>
      </div>
      {/* <Outlet /> */}
    </Fragment>
  );
}
