import React from "react";
import Logo from "../../component/logo/Logo";
import Searchbar from "../../component/Searchbar/Searchbar";
import "./nav.css";
import List from "../../images/List.png";
import Tote from "../../images/Tote.png";
import User from "../../images/User.png";
import { Fragment } from "react";
import SearchIcon from "../../images/MagnifyingGlass.png";
import { Link, Outlet } from "react-router-dom";

export default function Nav() {
  return (
    <Fragment>
      <div className="top-nav">
        <p>Free Shipping on all orders</p>
      </div>
      <div className="nav-wrapper">
        <div className="nav-container">
          <div className="logo">
            <img src={List} alt="list" />
            <Link to="/">
              <Logo />
            </Link>
          </div>

          <div>
            <Link to="/shop">
              <span>
                <img src={Tote} alt="shop" className="shop" />
              </span>
            </Link>
            <span>
              <img src={User} alt="user" />
            </span>
          </div>
        </div>
        <Outlet />
        <div className="search">
          <img src={SearchIcon} alt="icon" className="search-icon" />
          <Searchbar width="270px" placeholder="search for your products" />
        </div>
      </div>
    </Fragment>
  );
}
