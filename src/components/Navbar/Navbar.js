import React from "react";
import './navbar.css';
import { useNavigate,Link } from "react-router-dom";
import logo from './logo.png';

export default function Navbar({ handlesetsearch, handlesetcategoryvalue, handleclearfilter }) {
    const navigate=useNavigate();


    return (
        <>
            <div className="navbar justify-content-evenly bg-dark-subtle position-sticky top-0 border border-dark d-flex">
                <div className="d-flex align-items-center">
                    <img src={logo} alt="logo" className="px-4" />
                    <Link onClick={handleclearfilter} to='/' style={{ textDecoration: "none", color: "white",fontFamily:"Lucida handwriting,Time New Roman"}}><h3>Humari Dukaan</h3></Link>
                </div>
                <div className="d-flex align-items-center border-bottom">
                    <input onChange={handlesetsearch} className=" mx-3 bg-transparent border-0 search" id="search" style={{ height: "30px",width:"" }} placeholder="Seach items" />
                    <h4><i className="bi bi-search"></i></h4>
                </div>
                <div className="d-flex align-items-center">
                    <Link to="/checkout/info" style={{ textDecoration: "none", color: "white" }}>
                        <h1><i className="bi bi-cart3"></i></h1></Link>
                </div>
            </div>
                <div className="justify-content-evenly bg-info-subtle w-100 d-flex px-5">
                    <div className="fs-5 p-1 px-5 smnvit" onClick={handlesetcategoryvalue}>Men's clothing</div>
                    <div className="fs-5 p-1 px-5 smnvit" onClick={handlesetcategoryvalue}>Jewelery</div>
                    <div className="fs-5 p-1 px-5 smnvit" onClick={handlesetcategoryvalue}>Electronics</div>
                    <div className="fs-5 p-1 px-5 smnvit" onClick={handlesetcategoryvalue}>Women's clothing</div>
                </div>
        </>
    )
}