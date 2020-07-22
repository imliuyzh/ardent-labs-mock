import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
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
                <a href="#header-section" className="quick-link" id="home">
                    Home
                </a>
                
                <Link to="/software-engineering-remote-interns" className="quick-link">
                    Software Engineering Virtual Internship
                </Link>
                
                <a href="#mission-section" className="quick-link">
                    Mission
                </a>
                
                <a href="#about-section" className="quick-link">
                    About
                </a>
                
                <a href="#portfolio-section" className="quick-link">
                    Portfolio
                </a>
                
                <a href="#internship-section" className="quick-link">
                    Internships
                </a>
                
                <a href="#contact-section" className="quick-link">
                    Contact
                </a>
            </div>
        </div>
    );
}
