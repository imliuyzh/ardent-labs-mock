import React from "react";
import ReactDOM from "react-dom";
import "./App.css";

import Background from "./Components/Background/Background";
import Navigator from "./Components/Navigator/Navigator";
import Header from "./Components/Header/Header";
import Banner from "./Components/Banner/Banner";
import Mission from "./Components/Mission/Mission";
import About from "./Components/About/About";
import Portfolio from "./Components/Portfolio/Portfolio";
import Internships from "./Components/Internships/Internships";
import Footer from "./Components/Footer/Footer";

export default function App()
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
                <Footer />
            </footer>
        </>
    );
}
