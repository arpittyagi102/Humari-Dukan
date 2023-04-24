import React from "react";
import './Checkout.css';
import { Outlet } from "react-router-dom";


export default function Checkout() {
    return (
        <>
            <div className="container my-5">
                <Outlet/>
            </div>
        </>
    )
}