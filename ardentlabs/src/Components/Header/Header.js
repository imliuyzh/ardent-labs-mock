import React from 'react';
import ReactDOM from 'react-dom';
import { Link, Route, Router, Switch } from "react-router-dom";
import "./Header.css";
import ArdentLabsLogo from "../../Assets/img/ardentLabsLogo.webp";

export default function Header()
{
    return (
        <>
            <nav>
                <div id="logo">
                    <img src={ArdentLabsLogo} alt="Ardent Labs Logo" />
                </div>
                
                <div id="links">
                    <Link to="/">Home</Link>
                    <Link to="/software-engineering-remote-interns">Software Engineering Virtual Internship</Link>
                    <Link to="/#mission">Mission</Link>
                    <Link to="/#about">About</Link>
                    <Link to="/#portfolio">Portfolio</Link>
                </div>
            </nav>
        </>
    );
}
