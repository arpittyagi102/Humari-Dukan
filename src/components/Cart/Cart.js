import React from "react";
import Product from "../Products/Product";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


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
            <Link to='/checkout/info'>
                <div className="btn btn-warning btn-lg" style={{position:"absolute",bottom:"20px",right:"20px"}}>
                    Checkout
                </div>
            </Link>
        </>
    )
}