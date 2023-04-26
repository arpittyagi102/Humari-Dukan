import React, { useEffect, useState } from "react";
import Productdata from './productdata';
import Product from './Product'

export default function Allproducts({ search }) {

  const [filtereddata, updatefiltereddata] = useState(Productdata);

  useEffect(() => {
    const NewData = Productdata.filter(product => product.title.toLowerCase().includes(search.toLowerCase()));
    updatefiltereddata(NewData);
  }, [search])  
  return (
    <>
      <div className="container mt-4">
        <div className="product-outr d-flex flex-wrap justify-content-center">
          {filtereddata.map((product) => (
           <Product
              key={product.key}
              id={product.key}
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
