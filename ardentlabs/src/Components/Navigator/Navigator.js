import React from "react";
import ReactDOM from "react-dom";
import ScrollIntoView from "react-scroll-into-view";
import "./Navigator.css";

export default function Navigator()
{
    return (
        <div id="navigator">
            <ScrollIntoView selector="html">
                <svg width="12" height="12" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                </svg>
            </ScrollIntoView>
            
            <ScrollIntoView selector="#mission-section">
                <svg width="12" height="12" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                </svg>
            </ScrollIntoView>
            
            <ScrollIntoView selector="#about-section">
                <svg width="12" height="12" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                </svg>
            </ScrollIntoView>
            
            <ScrollIntoView selector="#portfolio-section">
                <svg width="12" height="12" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                </svg>
            </ScrollIntoView>
            
            <ScrollIntoView selector="#internship-section">
                <svg width="12" height="12" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                </svg>
            </ScrollIntoView>
            
            <ScrollIntoView selector="#contact-section">
                <svg width="12" height="12" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                </svg>
            </ScrollIntoView>
        </div>
    );
}
