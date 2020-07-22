import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import ScrollIntoView from "react-scroll-into-view";
import "./Header.css";
import ArdentLabsLogo from "../../Assets/img/ardentLabsLogo.webp";

export default function Header()
{
    return (
        <header id="header-section">
            <Link to="/" className="link">
                <img src={ArdentLabsLogo} alt="Ardent Labs Logo" id="logo" />
            </Link>
            
            <nav id="links">
                <ScrollIntoView selector="html">
                    <span className="link" id="home-link">Home</span>
                </ScrollIntoView>
                
                <Link to="/software-engineering-remote-interns" className="link">
                    Software Engineering Virtual Internship
                </Link>
                
                <ScrollIntoView selector="#mission-section">
                    <span className="link">Mission</span>
                </ScrollIntoView>
                
                <ScrollIntoView selector="#about-section">
                    <span className="link">About</span>
                </ScrollIntoView>
                
                <ScrollIntoView selector="#portfolio-section">
                    <span className="link">Portfolio</span>
                </ScrollIntoView>
                
                <div className="dropdown-menu">
                    <button className="dropdown-button">More...</button>
                    <div className="dropdown-content">
                        <ScrollIntoView selector="#internship-section">
                            <span className="link">Internships</span>
                        </ScrollIntoView>
                        
                        <ScrollIntoView selector="#contact-section">
                            <span className="link">Contact</span>
                        </ScrollIntoView>
                    </div>
                </div>
            </nav>
        </header>
    );
}
