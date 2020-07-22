import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import ScrollIntoView from "react-scroll-into-view";
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
                <ScrollIntoView selector="html">
                    <span className="quick-link" id="home">Home</span>
                </ScrollIntoView>
                
                <Link to="/software-engineering-remote-interns" className="quick-link">
                    Software Engineering Virtual Internship
                </Link>
                
                <ScrollIntoView selector="#mission-section">
                    <span className="quick-link">Mission</span>
                </ScrollIntoView>
                
                <ScrollIntoView selector="#about-section">
                    <span className="quick-link">About</span>
                </ScrollIntoView>
                
                <ScrollIntoView selector="#portfolio-section">
                    <span className="quick-link">Portfolio</span>
                </ScrollIntoView>
                
                <ScrollIntoView selector="#internship-section">
                    <span className="quick-link">Internships</span>
                </ScrollIntoView>
                
                <ScrollIntoView selector="#contact-section">
                    <span className="quick-link">Contact</span>
                </ScrollIntoView>
            </div>
        </div>
    );
}
