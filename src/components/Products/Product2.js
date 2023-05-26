import React from "react";
import { removefromcart } from "../../Store/action";
import { useDispatch } from "react-redux";

export default function Product2(props) {
    const dispatch=useDispatch();
    function handleremove(){
        dispatch(removefromcart(props));
    }
    return (
        <>
            <div className="m-4 d-flex align-items-center border border-opacity-25 rounded-4 border-white pe-2">
                <div className="bg-white align-items-center justify-content-center d-flex rounded-4" style={{ height: "80px", width: "80px", outline: "solid" }} >
                    <img className=" d-block m-2 object-fit-contain rounded-4" src={props.image} alt="not loading" style={{ maxHeight: "80px", maxWidth: "80px" }} />
                </div>
                <h5 className="m-3 mx-2 text-white">{props.title}</h5>
                <div className="h-100 d-flex align-items-center">
                <p className="btn btn-warning ms-auto p-2 rounded-4 text-black d-inline">${props.cost}</p>
                <i className="bi bi-x-lg" onClick={handleremove}></i>

                </div>
            </div>
        </>
    )
}