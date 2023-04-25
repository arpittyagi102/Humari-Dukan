import React from "react";
import { Link } from "react-router-dom";

export default function Info() {
    return (
        <>
            <div className="container w-75">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item" ><Link to="one">Cart</Link></li>
                        <li className="breadcrumb-item active" aria-current="page"><Link to="info">Information</Link></li>
                        <li className="breadcrumb-item"><Link to="/checkout/shipping">Shipping</Link></li>
                        <li className="breadcrumb-item" ><Link to="payment">Payment</Link></li>
                    </ol>
                </nav>
                <form>
                    <h4>Contact</h4>
                    <input type="email" className="form-control mt-3 mb-1" placeholder="Email" />
                    <input type="checkbox" class="form-check-input mt-2 me-1" id="exampleCheck1" /> get order updates
                    <h4 className="mt-4 mb-3">Shipping Address</h4>
                    <select class="form-select">
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
                </form>
            </div>
        </>
    )
}