import React from "react";
import './navbar.css';
import searchicon from './search-icon.png';
import { Link } from "react-router-dom";
import logo from "./logo.png"

export default function Navbar() {
    return (
        <>
            <div className="navbar justify-content-evenly bg-dark-subtle position-sticky top-0 border border-dark">
                <h1><i class="bi bi-list"></i></h1>
                <Link to="/" style={{ textDecoration: "none", color: "white" }}><h3>HUMARI DUKAN</h3></Link>
                <Link to="/cart" style={{ textDecoration: "none", color: "white" }}><h1><i class="bi bi-cart3"></i></h1></Link>
            </div>
        </>
    )
}