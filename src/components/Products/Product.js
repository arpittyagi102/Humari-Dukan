import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addtocart, removefromcart } from '../../Store/action.js'
import { useNavigate } from "react-router-dom";

export default function Product(props) {
    var propsvar = {...props};
    //console.log(propsvar);
    const dispatch = useDispatch();
    const [propstype, setpropstype] = useState("add");

    function handleonClick() {
        if (propsvar.type === "add") {
            dispatch(addtocart(propsvar));
            propsvar.type = "remove";
            setpropstype("remove");
            console.log(propsvar.type);
        } else if (propsvar.type === "remove") {
            dispatch(removefromcart(propsvar));
            propsvar.type = "add";
            setpropstype("add");
            console.log(propsvar.type);
        }
    }
    const navigate =useNavigate();

    function handleclick(){
        navigate('/productlarge', { state:{...props} });
    }

    return (
        <div className=" m-4 border rounded-4 shadow-lg d-flex flex-column hover-shadow" style={{ width: "200px", overflow: "hidden" }}>
            <div className="bg-white w-100 align-items-center h-50 justify-content-center d-flex object-fit-contain" >
                <img className=" d-block m-3 object-fit-contain" src={propsvar.image} alt="not loading" style={{ maxHeight: "200px", maxWidth: "190px" }} />
            </div>
            <h4 className="m-2 mb-3">{propsvar.title}</h4>
            <div className="mt-auto mb-3 d-flex justify-content-evenly">
                <p className="btn btn-success mx-2 bottom-0 p-2 rounded-4 text-black d-inline" onClick={handleclick}>${propsvar.cost}</p>
                {propstype === "add" ? (
                    <p className="btn btn-outline-warning rounded-4 p-2" onClick={handleonClick}>Add to cart</p>
                ) : (
                    <p className="btn btn-outline-danger rounded-4 p-2 px-3" onClick={handleonClick}>Remove</p>
                )}

            </div>

        </div>
    )
}