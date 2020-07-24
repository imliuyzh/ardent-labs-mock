import React from "react";
import { Link } from "react-router-dom";
import "./Announcement.css";

export default function Announcement()
{
    return (
        <h2 className="announcement">
            Looking for an internship? <Link to="/software-engineering-remote-interns" id="internship-link">Check out our Software Engineering Virtual Internship!</Link>
        </h2>
    );
}
