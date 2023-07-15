import React from "react";
import { useDispatch } from "react-redux";
import { addtocart, removefromcart } from "../../Store/action";

const CartCounter = ({ state, listOfAddedProduct }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        className={`btn btn-success btn-lg`}
        onClick={() => dispatch(removefromcart(state.id))}
      >
        -
      </button>
      {listOfAddedProduct.map((item) => {
        if (item.product.id === state.id)
          return <span className="mx-2 p-2 rounded text-dark bg-light" key={item.product.id}>{item.quantity}</span>;
      })}
      <button
        className={`btn btn-success btn-lg`}
        onClick={() => dispatch(addtocart(state))}
      >
        +
      </button>
    </div>
  );
};

export default CartCounter;
