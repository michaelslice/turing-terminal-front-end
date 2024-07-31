import { Link, useFetcher } from "react-router-dom";
import useDragger from "./DraggerComponent/dragger";
import React, { useState, useEffect, useRef} from 'react'
import { onAuthStateChanged } from "firebase/auth";
import { getAuth, signOut } from "firebase/auth";
import Filings from "./FilingsComponent/filings";
import Holders from "./HoldersComponent/holders";
import News from "./NewsComponent/news";
import Focus from "./FocusComponent/focus";
import Chart from "./ChartComponent/chart";
import Chat from "./ChatComponent/chat";
import QuoteMonitor from "./QuoteMonitorComponent/quotemonitor";
import AccountManagement from "./AccountManagementComponent/accountmanage";
import UserBiography from "./UserBiographyComponent/userbiography";
import Description from "./DescriptionComponent/description";
import Financials from "./FinancialsComponent/financials";
import CompanyEvents from "./CompanyEventsComponent/companyevents";
import OptionsChain from "./OptionChainComponent/optionchain";
import EquityScreener from "./EquityScreenerComponent/equityscreener";
import Ipo from "./IPOComponent/ipo";
import WorldIndices from "./WorldIndicesComponent/worldindices";
import {  } from "firebase/auth";
import {
    signInWithPopup, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    sendPasswordResetEmail, 
    GoogleAuthProvider,
    GithubAuthProvider   
} from "firebase/auth";
import { firebaseConfig } from "../LoginPage/login";
import {auth} from  "../LoginPage/login.tsx"
import "./terminal.css"

function Terminal() {

    let user = auth.currentUser?.uid;
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval)
    }, [])

    const [openFilings, setOpenFilings] = useState(false);
    const [openHolders, setOpenHolders] = useState(false);
    const [openNews, setOpenNews] = useState(false);
    const [openFocus, setOpenFocus] = useState(false);
    const [openChart, setOpenChart] = useState(false);
    const [openChat, setOpenChat] = useState(false);
    const [openQuoteMonitor, setOpenQuoteMonitor] = useState(false);
    const [openAccountManagement, setOpenAccountManagement] = useState(false);
    const [openUserBiography, setOpenUserBiography] = useState(false);
    const [openDescription, setOpenDescription] = useState(false);
    const [openFinancials, setOpenFinancials] = useState(false);
    const [openCompanyEvents, setOpenCompanyEvents] = useState(false);
    const [openOptionChain, setOpenOptionChain] = useState(false);
    const [openEquityScreener, setOpenEquityScreener] = useState(false);
    const [openInitialPublicOfferings, setOpenInitialPublicOfferings] = useState(false);
    const [openWordIndices, setOpenWordIndices] = useState(false);

    return (
        <div className="terminal">
            <div className="top-menu-row">
                <div className="right-side-search-bar"></div>
                <div className="middle-settings-options">
                    <button id="CF" onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => setOpenFilings(true)}>
                        <div className="pin-commands">
                            <span>CF</span>
                        </div>
                        <div className="hidden1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="carrot1" viewBox="0 0 16 16">
                                <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                            </svg>
                            <div className="hidden-text">Company Filings</div>
                        </div> 
                    </button>

                    <button id="HDS" onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => setOpenHolders(true)}>
                        <div className="pin-commands">
                            <span>HDS</span>                       
                        </div>
                        <div className="hidden1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="carrot2" viewBox="0 0 16 16">
                                <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                            </svg>
                            <div className="hidden-text">Holders</div>    
                        </div>
                    </button>

                    <button id="N" onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => setOpenNews(true)}>
                        <div className="pin-commands">
                            <span>N</span>
                        </div>
                        <div className="hidden1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="carrot3" viewBox="0 0 16 16">
                                <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                            </svg>
                            <div className="hidden-text">News</div>        
                        </div>
                    </button>

                    <button id="FOCUS" onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => setOpenFocus(true)}>
                        <div className="pin-commands">
                            <span>FOCUS</span>
                        </div>
                        <div className="hidden1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="carrot4" viewBox="0 0 16 16">
                                <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                            </svg>
                            <div className="hidden-text">Focus</div>            
                        </div>
                    </button>
                     
                    <button id="C" onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => setOpenChart(true)}>
                        <div className="pin-commands">
                            <span>C</span>        
                        </div>
                        <div className="hidden1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="carrot5" viewBox="0 0 16 16">
                                <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                            </svg>
                            <div className="hidden-text">Chart</div>    
                        </div>
                    </button>

                    <button id="CHAT" onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => setOpenChat(true)}>
                        <div className="pin-commands">
                            <span>CHAT</span>
                        </div>
                        <div className="hidden1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="carrot6" viewBox="0 0 16 16">
                                <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                            </svg>
                            <div className="hidden-text">Chat</div>
                        </div>
                    </button>
                    
                    <button id="QM" onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => setOpenQuoteMonitor(true)}>
                        <div className="pin-commands">
                            <span>QM</span>
                        </div>
                        <div className="hidden1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="carrot7" viewBox="0 0 16 16">
                                <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                            </svg>
                            <div className="hidden-text">Quote Monitor</div>    
                        </div>
                    </button>

                    <button id="ACM" onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => setOpenAccountManagement(true)}>
                        <div className="pin-commands">
                            <span>ACM</span>
                        </div>
                        <div className="hidden1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="carrot8" viewBox="0 0 16 16">
                                <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                            </svg>
                            <div className="hidden-text">Account Management</div>    
                        </div>
                    </button>

                    <button id="BIO" onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => setOpenUserBiography(true)}>
                        <div className="pin-commands">
                            <span>BIO</span>
                        </div>
                        <div className="hidden1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="carrot9" viewBox="0 0 16 16">
                                <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                            </svg>
                            <div className="hidden-text">Bio</div>
                        </div>
                    </button>

                    <button id="DES" onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => setOpenDescription(true)}>
                        <div className="pin-commands">
                            <span>DES</span>
                        </div>
                        <div className="hidden1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="carrot10" viewBox="0 0 16 16">
                                <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                            </svg>
                            <div className="hidden-text">Description</div>
                        </div>
                    </button>

                    <button id="FA" onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => setOpenFinancials(true)}>
                        <div className="pin-commands">
                            <span>FA</span>
                        </div>
                        <div className="hidden1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="carrot11" viewBox="0 0 16 16">
                                <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                            </svg>
                            <div className="hidden-text">Financials</div>
                        </div>
                    </button>

                    <button id="EVT" onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => setOpenCompanyEvents(true)}>
                        <div className="pin-commands">
                            <span>EVT</span>
                        </div>
                        <div className="hidden1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="carrot12" viewBox="0 0 16 16">
                                <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                            </svg>
                            <div className="hidden-text">Company Events</div>    
                        </div>
                    </button>

                    <button id="OPT" onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => setOpenOptionChain(true)}>
                        <div className="pin-commands">
                            <span>OPT</span>
                        </div>
                        <div className="hidden1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="carrot13" viewBox="0 0 16 16">
                                <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                            </svg>
                            <div className="hidden-text">Option Chain</div>    
                        </div>
                    </button>

                    <button id="EQS" onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => setOpenEquityScreener(true)}>
                        <div className="pin-commands">
                            <span>EQS</span>
                        </div>
                        <div className="hidden1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="carrot14" viewBox="0 0 16 16">
                                <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                            </svg>
                            <div className="hidden-text">Equity Screener</div>    
                        </div>
                    </button>

                    <button id="IPO" onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => setOpenInitialPublicOfferings(true)}>
                        <div className="pin-commands">
                            <span>IPO</span>
                        </div>
                        <div className="hidden1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="carrot15" viewBox="0 0 16 16">
                                <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                            </svg>
                            <div className="hidden-text">Initial Public Offerings</div>
                        </div>
                    </button>

                    <button id="WI" onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => setOpenWordIndices(true)}>
                        <div className="pin-commands">
                            <span>WI</span>
                        </div>
                        <div className="hidden1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="carrot16" viewBox="0 0 16 16">
                                <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                            </svg>
                            <div className="hidden-text">World Indices</div>
                        </div>
                    </button>

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
                        {user ? 
                            <Link to={"/login"}>
                                <span>Register</span>
                            </Link>
                        :    
                            <Link to={"/signout"}>
                                <span>Logout</span>
                            </Link>
                        }
                    </button>

                    <button className="login-button-terminal">
                        {user ? 
                            <Link to={"/login"}>
                                <span>Login</span>
                            </Link>
                        :    
                            <Link to={"/signout"}>
                                <span>Logout</span>
                            </Link>
                        }
                    </button>
                </div>
            </div>

            <div id="middle-section">
                {openFilings && 
                    <Filings 
                        setOpenFilings={setOpenFilings} 
                />}
                
                {openHolders && 
                    <Holders 
                        setOpenHolders={setOpenHolders}
                    />}
                
                {openNews && 
                    <News setOpenNews={setOpenNews}
                />}
                
                {openFocus && 
                    <Focus 
                        setOpenFocus={setOpenFocus} 
                />}
                
                {openChart && 
                    <Chart setOpenChart={setOpenChart}
                />}
                
                {openChat && 
                    <Chat setOpenChat={setOpenChat}
                />}
                
                {openQuoteMonitor && 
                    <QuoteMonitor setOpenQuoteMonitor={setOpenQuoteMonitor} 
                />}
                
                {openAccountManagement && 
                    <AccountManagement setOpenAccountManagement={setOpenAccountManagement}
                />}
                
                {openUserBiography && 
                    <UserBiography setOpenUserBiography={setOpenUserBiography} 
                />}
                
                {openDescription && 
                    <Description setOpenDescription={setOpenDescription} 
                />}
                
                {openFinancials && 
                    <Financials setOpenFinancials={setOpenFinancials} 
                />}
                
                {openCompanyEvents && 
                    <CompanyEvents setOpenCompanyEvents={setOpenCompanyEvents} 
                />}
                
                {openOptionChain && 
                    <OptionsChain setOpenOptionChain={setOpenOptionChain} 
                />}
                
                {openEquityScreener && 
                    <EquityScreener setOpenEquityScreener={setOpenEquityScreener} 
                />}
                
                {openInitialPublicOfferings && 
                    <Ipo setOpenInitialPublicOfferings={setOpenInitialPublicOfferings}
                />}
                
                {openWordIndices && 
                    <WorldIndices setOpenWordIndices={setOpenWordIndices}
                />}
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
    </div>)
}

export default Terminal