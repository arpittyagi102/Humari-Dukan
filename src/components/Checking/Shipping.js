import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Shipping({ email, number }) {
  const [shippingMethod, setShippingMethod] = useState("");

  const handleShippingMethodChange = (e) => {
    setShippingMethod(e.target.value);
  };

  const handleContinueToPayment = () => {
    if (shippingMethod === "cashOnDelivery") {
      // User selected Cash on Delivery
      // Perform any specific action or validation
      console.log("Cash on Delivery selected");
      orderPlaced();
    } else {
      // User selected another shipping method
      // Perform any specific action or validation
      console.log("Another shipping method selected");

      // Continue to payment page
      // Add your navigation logic here
    }
  };

  const orderPlaced = () => {
    alert("Your order has been placed! Happy Shopping");
    window.location.href = "https://humaridukan.netlify.app/";
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
            <li className="breadcrumb-item active" aria-current="page">
              <Link to="/checkout/shipping">Shipping</Link>
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
        </table>
        <h4>Shipping Method</h4>
        <form>
          <div className="mb-3">
            <label htmlFor="shippingMethod" className="form-label">
              Select Shipping Method
            </label>
            <select
              className="form-select"
              id="shippingMethod"
              value={shippingMethod}
              onChange={handleShippingMethodChange}
            >
              <option value="">Choose...</option>
              <option value="cashOnDelivery">Cash on Delivery</option>
              <option value="onlinePayment">Online Payment</option>
            </select>
          </div>
        </form>
        <div className="d-flex text-primary text-lg m-3 mt-5 align-items-center justify-content-between">
          <Link to="/checkout/info">
            <div className="btn btn-outline-primary p-3">{"<"} Information</div>
          </Link>
          {shippingMethod === "cashOnDelivery" ? (
            <Link to="/">
              <div className="btn btn-success p-3" onClick={orderPlaced}>
                Place Order
              </div>
            </Link>
          ) : (
            <>
              {shippingMethod ? (
                <Link to="/checkout/payment">
                  <div className="btn btn-primary p-3">
                    Continue to Payments
                  </div>
                </Link>
              ) : (
                <div
                  className="btn btn-primary p-3"
                  onClick={() => alert("Please select an option")}
                >
                  Select an option
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}
