import React from "react";
import './navbar.css';
import searchicon from './search-icon.png';
import { Link } from "react-router-dom";
import logo from "./logo.png"

export default function Navbar() {
    return (
        <>
            <div className="navbar justify-content-evenly bg-dark-subtle position-sticky top-0 border border-dark">
                Menu
                <h3>HUMARI DUKAN</h3>
                Cart
            </div>
        </>
    )
}