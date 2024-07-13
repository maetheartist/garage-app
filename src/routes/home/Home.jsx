import React from "react";
import { Outlet } from "react-router-dom";
import Products from "../../component/products/Products";
import Section from "../../component/section/Section";
import Footer from "../../component/footer/Footer";

export default function Home() {
  return (
    <>
      <Outlet />
      <Products />
      <Section />
      <Footer />
    </>
  );
}
