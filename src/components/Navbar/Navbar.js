import React from "react";
import './navbar.css';
import { Link } from "react-router-dom";
import logo from './logo.png';

export default function Navbar({ handlesetsearch }) {
    return (
        <>
            <div className="navbar justify-content-evenly bg-dark-subtle position-sticky top-0 border border-dark d-flex">
                <div className="d-flex align-items-center">
                    <img src={logo} alt="logo" className="px-4" />
                    <Link to="/" style={{ textDecoration: "none", color: "white" }}><h3>HUMARI DUKAN</h3></Link>
                </div>
                <div className="d-flex align-items-center border-bottom">
                    <input onChange={handlesetsearch} className=" mx-3 bg-transparent border-0 search" style={{ height: "30px",width:"" }} placeholder="Seach items" />
                    <h4><i className="bi bi-search"></i></h4>
                </div>
                <div className="d-flex align-items-center">
                    <Link to="/cart" style={{ textDecoration: "none", color: "white" }}>
                        <h1><i className="bi bi-cart3"></i></h1></Link>
                </div>
            </div>
                <div className="justify-content-evenly bg-info-subtle position-sticky d-flex px-5">
                    <div className="fs-5 p-1 px-5 smnvit">Men's clothing</div>
                    <div className="fs-5 p-1 px-5 smnvit">Jewelery</div>
                    <div className="fs-5 p-1 px-5 smnvit">Electronics</div>
                    <div className="fs-5 p-1 px-5 smnvit">Women's clothing</div>
                </div>
        </>
    )
}