import React from "react";
import ReactDOM from "react-dom";
import Announcement from "./Announcement/Announcement";
import "./Banner.css";

export default function Banner()
{
    return (
        <>
            <Announcement />
            <h2 id="description">
                Next
                <br />
                Generation
                <br />
                Learning
            </h2>
        </>
    );
}
