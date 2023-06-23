import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Payments.css';

export default function Payment({ email, number }) {
    const [paymentMethod, setPaymentMethod] = useState("");

    const handlePaymentMethodChange = (event) => {
        setPaymentMethod(event.target.value);
    };

    const handlePaymentSubmit = () => {
        // Handle payment submission logic here
        // You can use the selected payment method (paymentMethod) for further processing
        console.log("Selected Payment Method:", paymentMethod);

        // Perform additional actions or API calls here after payment is submitted
        // For example, show a success message, update the order status, etc.
        // You can customize this logic based on your application requirements
        alert("Payment submitted successfully ! via " + paymentMethod);
    };

    return (
        <>
            <div className="container w-75">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <Link to="/cart">Cart</Link>
                        </li>
                        <li className="breadcrumb-item">
                            <Link to="/checkout/info">Information</Link>
                        </li>
                        <li className="breadcrumb-item">
                            <Link to="/checkout/shipping">Shipping</Link>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">
                            <Link to="/checkout/payment">Payment</Link>
                        </li>
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
                    <hr />
                    <div className="row ms-3">
                        <div className="col-2 text-primary">Method</div>
                        <div className="col-10">Standard - Free</div>
                    </div>
                </table>
                <h4>Payment</h4>
                <div className="text-secondary">
                    All payments are secure and encrypted
                </div>
                <div className="border border-success d-flex justify-content-between p-3 rounded-4 my-3 px-5 bg-success bg-opacity-10">
                    <div className="payment-options">
                        <h5>Select a payment method:</h5>
                        <div className="payment-option">
                            <input
                                type="radio"
                                id="creditCard"
                                name="paymentMethod"
                                value="creditCard"
                                checked={paymentMethod === "creditCard"}
                                onChange={handlePaymentMethodChange}
                            />
                            <label htmlFor="creditCard">Credit Card</label>
                        </div>
                        <div className="payment-option">
                            <input
                                type="radio"
                                id="debitCard"
                                name="paymentMethod"
                                value="debitCard"
                                checked={paymentMethod === "debitCard"}
                                onChange={handlePaymentMethodChange}
                            />
                            <label htmlFor="debitCard">Debit Card</label>
                        </div>
                        <div className="payment-option">
                            <input
                                type="radio"
                                id="netBanking"
                                name="paymentMethod"
                                value="netBanking"
                                checked={paymentMethod === "netBanking"}
                                onChange={handlePaymentMethodChange}
                            />
                            <label htmlFor="netBanking">Net Banking</label>
                        </div>
                        <div className="payment-option">
                            <input
                                type="radio"
                                id="upi"
                                name="paymentMethod"
                                value="upi"
                                checked={paymentMethod === "upi"}
                                onChange={handlePaymentMethodChange}
                            />
                            <label htmlFor="upi">UPI</label>
                        </div>
                    </div>
                </div>
                <div className="d-flex text-primary text-lg m-3 mt-5 align-items-center justify-content-between">
                    <Link to="/checkout/shipping">
                        <div className="btn btn-outline-primary p-3">{"<"} Shipping</div>
                    </Link>
                    <button className="btn btn-success p-3" onClick={handlePaymentSubmit}>
                        Pay Now
                    </button>
                </div>
            </div>
        </>
    );
}
