import React from "react";
import "./product.css";

export default function Kuchbhi(props) {
    return (
        <div className="container">
            <img className="image" src={props.image} alt="not loading" />
            <div className="inner">
                <h3>{props.title}</h3>
                <p>cost:{props.cost}</p>
                <button style={{ marginRight: "10px" }}>Add to cart</button>
            </div>
        </div>
    )
}