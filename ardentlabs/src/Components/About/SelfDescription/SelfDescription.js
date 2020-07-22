import React from "react";
import ReactDOM from "react-dom";
import "./SelfDescription.css";

export default function SelfDescription({ iconPath, title, description })
{
    return (
        <div className="content-container">
            <div className="icon-container">
                <img src={iconPath} className="icon" alt={title} />
            </div>
            
            <div className="description-container">
                <h5 className="description-title">{title}</h5>
                <p className="description">{description}</p>
            </div>
        </div>
    );
}
