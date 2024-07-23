import React, { useState } from "react";
import useDragger from "../DraggerComponent/dragger";
import CalenderFirstDisplay from "../CalenderComponents/calenderstart";
import CalenderEndDisplay from "../CalenderComponents/calenderend";
import api from "../../../../api";
import "./filings.css"
import "../CalenderComponents/calenderstart.css"
import "../CalenderComponents/calenderend.css"

interface Filing {
    ticker: string;
    formType: string;
    linkToFilingDetails: string
    description: string;
    filedAt: string;
    periodOfReport: string | null;
}

function Filings({setOpenFilings}: any) {
    

    const closeOpenFilings = () => {
        console.log("close filings")
        setOpenFilings(false);
    }

    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    const setFirstDateFunction = (e: any) => { setStartDate(e) }
    const setEndDateFunction = (e: any) => { setEndDate(e) }

    const handleStartDateChange = (event: any) => {
        setStartDate(event.target.valueAsDate); 
    };

    const handleEndDateChange = (event: any ) => {
        setEndDate(event.target.valueAsDate); 
    };
   
    const [newStock, setNewStock] = useState<string>("");

    const [filings, setFilings] = useState<any>([]);

    const getFilings = async () => {
        try {
            const response = await api.get("http://127.0.0.1:8000/api/v1/filings/getfilings/", {
                params: { ticker: newStock }
            });
    
            const data = response.data;
            const dataArray = data.map((item: Filing) => ({
                ticker: item.ticker,
                formType: item.formType,
                linkToFilingDetails: item.linkToFilingDetails,
                description: item.description,
                filedAt: item.filedAt,
                periodOfReport: item.periodOfReport,
            }));

            setFilings(dataArray);

        } catch (error) {
            console.log(error);
        }
    }

    useDragger("filings-box");
    return(

        <div id="filings-box" className="filing-box">
            <div className="top-settings-row">
            
            <div className="settings-text">
                <span>Filings</span>
            </div>
            <div className="settings-right-side-buttons">
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="gear" viewBox="0 0 16 16">
                        <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0"/>
                        <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z"/>
                    </svg>
                </button>
                <button onClick={closeOpenFilings}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="x" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                    </svg>
                </button>
            </div>       
        </div>

        <div className="filings-text">            
            <div className="filings-options">
                <input onChange={(e) => setNewStock(e.target.value)} placeholder="Company" id="company"></input>
                <button onClick={getFilings} ></button>
            </div>
            
            <div className="time-frame-options">
                <input 
                    placeholder="Start date" 
                    value={ startDate ? (startDate as any)?.toISOString().substr(0, 10): ''} 
                    onChange={handleStartDateChange}>
                </input>
            
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="arrow" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                </svg>
                
                <input 
                    placeholder="End date" 
                    value={endDate ? (endDate as any)?.toISOString().substr(0, 10) : ''} 
                    onChange={handleEndDateChange}>
                </input>
            </div>

            <div className="filings-options"> 
                <button onClick={(e: React.MouseEvent<HTMLButtonElement | MouseEvent>) => {setStartDate(null); setEndDate(null)}}>
                    <span>Clear</span>
                </button>
       
                <button>
                    <span>Pause</span>
                </button>
            </div>        
        </div>

        <div className="calender-section">
            {startDate == null && 
                <CalenderFirstDisplay 
                onDateChange={setFirstDateFunction}/>
            }
            {endDate == null &&
                <CalenderEndDisplay 
                onDateChange={setEndDateFunction}/>
            }
        </div>

        <div className="filing-table">
            <table>
                <thead>
                    <th>Ticker</th>
                    <th>Type</th>
                    <th>Description</th>
                    <th>Time</th>
                    <th>Date</th>
                </thead>
                <tbody>
                    {filings.map((item: any, index: any) => (
                        <tr key={index}>
                            <td>{item.ticker}</td>
                            <a href={item.linkToFilingDetails}><td>{item.formType}</td></a>
                            <td>{item.description}</td>
                            <td>{item.filedAt}</td>
                            <td>{item.periodOfReport}</td>
                        </tr>
                    ))}
                </tbody>
            </table>    
            
        </div>

    </div>)
}

export default Filings