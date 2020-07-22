import React from "react";
import ReactDOM from "react-dom";
import "./Detail.css";

export default function Detail({ id, title, description })
{
    return (
        <div className="mission">
            <h3 id="mission-id">
                {id}
            </h3>
            <div id="line" />
            
            <h5 id="mission-title">
                {title}
            </h5>
            
            <p id="mission-description">
                {description}
            </p>
        </div>
    );
}
