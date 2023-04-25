import React from "react";
import { Link } from "react-router-dom";

export default function Shipping({ email, number }) {
    return (
        <>
            <div className="container w-75">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item" ><Link to="one">Cart</Link></li>
                        <li className="breadcrumb-item "><a href="info">Information</a></li>
                        <li className="breadcrumb-item active" aria-current="page"><a href="shipping">Shipping</a></li>
                        <li className="breadcrumb-item" ><a href="payment">Payment</a></li>
                    </ol>
                </nav>
                <table className="d-grid border p-3 rounded-4 my-5 mb-4">
                    <div className="row ms-3">
                        <div className="col-lg-2 text-primary">Email</div>
                        <div className="col-lg-10">{email}</div>
                    </div>
                    <hr/>
                    <div className="row ms-3">
                        <div className="col-2 text-primary">Contact</div>
                        <div className="col-10">{number}</div>
                    </div>
                </table>
                <h4>Shipping Method</h4>
                <div className="border border-success d-flex justify-content-between p-3 rounded-4 my-4 px-5 bg-success bg-opacity-10">
                    <div>Standard</div>
                    <div>Free</div>
                </div>
            </div>
        </>
    )
}