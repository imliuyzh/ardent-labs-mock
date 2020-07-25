import React from "react";
import "./Mentor.css";

export default function Mentor({ name, ardentStatus, currentStatus, icon })
{
    return (
        <div className="mentor-container">
            <img src={icon} alt={name.toLowerCase()} />
            <div className="mentor-info-container">
                <h4 className="mentor-name">{name}</h4>
                <p className="ardent-status">{ardentStatus}</p>
                <p className="current-status">{currentStatus}</p>
            </div>
        </div>
    );
}
