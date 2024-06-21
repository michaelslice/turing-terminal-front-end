import { useFetcher } from "react-router-dom";
import useDragger from "./DraggerComponent/dragger";
import React, { useState, useEffect, useRef} from 'react'
import Settings from "./SettingsComponent/settings";

import "./terminal.css"

function Terminal() {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval)
    }, [])

    const [searchBar, setSearchBar] = useState(false);
    const setSearchBarFunction = () => setSearchBar(true);

    useEffect(() => {
        let element = document.getElementById("middle-section")
        element?.addEventListener("click", ()=> {
            setSearchBar(false);
        })
    })

    const [search, setSearch] = useState(" ");
    const func = (e: any) => { 
        setSearch(e.target.value)
    }

    return (
        <div className="terminal">
            <div className="top-menu-row">

                <div className="right-side-search-bar" onClick={setSearchBarFunction}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                    </svg>
                    <div className="searchbar">
                        { !searchBar 
                            ? <span>Terminal</span> 
                            : 
                            <>
                            <div className="search-bar-div">
                                <input onChange={func} className="search-bar-input"></input>                          
                                <i></i>
                            </div>
                            { /*  
                            { search === " " 
                                ? <p>t1</p> 
                                : <p>t2</p> 
                            } */}
                            </>
                        }
                    </div>
                </div>

                <div className="middle-settings-options">
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="pin" viewBox="0 0 16 16">
                            <path d="M9.828.722a.5.5 0 0 1 .354.146l4.95 4.95a.5.5 0 0 1 0 .707c-.48.48-1.072.588-1.503.588-.177 0-.335-.018-.46-.039l-3.134 3.134a6 6 0 0 1 .16 1.013c.046.702-.032 1.687-.72 2.375a.5.5 0 0 1-.707 0l-2.829-2.828-3.182 3.182c-.195.195-1.219.902-1.414.707s.512-1.22.707-1.414l3.182-3.182-2.828-2.829a.5.5 0 0 1 0-.707c.688-.688 1.673-.767 2.375-.72a6 6 0 0 1 1.013.16l3.134-3.133a3 3 0 0 1-.04-.461c0-.43.108-1.022.589-1.503a.5.5 0 0 1 .353-.146m.122 2.112v-.002zm0-.002v.002a.5.5 0 0 1-.122.51L6.293 6.878a.5.5 0 0 1-.511.12H5.78l-.014-.004a5 5 0 0 0-.288-.076 5 5 0 0 0-.765-.116c-.422-.028-.836.008-1.175.15l5.51 5.509c.141-.34.177-.753.149-1.175a5 5 0 0 0-.192-1.054l-.004-.013v-.001a.5.5 0 0 1 .12-.512l3.536-3.535a.5.5 0 0 1 .532-.115l.096.022c.087.017.208.034.344.034q.172.002.343-.04L9.927 2.028q-.042.172-.04.343a1.8 1.8 0 0 0 .062.46z"/>
                        </svg>
                    </button>
                </div>
               
                <div className="left-side-terminal-links">
                    <div className="help-button">
                        <button>
                            <span >HELP</span>
                        </button>
                    </div>
                    
                    <div className="time-options">
                        <button >
                            <span>{time.toLocaleTimeString()}</span>                       
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="circle" viewBox="0 0 16 16">
                                <circle cx="8" cy="8" r="8"/>
                            </svg>
                        </button>
                    </div>

                    <button className="register-button">
                        <span>Register</span>
                    </button>

                    <button className="login-button-terminal">
                        <span>Login</span>
                    </button>
                </div>
            </div>

            <div id="middle-section">
                {searchBar && 
                    <div className="search-bar">
                        <p>FINANCE STUFF</p>
                    </div>
                }

                <Settings></Settings>
            </div>

            <div className="bottom-menu-row">
                <button className="main-button">
                    <span>Main</span>
                </button>

                <button className="add-button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="add">
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default Terminal