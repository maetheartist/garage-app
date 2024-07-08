import React from "react";
import Searchbar from "../Searchbar/Searchbar";
import Button from "../button/Button";
import "./section.css";
import { styled } from "styled-components";
export default function Section() {
  return (
    <div className="section-wrapper">
      <div className="section-container">
        <div>
          <h1>Get free $100 indoor delivery service upgrade!</h1>
          <h4>And be the first to know of our latest deals.</h4>
        </div>
        <div className="input-wrapper search-container">
          <div className="input-container">
            <input
              placeholder="Enter your email"
              width="99px"
              height="21px"
              className="input"
            />
          </div>
          <Button />
        </div>
      </div>
    </div>
  );
}
