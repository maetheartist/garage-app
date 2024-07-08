import React from "react";
import { styled } from "styled-components";
import Logo from "../logo/Logo";
import List from "../../images/List.png";
import Tote from "../../images/Tote.png";
import User from "../../images/User.png";
import Searchbar from "../Searchbar/Searchbar";
import SearchIcon from "../../images/MagnifyingGlass.png";

export default function Navbar() {
  return (
    <Container>
      <div className="top-nav">
        <p>Free Shipping on all orders</p>
      </div>
      <div className="nav-container">
        <div className="logo">
          <img src={List} alt="list" />
          <Logo />
        </div>
        <div>
          <span>
            <img src={Tote} alt="shop" className="shop" />
          </span>
          <span>
            <img src={User} alt="user" />
          </span>
        </div>
      </div>
      <div className="search">
        <img src={SearchIcon} alt="icon" className="search-icon" />
        <Searchbar width="270px" placeholder="search for your products"/>
      </div>
    </Container>
  );
}
const Container = styled.div`
  width: 393px;
  padding: 5px;
  .top-nav {
    width: 100%;
    text-align: center;
    padding: 16px;
    height: 50px;
    background-color: rgba(232, 57, 75, 1);
    line-height: 18.2px;
    color: rgba(255, 255, 255, 1);
  }
  .nav-container {
    width: 361px;
    display: flex;
    justify-content: space-between;
  }
  span {
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
  .shop {
    margin-right: 10px;
  }
  .logo {
    width: 203px;
    display: flex;
    gap: 12px;
    align-items: center;
  }
  .search {
    width: 334px;
    height: 36px;
    display: flex;
    align-items: center;
    border-radius: 300px;
    padding: 8px, 16px;
  }
  .search-icon {
    width: 20px;
    height: 20px;
  }
`;
