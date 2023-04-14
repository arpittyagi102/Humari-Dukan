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
        <Product
          title={Productdata[1].title}
          image={Productdata[1].image}
          cost={Productdata[1].price}
        />

        <Product
          title={Productdata[2].title}
          image={Productdata[2].image}
          cost={Productdata[2].price}
        />

        <Product
          title={Productdata[3].title}
          image={Productdata[3].image}
          cost={Productdata[3].price}
          />
      </div>
    </>
  );
}
