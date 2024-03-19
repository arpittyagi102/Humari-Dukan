import React, { useState, useEffect } from "react";
import Product2 from "../Products/Product2";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removefromcart, updateCart } from "../../Store/action";

export default function Checkout() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state);

  const [total, setTotal] = useState(0);

  const handleQuantityChange = (productId, type) => {
    dispatch(updateCart({ productId, type }));
  };

  const handleRemoveFromCart = (product) => {
    const confirmed = window.confirm(
      "Are you sure you want to remove this item?"
    );
    if (confirmed) {
      dispatch(removefromcart(product));
    }
  };

  useEffect(() => {
    const calculateTotal = () => {
      let totalPrice = 0;
      for (let i = 0; i < cartItems.length; i++) {
        totalPrice += cartItems[i].product.cost * cartItems[i].quantity;
      }
      return totalPrice.toFixed(2);
    };

    const totalPrice = calculateTotal();
    setTotal(totalPrice);
  }, [cartItems]);

  const isMobile = window.innerWidth < 768;

  return (
    <div className="container">
      <div className="row">
        <div className={`col-md-${isMobile ? "12" : "8"}`}>
          <Outlet />
        </div>
        <div className={`col-md-${isMobile ? "12" : "4"}`}>
          <div className="bg-primary p-4 rounded" style={{ width: "30rem" }}>
            <div
              className="cart-item"
              style={{ maxHeight: "400px", overflow: "scroll" }}
            >
              {cartItems.map((item) => (
                <Product2
                  key={item.product.id}
                  id={item.product.id}
                  title={item.product.title}
                  image={item.product.image}
                  cost={item.product.cost}
                  quantity={item.quantity}
                  onChange={handleQuantityChange}
                  onRemove={() => handleRemoveFromCart(item)}
                />
              ))}
            </div>
            <div className="input-group mt-4">
              <input
                type="text"
                className="form-control"
                placeholder="Gift Card or Discount Code"
              />
              <button className="btn btn-success" type="button">
                Apply
              </button>
            </div>
            <div className="text-white mt-4">
              <div className="row">
                <div className="col">Subtotal</div>
                <div className="col text-end">${total}</div>
              </div>
              <div className="row">
                <div className="col">Shipping</div>
                <div className="col text-end">Free</div>
              </div>
              <div className="row mt-3">
                <div className="col">
                  <h5>TOTAL</h5>
                </div>
                <div className="col text-end">
                  <h5>$ {total}</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
