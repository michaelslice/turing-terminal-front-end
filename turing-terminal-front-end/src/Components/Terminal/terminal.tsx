import { Link, useFetcher } from "react-router-dom";
import useDragger from "./DraggerComponent/dragger";
import React, { useState, useEffect, useRef} from 'react'
import { onAuthStateChanged } from "firebase/auth";
import { getAuth, signOut } from "firebase/auth";
import Settings from "./SettingsComponent/settings";
import Filings from "./FilingsComponent/filings";
import Holders from "./HoldersComponent/holders";
import News from "./NewsComponent/news";
import Focus from "./FocusComponent/focus";
import Chart from "./ChartComponent/chart";
import Help from "./HelpComponent/help";
import Chat from "./ChatComponent/chat";
import QuoteMonitor from "./QuoteMonitorComponent/quotemonitor";
import AccountManagement from "./AccountManagementComponent/accountmanage";
import UserBiography from "./UserBiographyComponent/userbiography";
import Description from "./DescriptionComponent/description";
import Financials from "./FinancialsComponent/financials";
import TimeAndSales from "./TimeAndSalesComponent/timeandsales";
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
import "./terminal.css"

import { firebaseConfig } from "../LoginPage/login";
import {auth} from  "../LoginPage/login.tsx"

function Terminal() {

    let user = auth.currentUser?.uid;

    const [visibility, setVisibility] = useState({
        filings: false,
        holders: false,
        news: false,
        focus: false,
        chart: false,
        help: false,
        chat: false,
        quoteMonitor: false,
        accountManagement: false,
        userBiography: false,
        description: false,
        financials: false,
        settings: false,
        timeAndSales: false,
        companyEvents: false,
        optionChain: false,
        equityScreener: false,
        initialPublicOfferings: false,
        wordIndices: false,
    })

    const setVisibilityFunction = (key: string, value: boolean ) => {
        setVisibility(prevState => ({
            ...prevState, // Copy all properties from prevState into the state object
            [key]: value,
        }))
    }

    const toggleFilingsVisibility = () => setVisibilityFunction('filings', !visibility.filings);
    const toggleHoldersVisibility = () => setVisibilityFunction('holders', !visibility.holders);
    const toggleNewsVisibility = () => setVisibilityFunction('news', !visibility.news);
    const toggleFocusVisibility = () => setVisibilityFunction('focus', !visibility.focus);
    const toggleChartVisibility = () => setVisibilityFunction('chart', !visibility.chart);
    const toggleHelpVisibility = () => setVisibilityFunction('help', !visibility.help);
    const toggleChatVisibility = () => setVisibilityFunction('chat', !visibility.chat);
    const toggleQuoteMonitorVisibility = () => setVisibilityFunction('quoteMonitor', !visibility.quoteMonitor);
    const toggleAccountManagementVisibility = () => setVisibilityFunction('accountManagement', !visibility.accountManagement);
    const toggleUserBiographyVisibility = () => setVisibilityFunction('userBiography', !visibility.userBiography);
    const toggleDescriptionVisibility = () => setVisibilityFunction('description', !visibility.description);
    const toggleFinancialsVisibility = () => setVisibilityFunction('financials', !visibility.financials);
    const toggleSettingsVisibility = () => setVisibilityFunction('settings', !visibility.settings);
    const toggleTimeAndSalesVisibility = () => setVisibilityFunction('timeAndSales', !visibility.timeAndSales);
    const toggleCompanyEventsVisibility = () => setVisibilityFunction('companyEvents', !visibility.companyEvents);
    const toggleOptionChainVisibility = () => setVisibilityFunction('optionChain', !visibility.optionChain);
    const toggleEquityScreenerVisibility = () => setVisibilityFunction('equityScreener', !visibility.equityScreener);
    const toggleInitialPublicOfferingsVisibility = () => setVisibilityFunction('initialPublicOfferings', !visibility.initialPublicOfferings);
    const toggleWordIndicesVisibility = () => setVisibilityFunction('wordIndices', !visibility.wordIndices);

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
    const searchValue = (e: any) => { setSearch(e.target.value) }

    const [openSetting, setOpenSettings] = useState(false);
    const [openFilings, setOpenFilings] = useState(false);
    const [openHolders, setOpenHolders] = useState(false);
    const [openNews, setOpenNews] = useState(false);
    const [openFocus, setOpenFocus] = useState(false);
    const [openChart, setOpenChart] = useState(false);
    const [openHelp, setOpenHelp] = useState(false);
    const [openChat, setOpenChat] = useState(false);
    const [openQuoteMonitor, setOpenQuoteMonitor] = useState(false);
    const [openAccountManagement, setOpenAccountManagement] = useState(false);
    const [openUserBiography, setOpenUserBiography] = useState(false);
    const [openDescription, setOpenDescription] = useState(false);
    const [openFinancials, setOpenFinancials] = useState(false);
    const [openTimeAndSales, setOpenTimeAndSales] = useState(false);
    const [openCompanyEvents, setOpenCompanyEvents] = useState(false);
    const [openOptionChain, setOpenOptionChain] = useState(false);
    const [openEquityScreener, setOpenEquityScreener] = useState(false);
    const [openInitialPublicOfferings, setOpenInitialPublicOfferings] = useState(false);
    const [openWordIndices, setOpenWordIndices] = useState(false);

    return (
        <div className="terminal">
            <div className="top-menu-row">

                <div className="right-side-search-bar" onClick={setSearchBarFunction}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="right" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                    </svg>
                    <div className="searchbar">
                        { !searchBar 
                            ? 
                            <span>Terminal</span> 
                            : 
                            <div className="search-bar-div">
                                <input onChange={searchValue} className="search-bar-input"></input>                          
                                <i></i>
                            </div>
                        }
                    </div>
                </div>

                <div className="middle-settings-options">
                    {visibility.filings && <button onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => setOpenFilings(true)}>
                        <div className="pin-commands">
                            <span>CF</span>
                        </div>
                    </button>}

                    {visibility.holders && <button onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => setOpenHolders(true)}>
                    <div className="pin-commands">
                            <span>HDS</span>
                        </div>
                    </button>}

                    {visibility.news && <button onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => setOpenNews(true)}>
                        <div className="pin-commands">
                            <span>N</span>
                        </div>
                    </button>}

                    {visibility.focus && <button onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => setOpenFocus(true)}>
                        <div className="pin-commands">
                            <span>FOCUS</span>
                        </div>
                    </button>}
                     
                    {visibility.chart && <button onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => setOpenChart(true)}>
                        <div className="pin-commands">
                            <span>C</span>
                        </div>
                    </button>}

                    {visibility.help && <button onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => setOpenHelp(true)}>
                        <div className="pin-commands">
                            <span>HELP</span>
                        </div>
                    </button>}

                    {visibility.chat && <button onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => setOpenChat(true)}>
                        <div className="pin-commands">
                            <span>CHAT</span>
                        </div>
                    </button>}
                    
                    {visibility.quoteMonitor && <button onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => setOpenQuoteMonitor(true)}>
                        <div className="pin-commands">
                            <span>QM</span>
                        </div>
                    </button>}

                    {visibility.accountManagement && <button onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => setOpenAccountManagement(true)}>
                        <div className="pin-commands">
                            <span>ACM</span>
                        </div>
                    </button>}

                    {visibility.userBiography && <button onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => setOpenUserBiography(true)}>
                        <div className="pin-commands">
                            <span>BIO</span>
                        </div>
                    </button>}

                    {visibility.description && <button onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => setOpenDescription(true)}>
                        <div className="pin-commands">
                            <span>DES</span>
                        </div>
                    </button>}

                    {/* {visibility.financials && <button onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => setOpenFinancials(true)}>
                        <div className="pin-commands">
                            <span>FA</span>
                        </div>
                    </button>} */}

                    <button onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => setOpenFinancials(true)}>
                        <div className="pin-commands">
                            <span>FA</span>
                        </div>
                    </button>

                    {visibility.settings && <button onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => setOpenSettings(true)}>
                        <div className="pin-commands">
                            <span>PDF</span>
                        </div>
                    </button>}

                    {visibility.timeAndSales && <button onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => setOpenTimeAndSales(true)}>
                        <div className="pin-commands">
                            <span>TAS</span>
                        </div>
                    </button>}

                    {visibility.companyEvents && <button onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => setOpenCompanyEvents(true)}>
                        <div className="pin-commands">
                            <span>EVT</span>
                        </div>
                    </button>}

                    {visibility.optionChain && <button onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => setOpenOptionChain(true)}>
                        <div className="pin-commands">
                            <span>OPT</span>
                        </div>
                    </button>}

                    {/* {visibility.equityScreener && <button onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => setOpenEquityScreener(true)}>
                        <div className="pin-commands">
                            <span>EQS</span>
                        </div>
                    </button>} */}
                    <button onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => setOpenEquityScreener(true)}>
                        <div className="pin-commands">
                            <span>EQS</span>
                        </div>
                    </button>


                    {/* {visibility.initialPublicOfferings && <button onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => setOpenInitialPublicOfferings(true)}>
                        <div className="pin-commands">
                            <span>IPO</span>
                        </div>
                    </button>} */}

                    <button onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => setOpenInitialPublicOfferings(true)}>
                        <div className="pin-commands">
                            <span>IPO</span>
                        </div>
                    </button>
                    
                    {/* {visibility.wordIndices && <button onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => setOpenWordIndices(true)}>
                        <div className="pin-commands">
                            <span>WI</span>
                        </div>
                    </button>}  */}

                    <button onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => setOpenWordIndices(true)}>
                        <div className="pin-commands">
                            <span>WI</span>
                        </div>
                    </button>

                    <button onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => setOpenSettings(true)}>
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
                {searchBar && 
                    <div className="search-bar">
                        <p>FINANCE STUFF</p>
                    </div>
                }

            {openSetting &&
                <Settings 
                    setOpenSettings={setOpenSettings}
                    toggleFilingsVisibility={toggleFilingsVisibility}
                    toggleHoldersVisibility={toggleHoldersVisibility } 
                    toggleNewsVisibility={toggleNewsVisibility }
                    toggleFocusVisibility={toggleFocusVisibility }
                    toggleChartVisibility={toggleChartVisibility}
                    toggleHelpVisibility={toggleHelpVisibility }
                    toggleChatVisibility={toggleChatVisibility }
                    toggleQuoteMonitorVisibility={toggleQuoteMonitorVisibility}
                    toggleAccountManagementVisibility={toggleAccountManagementVisibility }
                    toggleUserBiographyVisibility={toggleUserBiographyVisibility }
                    toggleDescriptionVisibility={toggleDescriptionVisibility}
                    toggleFinancialsVisibility={toggleFinancialsVisibility }
                    toggleSettingsVisibility={toggleSettingsVisibility }
                    toggleTimeAndSalesVisibility={toggleTimeAndSalesVisibility}
                    toggleCompanyEventsVisibility={toggleCompanyEventsVisibility} 
                    toggleOptionChainVisibility ={toggleOptionChainVisibility }
                    toggleEquityScreenerVisibility={toggleEquityScreenerVisibility }
                    toggleInitialPublicOfferingsVisibility={toggleInitialPublicOfferingsVisibility} 
                    toggleWordIndicesVisibility={toggleWordIndicesVisibility }
            />}   

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
            
            {openHelp && 
                <Help setOpenHelp={setOpenHelp} 
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
            
            {openTimeAndSales && 
                <TimeAndSales setOpenTimeAndSales={setOpenTimeAndSales} 
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
        </div>
    )
}

export default Terminal