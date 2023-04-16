import React from "react";
import "./product.css";

export default function Product(props) {
    return (
        <div className="container">
            <img className="image" src={props.image} alt="not loading" />
      
                <h3 style={{ marginTop: "0px" }}>{props.title}</h3>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <p>${props.cost}</p>
                    <lord-icon
                        src="https://cdn.lordicon.com/slkvcfos.json"
                        trigger="click"
                        style={{ border: "solid green", borderRadius: "20px", height: "40px", width: "40px" }}
                    >
                    </lord-icon></div>
        
        </div>
    )
}