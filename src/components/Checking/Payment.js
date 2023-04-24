import React from "react";
import { Link } from "react-router-dom";

export default function Payment() {
    return (
        <>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item" ><Link to="">Cart</Link></li>
                    <li className="breadcrumb-item"><a href="info">Information</a></li>
                    <li className="breadcrumb-item" ><a href="shipping">Shipping</a></li>
                    <li className="breadcrumb-item active" aria-current="page"><a href="payment">Payment</a></li>
                </ol>
            </nav>
            <h1>Payment</h1>
        </>
    )
}