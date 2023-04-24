import React from "react";
import './navbar.css';
import searchicon from './search-icon.png';
import { Link } from "react-router-dom";
import logo from "./logo.png"

export default function Navbar() {
    return (
        <>
            <div className="uppernav">
                <div className="logo-and-title">
                    <img src={logo} alt={"Logo"} className="logo"/>
                    <Link to='/' className="heading">Humari dukaan</Link>
                </div>
                <div className="searchbar">
                    <img src={searchicon} alt="search-icon" className="search-icon" />
                    <input className="search-input" placeholder="What's on your mind today?" />
                    <div className="search-button">Search</div>
                </div>
                <Link to='/cart' className="cart-button">Cart</Link>
                <h3 className="sign-in-button">Sign in</h3>
            </div>
            <div className="lowernav">
                <div>MOBILE & MORE</div>
                <div>MEN</div>
                <div>WOMEN</div>
                <div>HOME & KITCHEN</div>
                <div>APPLIANCES</div>
                <div>SPORTS & MORE</div>
            </div>
        </>
    )
}