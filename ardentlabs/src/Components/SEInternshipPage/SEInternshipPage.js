import React from "react";
import ReactDOM from "react-dom";
import "./SEInternshipPage.css";

import SEIPBanner from "./SEIPBanner/SEIPBanner";
import Information from "./Information/Information";
import YearRound from "./YearRound/YearRound";

export default function SEInternshipPage()
{
    React.useEffect(setTitle, []);
    return (
        <>
            <main>
                <SEIPBanner />
                <Information />
                <YearRound />
            </main>
        </>
    );
}

function setTitle()
{
    document.title = "Software Engineering Virtual Internship | Ardent Labs";
}
