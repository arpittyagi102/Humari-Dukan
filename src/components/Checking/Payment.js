import React from "react";
import { Link } from "react-router-dom";

export default function Payment({email,number}) {
    return (
        <>
            <div className="container w-75">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item" ><Link to="one">Cart</Link></li>
                        <li className="breadcrumb-item" ><Link to="info">Information</Link></li>
                        <li className="breadcrumb-item" ><Link to="/checkout/shipping">Shipping</Link></li>
                        <li className="breadcrumb-item active" aria-current="page" ><Link to="payment">Payment</Link></li>
                    </ol>
                </nav>
                <table className="d-grid border p-3 rounded-4 my-5 mb-4">
                    <div className="row ms-3">
                        <div className="col-lg-2 text-primary">Email</div>
                        <div className="col-lg-10">{email}</div>
                    </div>
                    <hr />
                    <div className="row ms-3">
                        <div className="col-2 text-primary">Contact</div>
                        <div className="col-10">{number}</div>
                    </div>
                    <hr/>
                    <div className="row ms-3">
                        <div className="col-2 text-primary">Method</div>
                        <div className="col-10">Standard - Free</div>
                    </div>
                </table>
                <h4>Payment</h4>
                <div className="text-secondary">
                    All payments are secure and Encrypted
                </div>
                <div className="border border-success d-flex justify-content-between p-3 rounded-4 my-3 px-5 bg-success bg-opacity-10">
                    <div>Congratulations !! you are getting everything FREE</div>
                </div>
                <div className="d-flex text-primary text-lg m-3 mt-5 align-items-center justify-content-between">
                    <Link to="/checkout/shipping"><div className="btn btn-outline-primary p-3">{"<"} Information</div></Link>
                    <Link to="/"><div className="btn btn-success p-3">Pay Now</div></Link>
                </div>
            </div>
        </>
    )
}