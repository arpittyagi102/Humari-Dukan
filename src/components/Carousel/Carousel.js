import React from "react";
import './Carousel.css';
import img1 from './img1.png';
import img2 from './img2.png';
import img3 from './img3.png';
import img4 from './img4.png';
import img5 from './img5.png';
import Allproducts from "../Products/Allproducts";
import Productdata from '../Products/productdata.json';

export default function Carousel() {
  return (
    <>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="5000"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img1} className="d-block w-100 carousel-img" alt="can't load" />
          </div>
          <div className="carousel-item">
            <img src={img2} className="d-block w-100 carousel-img" alt="can't load" />
          </div>
          <div className="carousel-item">
            <img src={img3} className="d-block w-100 carousel-img" alt="can't load" />
          </div>
          <div className="carousel-item">
            <img src={img4} className="d-block w-100 carousel-img" alt="can't load" />
          </div>
          <div className="carousel-item">
            <img src={img5} className="d-block w-100 carousel-img" alt="can't load" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <Allproducts data={Productdata} />
    </>
  );
}
