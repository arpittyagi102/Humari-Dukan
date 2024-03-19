import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Allproducts from "./Allproducts";
import Productdata from "./productdata.json";
import { useDispatch, useSelector } from "react-redux";
import { addtocart } from "../../Store/action.js";
import "./Productlarge.css";
import CartCounter from "./CartCounter";

export default function Productlarge() {
  const { state } = useLocation();
  const upcost = ((4 * state.cost) / 3).toFixed(2);
  window.scrollTo(0, 0);
  const dispatch = useDispatch();
  const listOfAddedProduct = useSelector((state) => state);
  const navigate = useNavigate();

  function handleaddtocart() {
    dispatch(addtocart(state));
  }

  function handlebuynow() {
    dispatch(addtocart(state));
    navigate("/checkout/info");
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="product-image">
            <img
              className="img-fluid d-block m-3 object-fit-contain"
              src={state.image}
              alt="Product Image"
              style={{ borderRadius: "20px" }}
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="product-details">
            <p className="text-warning">
              Category:{" "}
              <span className="bg-warning text-dark rounded px-2">
                {state.category}
              </span>
            </p>
            <h2 className="text-white mb-3">{state.title}</h2>
            <h5 className="text-success">Special Price</h5>
            <div className="price-info">
              <h2 className="price">
                MRP: <span className="original-price">${upcost}</span>
                <span className="discounted-price">${state.cost}</span>
                <span className="discount-rate">25% off</span>
              </h2>
            </div>
            <p className="text-success my-3">
              {state.rating.rate} <i className="bi bi-star-fill ms-1"></i>
              <span className="text-muted ms-2">
                {state.rating.count} reviews
              </span>
            </p>
            <p className="text-primary mb-3">Free Delivery</p>
            <p>{state.description}</p>
            <div className="action-buttons mt-4">
              {listOfAddedProduct.length > 0 &&
              listOfAddedProduct.find(
                (item) => item.product.id === state.id
              ) ? (
                <CartCounter
                  state={state}
                  listOfAddedProduct={listOfAddedProduct}
                />
              ) : (
                <button
                  className="btn btn-primary btn-lg"
                  onClick={() => handleaddtocart()}
                >
                  Add to Cart
                </button>
              )}
              <button className="btn btn-primary btn-lg" onClick={handlebuynow}>
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="related-products">
        <h1 className="my-5">
          You might be interested in <i className="bi bi-arrow-right"></i>
        </h1>
      </div>
      <hr className="mx-auto" style={{ width: "80%" }} />
      <Allproducts data={Productdata} />
    </div>
  );
}
