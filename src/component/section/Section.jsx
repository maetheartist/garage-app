import React from "react";
import Searchbar from "../Searchbar/Searchbar";
import Button from "../button/Button";
import { styled } from "styled-components";
export default function Section() {
  return (
    <Wrapper>
      <div className="container">
        <>
          <h1>Get free $100 indoor delivery service upgrade!</h1>
          <h4>And be the first to know of our latest deals.</h4>
        </>
        <SearchContainer>
          <div className="input">
            <Searchbar
              placeholder="Enter your email"
              width="99px"
              height="21px"
            />
          </div>
          <Button />
        </SearchContainer>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  font-size: 12px;
  background-color: rgba(255, 253, 245, 1);
  width: 393px;
  height: 234px;
  padding: 40px 16px;
  /* .container {
    width: 361px;
  } */
`;
const SearchContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 5px;
  align-items: center;
  margin: 10px auto;
  .input {
    width: 200px;
    height: 45px;
    border-radius: 300px;
    border: 1px solid;

  }
`;
