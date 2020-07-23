import React from "react";
import ReactDOM from "react-dom";
import { Route, Switch } from "react-router-dom";
import "./App.css";

import Contact from "./Components/Contact/Contact";
import Credit from "./Components/Credit/Credit";
import HomePage from "./Components/HomePage/HomePage";
import SEInternshipPage from "./Components/SEInternshipPage/SEInternshipPage";

export default function App()
{
    return (
        <>
            <Switch>
                <Route exact path="/software-engineering-remote-interns" component={SEInternshipPage} />
                <Route exact path="/" component={HomePage} />
            </Switch>
            
            <footer id="footer">
                <Contact />
                <Credit />
            </footer>
        </>
    );
}
