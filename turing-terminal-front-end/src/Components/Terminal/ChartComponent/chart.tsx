import "./chart.css"


import useDragger from "../DraggerComponent/dragger";
import { useSearchParams } from "react-router-dom";
import React, { useState } from "react";


function Chart({setOpenChart}: any) {
    
    useDragger("chart-box");
    
    const closeOpenChart = () => {
        console.log("close chart")
        setOpenChart(false);
    }
    
    
    const [openCandle, closeCandle] = useState(false);
    const [candle, setCandle] = useState('');

    const [period, setPeriod] = useState('');
    const [openPeriod, closePeriod] = useState(false);

    return(
        <div id="chart-box" className="box">
            <div className="top-chart-row">
            
            <div className="chart-text">
                <span>Chart</span>
                <input placeholder="Ticker"></input>
            </div>
            <div className="chart-right-side-buttons">
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="gear" viewBox="0 0 16 16">
                        <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0"/>
                        <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z"/>
                    </svg>
                </button>
                <button onClick={closeOpenChart}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="x" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                    </svg>
                </button>
            </div>       
        </div>

        <div className="top-chart-row-input">
        
            <div>
                <button onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => closeCandle(true)}>
                    <span>Candles: </span>
                    <span>{candle}</span>
                </button>

                {openCandle && <div className="candle-options">
                    <button onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {setCandle("1m"), closeCandle(false)}}>1 minute</button>
                    <button onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {setCandle("5m"), closeCandle(false)}}>5 minutes</button>
                    <button onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {setCandle("15m"), closeCandle(false)}}>15 minutes</button>
                    <button onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {setCandle("30m"), closeCandle(false)}}>30 minutes</button>
                    <button onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {setCandle("60m"),  closeCandle(false)}}>1 hour</button>
                    <button onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {setCandle("1d"),  closeCandle(false)}}>1 day</button>
                </div>}
            </div>

            <div>
                <span>Price</span>
            </div>

            <div>
                <span>Percent</span>
            </div>

            <div>
                <button onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => closePeriod(true)}>
                    <span>Period: </span>
                    <span>{period}</span>
                </button>
                
                {openPeriod && <div className="period-options">
                    <button onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {setPeriod("1D"), closePeriod(false)}}>1D</button>
                    <button onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {setPeriod("5D"), closePeriod(false)}}>5D</button>
                    <button onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {setPeriod("1M"), closePeriod(false)}}>1M</button>
                    <button onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {setPeriod("3M"), closePeriod(false)}}>3M</button>
                    <button onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {setPeriod("6M"), closePeriod(false)}}>6M</button>
                    <button onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {setPeriod("YTD"), closePeriod(false)}}>YTD</button>
                    <button onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {setPeriod("1YR"), closePeriod(false)}}>1YR</button>
                    <button onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {setPeriod("5YR"), closePeriod(false)}}>5YR</button>
                    <button onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {setPeriod("All"), closePeriod(false)}}>All</button>
                </div>}
            </div>
        </div>
    </div>);
}

export default Chart




