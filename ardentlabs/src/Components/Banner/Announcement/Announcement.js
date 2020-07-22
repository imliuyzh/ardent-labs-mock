import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import "./Announcement.css";

export default function Announcement()
{
    return (
        <h2 className="announcement">
            Looking for an internship? <Link id="internship-link">Check out our Software Engineering Virtual Internship!</Link>
        </h2>
    );
}
