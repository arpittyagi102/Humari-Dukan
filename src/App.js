import React from "react";
import "./style.css"
import Navbar from "./components/Navbar/Navbar";
import Allproducts from "./components/Products/Allproducts";
import Cart from "./components/Cart/Cart";
import { Routes, Route } from "react-router-dom";
import Checkout from "./components/Checking/Checkout";

export default function App() {
  return (
    <>
      <div className="bg">
        <Navbar />
        <Routes>
          <Route path="/" element={<Allproducts />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
    </>
  );
}
