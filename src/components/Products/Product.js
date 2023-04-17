import React from "react";
import "./product.css";
import { useDispatch } from "react-redux";
import {addtocart,removefromcart} from '../../Store/action.js'

export default function Product(props) {
    const dispatch=useDispatch();
    function handleonClick(){
        if(props.type === "add")
            dispatch(addtocart(props));
        else if(props.type === "remove");
            dispatch(removefromcart(props));
        //console.log(props);
    }

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
                        onClick={handleonClick}
                    >
                    </lord-icon></div>
        
        </div>
    )
}