import React from "react";
import ReactDOM from "react-dom";
import * as Scroll from "react-scroll";
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from "react-scroll";
import "./Navigator.css";

export default function Navigator()
{
    return (
        <div id="navigator">
            <Link activeClass="active" to="top-section" spy={true} smooth={true}>
                <svg width="12" height="12" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                </svg>
            </Link>
            
            <Link activeClass="active" to="mission-section" spy={true} smooth={true} id="mission-navdot">
                <svg width="12" height="12" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                </svg>
            </Link>
            
            <Link activeClass="active" to="about-section" spy={true} smooth={true} id="about-navdot">
                <svg width="12" height="12" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                </svg>
            </Link>
            
            <Link activeClass="active" to="portfolio-section" spy={true} smooth={true}>
                <svg width="12" height="12" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                </svg>
            </Link>
            
            <Link activeClass="active" to="internship-section" spy={true} smooth={true} id="internship-navdot">
                <svg width="12" height="12" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                </svg>
            </Link>
            
            <Link activeClass="active" to="footer" spy={true} smooth={true} id="footer-navdot" onSetActive={() => enterFooter("footer-navdot")} onSetInactive={() => leaveFooter("footer-navdot", "internship-navdot")}>
                <svg width="12" height="12" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                </svg>
            </Link>
        </div>
    );
}

function enterFooter(destination)
{
    let targets = document.querySelectorAll("#navigator a");
    targets.forEach((target) => {
        target.className = (target.id === destination) ? "active" : "";
    });
}

function leaveFooter(start, end)
{
    let targets = document.querySelectorAll("#navigator a");
    targets.forEach((target) => {
        if (target.id === start)
        {
            target.className = "";
        }
        else if (target.id === end)
        {
            target.className = "active";
        }
    });
}
