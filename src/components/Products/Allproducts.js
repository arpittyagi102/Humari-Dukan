import React from "react";
import Productdata from './productdata';
import Product from './Product'

export default function Allproducts() {
  return (
    <>
    <div className="container">
      <div className="product-outr d-flex flex-wrap justify-content-center">
      {   Productdata.map((product)=>(
            <Product
              title={product.title}
              image={product.image}
              cost={product.price}
              type={"add"}
              />
          ))}
      </div>
      </div>
    </>
  );
}
