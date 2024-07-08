import "./App.css";
import React from "react";
import Products from "./component/products/Products";
import { allProducts } from "./data";
import Section from "./component/section/Section";
import Footer from "./component/footer/Footer";
import Navbar from "./component/nav/Navbar";
export default function App() {
  return (
    <div className="container">
      <Navbar/>
      <Products allProducts={allProducts} />
      <Section />
      <Footer />
    </div>
  );
}
