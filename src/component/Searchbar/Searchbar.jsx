import React from "react";
import { styled } from "styled-components";
export default function Searchbar({ placeholder, width, height }) {
  return (
    <Input
      type="text"
      className="input"
      width={width}
      placeholder={placeholder}
      height={height}
    />
  );
}
// const Container = styled.div`
//   width: 361px;
//   height: 45px;
//   border: 1px solid;
//   border-radius: 300px;
//   padding: 12px 16px;
//   /* gap: 8px; */
// `;
const Input = styled.input`
  width: ${(props) => props.width};
  height: 16px;
  border: none;
  outline: none;
  color: rgba(74, 74, 74, 1);
`;
