import React from "react";
import Productdata from './components/Products/productdata';
import Product from './components/Products/Product'
import "./style.css"
import Navbar from "./components/Navbar/Navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <div>
      {   Productdata.map((product)=>(
            <Product
              title={product.title}
              image={product.image}
              cost={product.price}
              />
          ))}
      </div>
    </>
  );
}
