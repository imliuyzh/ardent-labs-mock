import React from "react";
import "./Information.css";

import Mentor from "./Mentor/Mentor";
import { v4 } from "uuid";

import Question from "../../../Assets/img/question.svg";
import Pencil from "../../../Assets/img/pencil.svg";
import Laptop from "../../../Assets/img/laptop.svg";
import Flag from "../../../Assets/img/flag.svg";
import Person from "../../../Assets/img/person.svg";
import Danial from "../../../Assets/img/danial.png";
import Ryan from "../../../Assets/img/ryan.png";
import Nisarg from "../../../Assets/img/nisarg.png";
import Alvin from "../../../Assets/img/alvin.png";
import Kuixi from "../../../Assets/img/kuixi.png";

const MENTORS =
[
    {
        name: "DANIAL",
        ardentStatus: "Software Engineer at Ardent Labs",
        currentStatus: "Full time job offer at Western Digital",
        icon: Danial
    },
    {
        name: "RYAN",
        ardentStatus: "Software Engineer at Ardent Labs",
        currentStatus: "Full time job offer at Amazon",
        icon: Ryan
    },
    {
        name: "NISARG",
        ardentStatus: "Software Engineer at Ardent Labs",
        currentStatus: "Full time job offer at Amazon",
        icon: Nisarg
    },
    {
        name: "ALVIN",
        ardentStatus: "Software Engineer at Ardent Labs",
        currentStatus: "Accepted intern at Amazon",
        icon: Alvin
    },
    {
        name: "KUIXI",
        ardentStatus: "Software Engineer at Ardent Labs",
        currentStatus: "Accepted intern at Amazon",
        icon: Kuixi
    }
];

export default function Information()
{
    return (
        <section id="info-section">
            { displayInterningReason() }
            { displayLearningObjective() }
            { displayDuty() }
            { displayProgramDate() }
            { displayMentors() }
            <div id="line" />
        </section>
    );
}

function displayInterningReason()
{
    return (
        <div className="info-block" id="interning-reason-section">
            <div className="info-section-heading">
                <img src={Question} alt="question" />
                <h2 className="info-section-header">
                    Why should you intern at Ardent Labs?
                </h2>
            </div>
            
            <p className="info-block-description">
                Our mission is to provide interns the support and resources needed to develop both professional and technical skills that will jump-start their career. Our last cohort of interns were accepted into major companies such as Google, Amazon, Walmart, Siemens, and Cerner Corporation.
            </p>
            
            <p className="info-block-description" id="intern-reason-p2"> 
                As an Ardent Labs intern, every task given to you is never trivial, makes an impact, and most importantly, helps you learn something new and improve upon your current skills. You will also have the rare opportunity to gain mentorship from our lead software engineers, who will guide you through industry-standard software development practices.
            </p>
        </div>
    );
}

function displayLearningObjective()
{
    return (
        <div className="info-block">
            <div className="info-section-heading">
                <img src={Pencil} alt="pencil" />
                <h2 className="info-section-header">
                    What will you learn?
                </h2>
            </div>
            
            <p className="info-block-description">
                This internship provides aspiring software engineers the opportunity to learn modern web development tools such as HTML/CSS, JavaScript, React/React Native, GraphQL, and version control through Git.
            </p>
        </div>
    );
}

function displayDuty()
{
    return (
        <div className="info-block">
            <div className="info-section-heading">
                <img src={Laptop} alt="laptop" />
                <h2 className="info-section-header">
                    What will you do?
                </h2>
            </div>
            
            <p className="info-block-description">
                During the 8-10 weeks internship, interns will work on learning the tools used by our products through completing milestone projects. There will be four milestone projects to work on throughout the program that interns can complete at their own pace.
            </p>

            <p className="info-block-description p2"> 
                Interns will be required to work at least 10 hours per week to make sufficient progress on these projects.
            </p>
        </div>
    );
}

function displayProgramDate()
{
    return (
        <div className="info-block">
            <div className="info-section-heading">
                <img src={Flag} alt="flag" />
                <h2 className="info-section-header">
                    When does the program end?
                </h2>
            </div>

            <p className="info-block-description">
                This virtual internship takes place during the duration of UCI's spring quarter. The internship will end on June 5th, and interns who are interested in the summer internship will need to send in another application around May 10th. To learn more about about our summer internships, <a href="https://ead60fcc-40f3-4b04-9c66-485499008c9a.filesusr.com/ugd/132a22_10acddd2d98747ed97eae09cef4f048e.pdf" target="_blank" rel="noopener noreferrer"> click here</a>.
            </p>
        </div>
    );
}

function displayMentors()
{
    return (
        <div className="info-block">
            <div className="info-section-heading">
                <img src={Person} alt="person" />
                <h2 className="info-section-header">
                    Meet the Mentors
                </h2>
            </div>
            
            <p className="info-block-description">
                Meet our lead software engineers, who have been offered full time jobs and internships from renowned tech companies such as Amazon and Western Digital:
            </p>
            
            <div id="mentors-container">
                {MENTORS.map(
                    (mentor) => <Mentor
                                    key={v4()}
                                    name={mentor.name}
                                    ardentStatus={mentor.ardentStatus}
                                    currentStatus={mentor.currentStatus}
                                    icon={mentor.icon} />
                )}
            </div>
        </div>
    );
}
