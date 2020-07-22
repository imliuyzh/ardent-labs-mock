import React from "react";
import ReactDOM from "react-dom";
import "./HomePage.css";

import Background from "../Background/Background";
import Navigator from "../Navigator/Navigator";
import Header from "../Header/Header";
import Banner from "../Banner/Banner";
import Mission from "../Mission/Mission";
import About from "../About/About";
import Portfolio from "../Portfolio/Portfolio";
import Internships from "../Internships/Internships";
import Contact from "../Contact/Contact";
import Credit from "../Credit/Credit";

export default function HomePage()
{
    return (
        <>
            <Background />
            <Header />
            <Banner />
            
            <aside>
                <Navigator />
            </aside>
            
            <main>
                <Mission />
                <About />
                <Portfolio />
                <Internships />
            </main>
            
            <footer>
                <Contact />
                <Credit />
            </footer>
        </>
    );
}
