import React from "react";
import { Link } from "react-router-dom";

export default function Info({emailchange,numberchange}) {
    return (
        <>
            <div className="container w-75">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item" ><Link to="/cart">Cart</Link></li>
                        <li className="breadcrumb-item active" aria-current="page"><Link to="/checkout/info">Information</Link></li>
                        <li className="breadcrumb-item"><Link to="/checkout/shipping">Shipping</Link></li>
                        <li className="breadcrumb-item" ><Link to="/checkout/payment">Payment</Link></li>
                    </ol>
                </nav>
                <form>
                    <h4>Contact</h4>
                    <input type="email" className="form-control mt-3 mb-1" placeholder="Email" onChange={emailchange} />
                    <input type="checkbox" className="form-check-input mt-2 me-1" id="exampleCheck1" /> get order updates
                    <h4 className="mt-4 mb-3">Shipping Address</h4>
                    <select className="form-select">
                        <option selected>India</option>
                        <option value="1">United Kingdom</option>
                        <option value="2">United States</option>
                    </select>
                    <div className="d-flex my-3 gap-3">
                        <input className="form-control" placeholder="First Name" />
                        <input className="form-control" placeholder="Last Name" />
                    </div>
                    <input className="form-control" placeholder="Address" />
                    <input className="form-control mt-3" placeholder="Apartment, Suite, etc.(optional)" />
                    <div className="d-flex my-3 gap-3">
                        <input className="form-control" placeholder="City" />
                        <input className="form-control" placeholder="State" />
                        <input className="form-control" placeholder="Pin Code" />
                    </div>
                    <input className="form-control mt-3 mb-4" placeholder="Phone Number for order updates" onChange={numberchange} />
                </form>
                <div className="d-flex text-primary text-lg m-3 mt-5 align-items-center justify-content-between">
                    <Link to="/Shop"><div className="btn btn-outline-primary p-3">{"<"} Return to Shop</div></Link>
                    <Link to="/checkout/shipping"><div className="btn btn-primary p-3">Continue to Shipping</div></Link>
                </div>
            </div>
        </>
    )
}