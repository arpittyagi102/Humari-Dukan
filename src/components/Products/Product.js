import React from "react";
import "./product.css";
import { useDispatch } from "react-redux";
import { addtocart, removefromcart } from '../../Store/action.js'

export default function Product(props) {
    const dispatch = useDispatch();
    function handleonClick() {
        if (props.type === "add")
            dispatch(addtocart(props));
        else if (props.type === "remove");
        dispatch(removefromcart(props));
        //console.log(props);
    }

    return (
        <div className="m-4 border rounded-4 shadow d-flex flex-column" style={{width:"200px",overflow:"hidden"}}>
            <div className="bg-white w-100 align-items-center justify-content-center d-flex" >
                <img className=" d-block m-3" src={props.image} alt="not loading" style={{height:"200px"}}/>
            </div>
            <h4 className="m-2 mb-3">{props.title}</h4>
            <div className="mt-auto mb-3 d-inline">
                <p className="m-3 bottom-0 bg-warning p-2 rounded-4 text-black d-inline">${props.cost}</p>
            </div>

        </div>
    )
}