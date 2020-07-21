import React from "react";
import ReactDOM from "react-dom";
import "./SlideShow.css";

import Carousel from "nuka-carousel";

import FirstImage from "../../../Assets/img/slideshow1.jpg";
import SecondImage from "../../../Assets/img/slideshow2.jpg";
import ThirdImage from "../../../Assets/img/slideshow3.jpg";
    
const ATTRIBUTES = 
{
    autoplay: true,
    wrapAround: true,
    autoplayInterval: 2000,
    dragging: false,
    enableKeyboardControls: false,
    pauseOnHover: false,
    swiping: false,
    renderCenterLeftControls: ( { previousSlide } ) => {
        return (
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 21 41" onClick={previousSlide} className="control" id="prev-button">
                <polygon points="20.3,40.8 0,20.5 20.3,0.2 21,0.9 1.3,20.5 21,40.1" />
            </svg>
        );
    },
    renderCenterRightControls: ( { nextSlide } ) => {
        return (
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 21 41" onClick={nextSlide} className="control" id="next-button">
                <polygon points="20.3,40.8 0,20.5 20.3,0.2 21,0.9 1.3,20.5 21,40.1" />
            </svg>
        );
    },
    renderBottomCenterControls: (props) => {
        let paging = [];
        for (let counter = 0; counter < 3; ++counter)
        {
            paging.push(
                <button 
                    style={{
                        width: (props.currentSlide === counter) ? "9px" : "6px",
                        height: (props.currentSlide === counter) ? "9px" : "6px",
                        backgroundColor: (props.currentSlide === counter) ? "transparent" : "#FFFFFF",
                        border: (props.currentSlide === counter) ? "2px solid rgba(255, 255, 255, 1)" : "none"
                    }}
                    onClick={() => props.goToSlide(counter)}
                />
            );
        }
        return paging;
    }
};
    
export default function SlideShow()
{    
    return (
        <div className="slideshow">
            <Carousel {...ATTRIBUTES}>
                <img src={FirstImage} alt="" />
                <img src={SecondImage} alt="" />
                <img src={ThirdImage} alt="" />
            </Carousel>
        </div>
    );
}
