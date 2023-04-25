import React from "react";
import Product from "../Products/Product";
import { useSelector } from "react-redux";

export default function Cart() {
    const data = useSelector(state => state);
    console.log(data);
    //console.log(data);
    // console.log(data.title);
    return (
        <>
            <div className="container mt-4">
                <div className="product-outr d-flex flex-wrap justify-content-center">
                    {data.map((product) => (
                        <Product
                            title={product.title}
                            image={product.image}
                            cost={product.cost}
                            type="remove"
                        />
                    ))}
                </div>
            </div>
        </>
    )
}