import React from "react";
import "./Internships.css";

import Slide from "react-reveal/Slide";
import InputForm from "./InputForm/InputForm";

export default function Internships()
{
    return (
        <section id="internship-section">
            <h4 id="title">INTERNSHIPS</h4>
            
            <div id="internship-descriptions">
                <div id="se-description">
                    <h1 className="internship-h1">Software Engineer</h1>
                    <p className="internship-p">
                        Learn the agile development process, master the latest front and back-end development tools, and take charge of an app from conception to production.
                    </p>
                </div>
                
                <div id="ui-description">
                    <h1 className="internship-h1">UI/UX/Product Manager</h1>
                    <p className="internship-p">
                        Learn how to develop beautiful user interface and meaningful user experience and
jump start your career in product management.
                    </p>
                </div>
                
                <div id="marketing-description">
                    <h1 className="internship-h1">Digital Marketer</h1>
                    <p className="internship-p">
                        Learn how to market software applications via online and offline marketing media with a special emphasis on social media marketing.
                    </p>
                </div>
            </div>
            
            <div id="internship-contact-section">
                <Slide left>
                    <h6 id="internship-contact-message">
                        Are you interested in developing a career and getting jobs at leading tech companies? Send us a short message and we will contact you shortly.
                    </h6>
                </Slide>
                <InputForm />
            </div>
        </section>
    );
}
