import React from "react";
import ReactDOM from "react-dom";
import { useLocation } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import "./Header.css";
import ArdentLabsLogo from "../../Assets/img/ardentLabsLogo.webp";

export default function Header()
{
    return (
        <header id="header-section">
            <Link to="/" className="link">
                <img src={ArdentLabsLogo} alt="Ardent Labs Logo" id="logo" />
            </Link>
                
            <nav id="nav-links">
                <Link to="/" className={(useLocation().pathname === "/") ? "link active" : "link"}>
                    <span>Home</span>
                </Link>
                
                <Link to="/software-engineering-remote-interns"
                    className={(useLocation().pathname === "/software-engineering-remote-interns") ? "link active" : "link"}>
                        <span>Software Engineering Virtual Internship</span>
                </Link>
                
                <Link smooth to="/#mission-section" className="link">
                    <span>Mission</span>
                </Link>
                
                <Link smooth to="/#about-section" className="link">
                    <span>About</span>
                </Link>
                
                <Link smooth to="/#portfolio-section" className="link">
                    <span>Portfolio</span>
                </Link>
                
                <div className="dropdown-menu">
                    <button className="dropdown-button">More...</button>
                    <div className="dropdown-content">
                        <Link smooth to="/#internship-section" className="link">
                            <span>Internships</span>
                        </Link>
                        
                        <br />
                        
                        <Link smooth to="/#contact-section" className="link">
                            <span className="link">Contact</span>
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
}
