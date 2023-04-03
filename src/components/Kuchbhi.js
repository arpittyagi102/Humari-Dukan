import React from "react";
import "./compstyle.css";

export default function Kuchbhi(props) {
    return (
        <div className="container">
            <img className="image" src={props.image} alt="Image not loadingw" />
            <div className="inner">
                <h3>{props.title}</h3>
                <p>cost:{props.cost}</p>
                <button style={{ marginRight: "10px" }}>Add to cart</button>
            </div>
        </div>
    )
}