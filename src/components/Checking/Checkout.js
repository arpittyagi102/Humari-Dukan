import React from "react";
import './Checkout.css';
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Product2 from "../Products/Product2";


export default function Checkout() {
    
    const data = useSelector(state => state);
    var total=0;
    for(let i=0;i<data.length;i++){
        total+=data[i].cost;
    }
    return (
        <>
            <div className=" cart-container  d-flex" style={{ alignItems: "stretch",minHeight:"90vh" }} >
                <div className="w-75 container m-5" style={{ width: "60%" }}>
                    <Outlet />
                </div>
                <div className=" gift-card w-40 bg-primary p-5" data-bs-theme="light" style={{ width: "40%" }}>
                    <div style={{ maxHeight: "400px",overflow:"hidden" }}>
                        {data.map((product) => (
                            <Product2
                                title={product.title}
                                image={product.image}
                                cost={product.cost}
                                type="remove"
                            />
                        ))}
                    </div>
                    <div className=" input-field d-flex m-4 mt-0 ">
                        <input className="form-control form-control my-3" data-bs-theme="light" placeholder="Gift Card or Discount Code" />
                        <div className="btn btn-success btn-lg my-3 mx-2">Apply</div>
                    </div>
                    <div className="d-grid m-4 text-white">
                        <div className="row">
                            <div className="col"> Subtotal </div> <div className="col ms-auto"> {total} </div>
                        </div>
                        <div className="row">
                            <div className="col"> Shipping </div> <div className="col ms-auto"> Free </div>
                        </div>
                        <div className="row mt-3">
                            <h5 className="col "> TOTAL </h5> <h5 className="col ms-auto "> $  {total} </h5>
                        </div>
                        
                
                    </div>
                </div>
            </div>
        </>
    )
}