import React from "react";
import ReactDOM from "react-dom";
import { Route, Switch } from "react-router-dom";
import "./App.css";

import Background from "./Components/Background/Background";
import Header from "./Components/Header/Header";
import Contact from "./Components/Contact/Contact";
import Credit from "./Components/Credit/Credit";
import HomePage from "./Components/HomePage/HomePage";
import SEInternshipPage from "./Components/SEInternshipPage/SEInternshipPage";

export default function App()
{
    return (
        <>
            <Background />
            <Header />
            
            <Switch>
                <Route exact path="/software-engineering-remote-interns" component={SEInternshipPage} />
                <Route exact path="/" component={HomePage} />
            </Switch>
            
            <footer>
                <Contact />
                <Credit />
            </footer>
        </>
    );
}
