import React from "react";
import Product from "../Products/Product";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


export default function Cart() {
    const data = useSelector(state => state);
    
    return (
        <>
            <div className="container mt-4">
                <div className="product-outr d-flex flex-wrap justify-content-center">
                    {data.map((product,index) => (
                        <Product
                            key={index}
                            id={index}
                            title={product.title}
                            image={product.image}
                            cost={product.price}
                            type={"remove"}
                        />
                    ))}
                </div>
            </div>
            <Link to='/checkout/info'>
                <div className="btn btn-warning btn-lg" style={{ position: "sticky", bottom: "20px", left: "20px" }}>
                    Checkout
                    <i className=" mx-2 bi bi-arrow-right" />
                </div>
            </Link>
        </>
    )
}