import React from "react";
import ReactDOM from "react-dom";
import "./Contact.css";

import QuickLinks from "./QuickLinks/QuickLinks";
import ContactUs from "./ContactUs/ContactUs";
import Connect from "./Connect/Connect";

import ArdentLabsLogo from "../../Assets/img/ardentLabsLogo.webp";

export default function Contact()
{
    return (
        <section id="contact-section">
            <div id="contact-content">
                <img src={ArdentLabsLogo} alt="Ardent Labs Logo" id="footer-logo" />
                
                <div id="contact-sections">
                    <QuickLinks />
                    <ContactUs />
                    <Connect />
                </div>
            </div>
        </section>
    );
}
