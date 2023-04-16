import React from "react";
import Productdata from './productdata';
import Product from './Product'

export default function Allproducts() {
  return (
    <>
      <div className="product-outer">
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
