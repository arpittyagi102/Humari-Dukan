import React from "react";
import './navbar.css';
import { Link } from "react-router-dom";
import logo from './logo.png';

export default function Navbar({ handlesetsearch, handlesetcategoryvalue, handleclearfilter }) {

    return (
        <>
            <div className="navbar justify-content-evenly position-sticky top-0 border border-dark d-flex">
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
            <nav class="navbar navbar-expand-lg bg-body-tertiary d-flex justify-content-eve">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
      <a class="navbar-brand" href="#" onClick={handlesetcategoryvalue} >Women's clothing</a>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 justify-content-between" style={{paddingLeft: '1rem' , paddingRight: '1rem'}}>
        <li class="nav-item">
          <a class="nav-link active fs-5 p-1 px-5 smnvit" aria-current="page" href="#"  onClick={handlesetcategoryvalue}>Men's clothing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link fs-5 p-1 px-5 smnvit" href="#"  onClick={handlesetcategoryvalue}>Jewelery</a>
        </li>
        <li class="nav-item">
          <a class="nav-link fs-5 p-1 px-5 smnvit" href="#" onClick={handlesetcategoryvalue}>Electronics</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

        </>
    )
}














