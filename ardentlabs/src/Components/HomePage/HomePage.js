import React from "react";
import ReactDOM from "react-dom";
import "./HomePage.css";

import Header from "../Header/Header";
import Navigator from "../Navigator/Navigator";
import Banner from "../Banner/Banner";
import Mission from "../Mission/Mission";
import About from "../About/About";
import Portfolio from "../Portfolio/Portfolio";
import Internships from "../Internships/Internships";

export default function HomePage()
{
    React.useEffect(setTitle, []);
    return (
        <>
            <div id="top-section">
                <Header />
                <Banner />
            </div>
            
            <aside>
                <Navigator />
            </aside>
            
            <main id="home-content">
                <Mission />
                <About />
                <Portfolio />
                <Internships />
            </main>
        </>
    );
}

function setTitle()
{
    document.title = "Home | Ardent Labs";
}
