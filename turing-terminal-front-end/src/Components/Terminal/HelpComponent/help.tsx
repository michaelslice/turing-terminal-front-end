import { useState } from "react";
import useDragger from "../DraggerComponent/dragger";
import "./help.css"

function Help({setOpenHelp}: any) {
    
    useDragger("help-box");
    
    const closeOpenHelp = () => {
        console.log("close settings")
        setOpenHelp(false);
    }

    return(
        <div id="help-box" className="box">
            <div className="top-settings-row">
            
            <div className="settings-text">
                <span>Help</span>
            </div>
            <div className="settings-right-side-buttons">
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="gear" viewBox="0 0 16 16">
                        <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0"/>
                        <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z"/>
                    </svg>
                </button>
                <button onClick={closeOpenHelp}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="x" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                    </svg>
                </button>
            </div>       
        </div>
        
        <div className="flex-container">
            <div className="top-row">
                <h1>Turing Terminal</h1>
                <a>
                    <span className="documentation">Documentation</span>
                </a>
            </div>

            <div className="top-row">
                <p>
                    The Godel Terminal is a Command Line Interface (CLI) system. 
                    You can access the terminal, by clicking the "Enter a Ticker" 
                    prompt in the upper left, or by pressing ` (backtick) on your keyboard. 
                    You will use the terminal to enter commands, which provide access all of 
                    Godel's features. Below, is the syntax for a command. Between each statement 
                    is a space, or you can press Tab to autoselect the highlighted option in the terminal.
                </p>
            </div>

            <div className="top-row">
            <svg viewBox="64 64 896 896" focusable="false" data-icon="right" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"></path>
            </svg>
                <div className="element-wrapper">
                    <span className="security-identifier">Security Identifier</span>
                </div>
                <div className="element-wrapper">
                    <span className="asset-class">Asset Class</span>
                </div>
                <div className="element-wrapper">
                    <span className="command-shortcut">Command Shortcut</span>
                </div>
                <div className="element-wrapper">
                    <span className="arguement-one">Arguement 1</span>
                </div>
                <div className="element-wrapper">
                    <span className="arguement-two">Arguement 2</span>
                </div>
            </div>

            <div className="top-row">
                <p>
                    Here's an example, to pull up a chart for Apple, Inc.
                </p>
            </div>

            <div className="top-row">
            <svg viewBox="64 64 896 896" focusable="false" data-icon="right" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"></path>
            </svg>
                <div className="element-wrapper">
                    <span className="security-identifier">AAPL</span>
                </div>
                <div className="element-wrapper">
                    <span className="asset-class">EQ</span>
                </div>
                <div className="element-wrapper">
                    <span className="command-shortcut">G</span>
                </div>
            </div>

            <div className="top-row">
                <p>
                In this case, AAPL is our security identifier. EQ (for equity) 
                is the asset class. There are many asset classes, you can see 
                the full list on our documentation page. G, is the command, or 
                the shortcut, for the Chart Command.
                </p>
            </div>

            <div className="top-row">
                <p>
                Try it out! Enter AAPL EQ G into the terminal, and you'll see a chart for Apple, Inc.
                </p>
            </div>
        </div>
    
    </div>)
}

export default Help