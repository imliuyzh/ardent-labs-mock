import React from "react";
import ReactDOM from "react-dom";
import Announcement from "./Announcement/Announcement";
import SlideShow from "../SlideShow/SlideShow";
import "./Banner.css";

export default function Banner()
{
    return (
        <>
            <Announcement />
            <SlideShow />
            <h2>
                Next
                <br />
                Generation
                <br />
                Learning
            </h2>
        </>
    );
}
