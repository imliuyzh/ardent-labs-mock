import React from "react";
import ReactDOM from "react-dom";
import { useLocation } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import "./QuickLinks.css";

export default function QuickLinks()
{
    return (
        <div id="quick-links-component">
            <div id="quick-links-content">
                <div id="quick-links-header-bar" />
                <h1 id="quick-links-title">QUICK LINKS</h1>
            </div>
            
            <div id="quick-links">
                <Link smooth to="/#header-section" className={(useLocation().pathname === "/") ? "quick-link active" : "quick-link"}>
                    <span>Home</span>
                </Link>
                
                <Link to="/software-engineering-remote-interns" className={(useLocation().pathname === "/software-engineering-remote-interns") ? "quick-link active" : "quick-link"}>
                    Software Engineering Virtual Internship
                </Link>
                
                <Link smooth to="/#mission-section" className="quick-link">
                    <span>Mission</span>
                </Link>
                
                <Link smooth to="/#about-section" className="quick-link">
                    <span>About</span>
                </Link>
                
                <Link smooth to="/#portfolio-section" className="quick-link">
                    <span>Portfolio</span>
                </Link>
                
                <Link smooth to="/#internship-section" className="quick-link">
                    <span>Internships</span>
                </Link>
                
                <Link smooth to="/#contact-section" className="quick-link">
                    <span>Contact</span>
                </Link>
            </div>
        </div>
    );
}
