import React from "react";
import { styled } from "styled-components";
export default function Button() {
  return <ButtonContainer>Subscribe</ButtonContainer>;
}
const ButtonContainer = styled.button`
  width: 99px;
  height: 45px;
  padding: 12px 16px 12px 16px;
  border-radius: 600px;
  color: #ffffff;
  font-weight: 400;
  border: none;
  outline: none;
  background-color: rgba(0, 97, 96, 1);
`;
