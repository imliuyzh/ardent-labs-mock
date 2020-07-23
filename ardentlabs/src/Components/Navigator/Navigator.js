import React from "react";
import ReactDOM from "react-dom";
import { HashLink as Link } from "react-router-hash-link";
import "./Navigator.css";

export default function Navigator()
{
    return (
        <div id="navigator">
            <Link smooth to="/#root">
                <svg width="12" height="12" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                </svg>
            </Link>
            
            <Link smooth to="/#mission-section">
                <svg width="12" height="12" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                </svg>
            </Link>
            
            <Link smooth to="#about-section">
                <svg width="12" height="12" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                </svg>
            </Link>
            
            <Link smooth to="#portfolio-section">
                <svg width="12" height="12" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                </svg>
            </Link>
            
            <Link smooth to="#internship-section">
                <svg width="12" height="12" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                </svg>
            </Link>
            
            <Link smooth to="#contact-section">
                <svg width="12" height="12" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                </svg>
            </Link>
        </div>
    );
}
