import React from 'react';
import ReactDOM from 'react-dom';
import "./App.css";

import Background from "./Components/Background/Background";
import Navigator from "./Components/Navigator/Navigator";
import Header from "./Components/Header/Header";
import Banner from "./Components/Banner/Banner";
import Portfolio from "./Components/Portfolio/Portfolio";

export default function App()
{
    return (
        <>
            <Background />
            <Navigator />
            <Header />
            <Banner />
            {/*<Portfolio />*/}
        </>
    );
}
