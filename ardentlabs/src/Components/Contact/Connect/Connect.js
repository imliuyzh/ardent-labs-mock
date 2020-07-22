import React from "react";
import ReactDOM from "react-dom";
import "./Connect.css";

import LinkedInLogo from "../../../Assets/img/linkedIn.png";
import FacebookLogo from "../../../Assets/img/facebook.png";
import TwitterLogo from "../../../Assets/img/twitter.png";

export default function Connect()
{
    return (
        <div id="connect-component">
            <div id="connect-content">
                <div id="connect-header-bar" />
                <h1 id="connect-title">CONNECT</h1>
                <div id="social-links">
                    <a href="https://www.linkedin.com/company/ardentlabs">
                        <img src={LinkedInLogo} alt="linkedin-logo" />
                    </a>
                    
                    <a href="http://www.facebook.com/ArdentLabs.io">
                        <img src={FacebookLogo} alt="facebook-logo" />
                    </a>
                    
                    <a href="https://twitter.com/ArdentLabsNews">
                        <img src={TwitterLogo} alt="twitter-logo" />
                    </a>
                </div>
            </div>
        </div>
    );
}
