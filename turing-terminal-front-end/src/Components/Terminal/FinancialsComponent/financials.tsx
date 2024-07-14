import { useState } from "react";
import useDragger from "../DraggerComponent/dragger";
import "./financials.css"

function Financials({setOpenFinancials}: any) {
    
    useDragger("financials-box");
    
    const closeOpenFinancials = () => {
        console.log("close settings")
        setOpenFinancials(false);
    }

    const [display, setDisplay] = useState<any>()
    const renderDisplay = (event: React.MouseEvent) => {

        switch(event.currentTarget.id) {
            case "balanceSheet":
                return setDisplay("balanceSheet");
            case "incomeStatement":
                return setDisplay("incomeStatement");
            case "cashFlow":
                return setDisplay("cashFlow");
            case "quarterly":
                return setDisplay("quarterly");
            case "yearly":
                return setDisplay("yearly");
        }
    }
    
    return(
        <div id="financials-box" className="box">
            <div className="top-settings-row">
            
            <div className="settings-text">
                <span>Financials</span>
                <input placeholder="Ticker"></input>
            </div>
            <div className="settings-right-side-buttons">
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="gear" viewBox="0 0 16 16">
                        <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0"/>
                        <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z"/>
                    </svg>
                </button>
                <button onClick={closeOpenFinancials}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="x" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                    </svg>
                </button>
            </div>       
        </div>

        <div className="top-settings-row"> 
            <button onClick={renderDisplay} id="balanceSheet">
                <span>Balance Sheet</span>
            </button>

            <button onClick={renderDisplay} id="incomeStatement">
                <span>Income</span>
            </button>

            <button onClick={renderDisplay} id="cashFlow">
                <span>Cash Flow</span>
            </button>

            <button onClick={renderDisplay} id="quarterly">
                <span>Quarterly</span>
            </button>

            <button onClick={renderDisplay} id="yearly">
                <span>Yearly</span>
            </button>

            <button>
                <span>In Millions</span>
            </button>

            <button>
                <span>Fiscal Years</span>
            </button>
        </div>

        {display === "balanceSheet" && 
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Q1 2009</th>
                        <th>Q3 2009</th>
                        <th>Q2 2010</th>
                        <th>Q3 2010</th>
                        <th>Q1 2011</th>
                        <th>Q2 2011</th>
                        <th>Q3 2011</th>
                        <th>Q1 2012</th>
                        <th>Q2 2012</th>
                        <th>Q3 2012</th>
                        <th>Q1 2013</th>
                        <th>Q2 2013</th>
                        <th>Q3 2013</th>
                        <th>Q1 2014</th>
                        <th>Q2 2014</th>
                        <th>Q3 2014</th>
                        <th>Q1 2015</th>
                        <th>Q2 2015</th>
                        <th>Q3 2015</th>
                        <th>Q1 2016</th>
                        <th>Q2 2016</th>
                        <th>Q3 2016</th>
                        <th>Q1 2017</th>
                        <th>Q2 2017</th>
                        <th>Q3 2017</th>
                        <th>Q1 2018</th>
                        <th>Q2 2018</th>
                        <th>Q3 2018</th>
                        <th>Q1 2019</th>
                        <th>Q2 2019</th>
                        <th>Q3 2019</th>
                        <th>Q1 2020</th>
                        <th>Q2 2020</th>
                        <th>Q3 2020</th>
                        <th>Q1 2021</th>
                        <th>Q2 2021</th>
                        <th>Q3 2021</th>
                        <th>Q1 2022</th>
                        <th>Q2 2022</th>
                        <th>Q3 2022</th>
                        <th>Q1 2023</th>
                        <th>Q2 2023</th>
                        <th>Q3 2023</th>
                        <th>Q1 2024</th>
                    </tr>
                </thead>
            <tbody>
                <tr>
                    <td>Total Assets</td>
                    <td>Data Placeholder</td>
                    <td>Data Placeholder</td>
                    <td>Data Placeholder</td>
                    <td>Data Placeholder</td>
                    <td>Data Placeholder</td>
                    <td>Data Placeholder</td>
                    <td>Data Placeholder</td>
                    <td>Data Placeholder</td>
                    <td>Data Placeholder</td>
                    <td>Data Placeholder</td>
                    <td>Data Placeholder</td>
                    <td>Data Placeholder</td>
                    <td>Data Placeholder</td>
                    <td>Data Placeholder</td>
                    <td>Data Placeholder</td>
                    <td>Data Placeholder</td>
                    <td>Data Placeholder</td>
                    <td>Data Placeholder</td>
                    <td>Data Placeholder</td>
                    <td>Data Placeholder</td>
                    <td>Data Placeholder</td>
                    <td>Data Placeholder</td>
                    <td>Data Placeholder</td>
                    <td>Data Placeholder</td>
                    <td>Data Placeholder</td>
                    <td>Data Placeholder</td>
                    <td>Data Placeholder</td>
                    <td>Data Placeholder</td>
                    <td>Data Placeholder</td>
                    <td>Data Placeholder</td>
                    <td>Data Placeholder</td>
                    <td>Data Placeholder</td>
                    <td>Data Placeholder</td>
                    <td>Data Placeholder</td>
                    <td>Data Placeholder</td>
                    <td>Data Placeholder</td>
                    <td>Data Placeholder</td>
                    <td>Data Placeholder</td>
                    <td>Data Placeholder</td>
                </tr>
            <tr>
            <td>Data Placeholder</td>

        </tr>
    </tbody>
            </table>
        }

    </div>)
}

export default Financials