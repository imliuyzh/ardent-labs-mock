import React from 'react';
import ReactDOM from 'react-dom';
import "./Background.css";

import BlueParticles480p from "../../Assets/vid/blueParticles480p.mp4";
import BlueParticles720p from "../../Assets/vid/blueParticles720p.mp4";
import BlueParticles1080p from "../../Assets/vid/blueParticles1080p.mp4";
import BlueParticlesBG from "../../Assets/img/blueParticlesBG.webp";

export default function Background()
{
    let background = null;
    if (window.innerWidth < 1280)
    {
        background = BlueParticles480p;
    }
    else if (window.innerWidth >= 1280 && window.innerWidth < 1920)
    {
        background = BlueParticles720p;
    }
    else
    {
        background = BlueParticles1080p;
    }
    
    return (
        <video autoPlay muted loop disablePictureInPicture id="background"
            src={background} poster={BlueParticlesBG} type="video/mp4" />
    );
}
