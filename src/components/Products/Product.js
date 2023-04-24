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
        <div className=" m-4 border rounded-4 shadow-lg d-flex flex-column hover-shadow" style={{width:"200px",overflow:"hidden"}}>
            <div className="bg-white w-100 align-items-center h-50 justify-content-center d-flex object-fit-contain" >
                <img className=" d-block m-3 object-fit-contain" src={props.image} alt="not loading" style={{maxHeight:"200px",maxWidth:"190px"}}/>
            </div>
            <h4 className="m-2 mb-3">{props.title}</h4>
            <div className="mt-auto mb-3 d-flex justify-content-evenly">
                <p className="btn btn-success mx-2 bottom-0 p-2 rounded-4 text-black d-inline">${props.cost}</p>
                <p className="btn btn-outline-warning rounded-4 p-2" onClick={handleonClick}>Add to cart</p>
            </div>

        </div>
    )
}