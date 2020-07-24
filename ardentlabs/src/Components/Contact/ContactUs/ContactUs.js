import React from "react";
import "./ContactUs.css";

export default function ContactUs()
{
    return (
        <div id="contact-us-component">
            <div id="contact-us-content">
                <div id="contact-us-header-bar" />
                <h1 id="contact-us-title">CONTACT US</h1>
                
                <div id="contact-method">
                    <a href="mailto:learn@ardentlbs.io">
                        <p>learn@ardentlbs.io</p>
                    </a>
                    <p>949. 496. 1688</p>
                </div>
                
                <div id="contact-address">
                    <br />
                    <p>4199 Campus Drive</p>
                    <p>Suite 260</p>
                    <p>Irvine, CA 92612</p>
                </div>
            </div>
        </div>
    );
}
