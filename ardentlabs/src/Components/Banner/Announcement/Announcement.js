import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import "./Announcement.css";

export default function Announcement()
{
    return (
        <h2 className="announcement">
            Looking for an internship? <span>Check out our Software Engineering Virtual Internship!</span>
        </h2>
    );
}
