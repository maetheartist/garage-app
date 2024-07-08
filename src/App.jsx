import "./App.css";
import React from "react";
import Products from "./component/products/Products";
import { allProducts } from "./data";
import Section from "./component/section/Section";
import Footer from "./component/footer/Footer";
import Navbar from "./component/nav/Navbar";
import { Routes, Route } from "react-router-dom";
import Nav from "./routes/navigation/Nav";
import Cart from "./routes/cart/Cart";
export default function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Nav />} />
        <Route path="/shop" element={<Cart />} />
      </Routes>
      <Products allProducts={allProducts} />
      <Section />
      <Footer />
    </div>
  );
}
