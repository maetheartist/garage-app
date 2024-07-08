import React from "react";
import { footerData, footerIcons } from "../../data";
import { styled } from "styled-components";
import "./footer.css";

export default function Footer() {
  return (
    <div className="footer-wrapper">
      <div className="footer">
        {footerData.map(({ id, title, a, b, c, d, e, f, g, h }) => {
          return (
            <div key={id} className="footer-list">
              <h5>{title} </h5>
              <p>{a}</p>
              <p>{b}</p>
              <p>{c}</p>
              <p>{d}</p>
              <p>{e}</p>
              <p>{f}</p>
              <p>{g}</p>
              <p>{h}</p>
            </div>
          );
        })}
      </div>
      {footerIcons.map(({ id, icon }) => {
        return <img key={id} src={icon} alt="icon" />;
      })}
      <p>2024 The Garage Co. | All Rights Reserved.</p>
    </div>
  );
}

const Container = styled.div`
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
