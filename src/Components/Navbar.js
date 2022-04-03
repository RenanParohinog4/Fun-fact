import React from "react"
import logo from "../logo.svg"

export default function Navbar(){
    return(
        <div>
            <nav className="navbar">
                <div className="logo-section">
                    <img src={logo} alt="logo" />
                    <small className="logo-text">ReactFacts</small>
                </div>
                <div>
                    <small className="title">React Course - Project 1</small>
                </div>
            </nav>
        </div>
    )
}
