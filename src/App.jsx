import "./App.css";
import React from "react";
import Products from "./component/products/Products";
import { allProducts } from "./data";
import Section from "./component/section/Section";
import Footer from "./component/footer/Footer";
import Navbar from "./component/nav/Navbar";
import { Routes, Route } from "react-router-dom";
import Nav from "./routes/navigation/Nav";
import CartList from "./routes/cart/CartList";
import Shop from "./routes/shop/Shop";
import Home from "./routes/home/Home";
import Button from "./component/button/Button";
// import Shop from "./routes/shop/Shop";
import useEffect from "react";
import fetchProducts from "./api2";
import Cart from "./component/cart/Cart";
// import { fetchProduct } from "./utils/api";
import { fetchProduct } from "./utils/api";

const anotherRequest =
  "api.timbu.cloud/products?organization_id=7c9b81a454954eaca00c71181766cf87&reverse_sort=false&page=1&size=10&Appid=73V9ADSPYYZ11CE&Apikey=7dc1ffa507a4426a82ae8cdcd8b1537320240712195018494446";

const url =
  "https://api.timbu.cloud/products?organization_id=7c9b81a454954eaca00c71181766cf87&reverse_sort=false&page=1&size=10&Appid=73V9ADSPYYZ11CE&Apikey=7dc1ffa507a4426a82ae8cdcd8b1537320240712195018494446";

export default function App() {
  React.useEffect(() => {
    //  searchProduct();
    // fetchProducts();
    fetchProduct();
  }, []);
  return (
    <div className="container">
      {/* <button onClick={fetchProduct}>Click me</button> */}
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shop" element={<CartList />} />
        </Route>
      </Routes>
    </div>
  );
}
