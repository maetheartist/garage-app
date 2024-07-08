import React from "react";
import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

export default function Cart() {
  return (
    <Fragment>
      <div>
        <Link to="/shop">Here is your shopping cart.</Link>
      </div>
      <Outlet />
    </Fragment>
  );
}
