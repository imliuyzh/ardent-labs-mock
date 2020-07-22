import React from "react";
import ReactDOM from "react-dom";
import "./Mission.css";
import Detail from "./Detail/Detail";

import { v4 } from "uuid";
import Demo from "../../Assets/vid/demo.mp4";

export default function Mission()
{
    const MISSIONS =
    [
        {
            id: "01",
            title: "BUILD",
            description: "We develop apps and solutions to create better learning, teaching, and parenting experiences. We adopt the best industrial practices in software development, latest techniques in AI, and research-validated learning design principles to achieve maximum results."
        },
        {
            id: "02",
            title: "TRAIN",
            description: "We provide real-world, hands-on, and project-based training to high school and college students who are interested in developing apps, conducting scientific research using computing methods,  becoming entrepreneurs, or gain work experience in the tech industry."
        },
        {
            id: "03",
            title: "INCUBATE",
            description: "We provide internships and incubation to entrepreneurs who would like to start their own company or social ventures. Our network of advisers will help young entrepreneurs turn their ideas into winning business plan competitions, prototypes, and investment pitches."
        }
    ];
    
    return (
        <section className="mission-section" id="mission-section">
            <h4 className="title">WHAT WE DO</h4>
            <div className="missions">
                {MISSIONS.map((mission) => 
                    <Detail key={v4()} id={mission.id} title={mission.title} description={mission.description} / >)}
            </div>
            
            <div id="demo-video">
                <video autoPlay controls preload="true" playsInline id="demo">
                    <source src={Demo} type="video/mp4" />
                </video>
            </div>
        </section>
    )
}
