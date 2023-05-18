import React from "react";

export const Course = ({title,pgr,img}) => {
    return(
        <div className="card">
            <img src={img} className="card-img-top" alt="" />
            <div className="card-body p-4">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{pgr}</p>
            </div>
        </div>
    )
}