import React from "react";
import './navbar.css';
import searchicon from './search-icon.png';
import bagicon from './bag-icon.png';

export default function Navbar() {
    return (
        <>
            <div className="uppernav">
                <div className="logo-and-title">
                    <div className="logo"></div>
                    <h2 className="heading">Khareedo</h2>
                </div>
                <div className="searchbar">
                    <img src={searchicon} alt="search-icon" className="search-icon" />
                    <input className="search-input" placeholder="What's on your mind today?" />
                    <div className="search-button">Search</div>
                </div>
                <img alt="cart-icon" src={bagicon} className="bag-icon" />
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