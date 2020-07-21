import React from 'react';
import ReactDOM from 'react-dom';
import { Link, Route, Router, Switch } from "react-router-dom";
import "./Header.css";

import ArdentLabsLogo from "../../Assets/img/ardentLabsLogo.webp";

export default function Header()
{
    return (
        <header id="header">
            <img src={ArdentLabsLogo} alt="Ardent Labs Logo" id="logo" />
            <nav id="links">
                <Link to="/" className="link" id="home-link">
                    Home
                </Link>
                
                <Link to="/software-engineering-remote-interns" className="link">
                    Software Engineering Virtual Internship
                </Link>
                
                <Link to="/#mission" className="link">
                    Mission
                </Link>
                
                <Link to="/#about" className="link">
                    About
                </Link>
                
                <Link to="/#portfolio" className="link">
                    Portfolio
                </Link>
                
                <div className="dropdown-menu">
                    <button className="dropdown-button">More...</button>
                    <div className="dropdown-content">
                        <Link to="/software-engineering-remote-interns" className="link">
                            Internships
                        </Link>
                        <br />
                        <Link to="/#about" className="link">
                            Contact
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
}
