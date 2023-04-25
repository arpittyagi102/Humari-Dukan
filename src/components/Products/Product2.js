import React from "react";

export default function Product2(props) {
    return (
        <>
            <div className="m-4 d-flex align-items-center border border-opacity-25 rounded-4 border-white pe-2">
                <div className="bg-white align-items-center justify-content-center d-flex rounded-4" style={{ height: "80px", width: "80px", outline: "solid" }} >
                    <img className=" d-block m-2 object-fit-contain rounded-4" src={props.image} alt="not loading" style={{ maxHeight: "80px", maxWidth: "80px" }} />
                </div>
                <h5 className="m-3 text-white">{props.title}</h5>
                <p className="btn btn-warning ms-auto p-2 rounded-4 text-black d-inline">${props.cost}</p>
            </div>
        </>
    )
}