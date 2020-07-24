import React from "react";
import { Link } from "react-scroll";
import "./Navigator.css";

export default function Navigator()
{
    return (
        <div id="navigator">
            <Link activeClass="active" to="top-section" spy={true} smooth={true} />
            <Link activeClass="active" to="mission-section" spy={true} smooth={true} />
            <Link activeClass="active" to="about-section" spy={true} smooth={true} />
            <Link activeClass="active" to="portfolio-section" spy={true} smooth={true} />
            <Link activeClass="active" to="internship-section" spy={true} smooth={true} />
            <Link activeClass="active" to="footer" spy={true} smooth={true} />
        </div>
    );
}
