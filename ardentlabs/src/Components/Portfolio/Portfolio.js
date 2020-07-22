import React from "react";
import ReactDOM from "react-dom";
import "./Portfolio.css";

import ArdentLogo from "../../Assets/img/ardentLogo.jpg";
import StemForAllLogo from "../../Assets/img/stemForAllLogo.png";
import ChiaLogo from "../../Assets/img/chia.png";
import PeerGeniusLogo from "../../Assets/img/peerGenius.webp";
import VoluntuLogo from "../../Assets/img/voluntu.png";

export default function Portfolio()
{
    return (
        <section id="portfolio">
            <h4 id="portfolio-title">PORTFOLIO</h4>
            <div id="image-container-1">
                <img src={ArdentLogo} id="ardent-logo" alt="Ardent Logo" />
                <img src={StemForAllLogo} id="stem-for-all-logo" alt="Stem for All Logo" />
            </div>
            <div id="image-container-2">
                <img src={ChiaLogo} id="chia-logo" alt="Chia Logo" />
                <img src={PeerGeniusLogo} id="peer-genius-logo" alt="Peer Genius Logo" />
                <img src={VoluntuLogo} id="voluntu-logo" alt="Voluntu Logo" />
            </div>
        </section>
    );
}
