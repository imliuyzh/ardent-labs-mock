import React from 'react';
import ReactDOM from 'react-dom';
import "./App.css";
import Header from "./Components/Header/Header";
import Banner from "./Components/Banner/Banner";
import BlueParticles from "./Assets/vid/blueParticles480p.mp4";
import BlueParticlesBG from "./Assets/img/blueParticlesBG.webp";

export default function App()
{
    return (
        <>
            <video autoPlay muted loop poster={BlueParticlesBG}>
                <source src={BlueParticles} type="video/mp4" />
            </video>
            <Header />
            <Banner />
        </>
    );
}
