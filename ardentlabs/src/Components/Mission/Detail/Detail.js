import React from "react";
import ReactDOM from "react-dom";
import "./Detail.css";

export default function Detail({ id, title, description })
{
    return (
        <div className="mission">
            <div id="id-and-line">
                <h3 className="mission-id">
                    {id}
                </h3>
                <div id="line" />
            </div>
            
            <h5 id="mission-title">
                {title}
            </h5>
            
            <p id="mission-description">
                {description}
            </p>
        </div>
    );
}
