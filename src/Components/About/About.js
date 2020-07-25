import React from "react";
import "./About.css";

import { v4 } from "uuid";
import SelfDescription from "./SelfDescription/SelfDescription";

import OurStory from "../../Assets/img/ourStory.svg";
import OurVision from "../../Assets/img/ourVision.svg";
import Technology from "../../Assets/img/technology.svg";

export default function About()
{
    const DESCRIPTIONS = 
    [
        {
            iconPath: OurStory,
            title: "OUR STORY",
            description: "Ardent Labs' team of entrepreneurs develop business ideas in learning science and technology. The minimum viable product (MVP) of these ideas are quickly developed and tested to get feedback and market validation. Successful MVPs will receive seed funding to fully develop the app. The most promising ones get spun-off as independent companies by the lead entrepreneur(s) from the lab upon receiving venture funding."
        },
        {
            iconPath: OurVision,
            title: "OUR VISION",
            description: "Artificial Intelligence and 5G Networks are disruptive technologies that will lead to highly interactive and personalized learning experiences for students, more effective learning management tools for teachers, and holistic evaluation of student performance for parents. We invest in companies, incubate start-ups, and develop software and solutions that meet the needs of next generation learning."
        },
        {
            iconPath: Technology,
            title: "TECHNOLOGY",
            description: "We develop technology that use big data and artificial intelligence to analyze student learning behavior. We design student profiles based on learning behavior, education environment, and parenting habits to determine which subject is the easiest to learn for the student, what should be the focus of instructors in either classroom or one-on-one sessions, and intelligent recommendations for parents to engage and encourage their child’s learning journey."
        },
    ];
    
    return (
        <section id="about-section">
            <h4 id="about-title">WHO WE ARE</h4>
            <div id="descriptions">
                {DESCRIPTIONS.map((d) => 
                    <SelfDescription
                        key={v4()}
                        iconPath={d.iconPath}
                        title={d.title}
                        description={d.description} />
                )}
            </div>
        </section>
    );
}
