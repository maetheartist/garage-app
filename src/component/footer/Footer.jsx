import React from "react";
import { footerData, footerIcons } from "../../data";
import { styled } from "styled-components";
import "./footer.css";

export default function Footer() {
  return (
    <Wrapper className="footer-wrapper">
      <Box className="footer">
        {footerData.map(({ id, title, a, b, c, d, e, f, g, h }) => {
          return (
            <Container key={id} className="footer-list">
              <h5>{title} </h5>
              <p>{a}</p>
              <p>{b}</p>
              <p>{c}</p>
              <p>{d}</p>
              <p>{e}</p>
              <p>{f}</p>
              <p>{g}</p>
              <p>{h}</p>
            </Container>
          );
        })}
      </Box>
      {footerIcons.map(({ id, icon }) => {
        return <img key={id} src={icon} alt="icon" />;
      })}
      <p>2024 The Garage Co. | All Rights Reserved.</p>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  width: 393px;
  height: 598px;
  padding: 40px 16px 40px 16px;
  color: #ffffff;
  background-color: rgba(0, 97, 96, 1);
`;
const Box = styled.div`
  width: 354px;
  height: 538px;
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
  align-items: flex-start;
`;
const Container = styled.div`
  width: 137px;
  font-family: sans-serif;
  margin: 10px;

  h5 {
    margin-bottom: 10px;
    font-size: 14px;
    width: 137px;
    font-weight: bold;
  }
  li {
    margin: 12px;
    font-size: 12px;
  }
  img {
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
`;
