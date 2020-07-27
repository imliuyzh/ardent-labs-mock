import React from "react";
import "./InputForm.css";

// Modified from https://github.com/manishsaraan/email-validator
// eslint-disable-next-line
const EXPRESSION = new RegExp("^[-0-9A-Z_a-z](\.?[-0-9A-Z_a-z])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$");

export default function InputForm()
{
    return (
        <div id="internship-contact-form">
            <input
                required
                type="email"
                className="form"
                id="email"
                size="30"
                placeholder="Email"
                onClick={handleOnClick}
                onChange={handleOnChange}
                onMouseOver={handleOnMouseOver}
                onMouseLeave={handleOnMouseLeave}
            />
            <textarea
                className="form"
                id="message"
                placeholder="Type your message here..."
            />
            <button id="submit">Submit</button>
        </div>
    );
}

function handleOnClick(event)
{
    if (event.target.style.backgroundColor === "rgb(255, 255, 255)"
        || EXPRESSION.exec(event.target.value) !== null
        || event.target.style.backgroundColor === "rgba(204, 204, 202, 1)")
    {
        event.target.style.border = "2px solid rgba(0, 210, 212, 1)";
        event.target.style.backgroundColor = "rgba(204, 204, 202, 1)";
        event.target.style.width = "calc(100% + 2px)";
    }
    else if (event.target.style.backgroundColor === "rgba(255, 64, 64, 0.1)")
    {
        event.target.style.border = "1px solid rgba(255, 64, 64, 1)";
        event.target.style.backgroundColor = "rgba(255, 64, 64, 0.1)";
        event.target.style.width = "calc(100% + 4px)";
    }
}

function handleOnChange(event)
{
    if (event.target.value !== ""
        || event.target.style.backgroundColor !== "rgba(204, 204, 202, 1)")
    {
        if (EXPRESSION.exec(event.target.value) !== null)
        {
            event.target.style.border = "2px solid rgba(0, 210, 212, 1)";
            event.target.style.backgroundColor = "rgba(204, 204, 202, 1)";
            event.target.style.width = "calc(100% + 2px)";
        }
        else
        {
            event.target.style.border = "1px solid rgba(255, 64, 64, 1)";
            event.target.style.backgroundColor = "rgba(255, 64, 64, 0.1)";
            event.target.style.width = "calc(100% + 4px)";
        }
    }
}

function handleOnMouseOver(event)
{
    if (["rgb(255, 255, 255)", ""].includes(event.target.style.backgroundColor))
    {
        event.target.style.border = "2px solid rgba(0, 210, 212, 1)";
        event.target.style.backgroundColor = "rgba(204, 204, 202, 1)";
        event.target.style.width = "calc(100% + 2px)";
    }
    else if (event.target.style.backgroundColor === "rgba(255, 64, 64, 0.1)")
    {
        event.target.style.border = "1px solid rgba(255, 64, 64, 1)";
        event.target.style.backgroundColor = "rgba(255, 64, 64, 0.1)";
        event.target.style.width = "calc(100% + 4px)";
    }
}

function handleOnMouseLeave(event)
{
    if (["rgb(204, 204, 202)", ""].includes(event.target.style.backgroundColor)
        || EXPRESSION.exec(event.target.value) !== null)
    {
        event.target.style.border = "3px solid rgba(100, 102, 102, 1)";
        event.target.style.backgroundColor = "rgb(255, 255, 255, 1)";
        event.target.style.width = "100%";
    }
    else
    {
        event.target.style.border = "1px solid rgba(255, 64, 64, 1)";
        event.target.style.backgroundColor = "rgba(255, 64, 64, 0.1)";
        event.target.style.width = "calc(100% + 4px)";
    }
}
