import { useState, useEffect } from "react";
import useDragger from "../DraggerComponent/dragger";
import axios from "axios";
import api from "../../../../api";
import "./focus.css"
import { json } from "react-router-dom";

function Focus({setOpenFocus}: any) {
    
    useDragger("focus-box");
    
    const closeOpenFocus = () => { setOpenFocus(false); }

    /**
     *  
     * @param Callback function: Creates a resizeObserver to monitor 
     * changes in the focus-box, when the size changes update boxSize
     * 
     * @param Dependencies []: This hook will run  
     * 
     * @param callback function (entries) => {...}: Recieves an 
     * array of ResizeObserverEntry objects(entries). Each entry contains
     * info about the observed elements size changes
     * 
     * @notes ResizeObserver is a API that allows you to observe changes 
     * in the size of DOM elements
     * 
     * https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver
     * 
     */
    const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });
    
    useEffect(() => {
        const resizeObserver = new ResizeObserver((entries) => { 
            for(let entry of entries) {
                const { width, height} = entry.contentRect;
                setBoxSize({ width, height})
            }
        });
    
        const boxElement = document.getElementById('focus-box');
        resizeObserver.observe(boxElement as Element);

        // Clean up code, before component unmounts
        return() => {
            resizeObserver.unobserve(boxElement as Element);
        };
    }, []);

    const [stockSymbol, setStockSymbol] = useState('');
    const [stockData, setStockData] = useState({
        price: ' ',
        price_change: ' ',
        percent_change: ' ',
    });

    /**
     *  
     * @param 
     * 
     * @notes 
     * 
     */
    const fetchTicker = async () => {
        try {
            const response = await api.get("http://127.0.0.1:8000/api/v1/focus/ticker/", {
                params: { ticker : stockSymbol}
            })
            console.log(response.data)
            setStockData(response.data);
            
            setStockData({
                price: response.data.price,
                price_change : response.data.price_change,
                percent_change: response.data.percent_change,
            }) 
        }
        catch( e ) {
            console.log(e);
        }
    }

    const submitTicker = (e: any) => {
        e.preventDefault();
        fetchTicker();
    }

    return(
        <div id="focus-box" className="box">
            <div className="top-settings-row">
            
            <div className="settings-text">
                <span>Focus</span>
                
                <form onSubmit={submitTicker}>
                <input 
                    placeholder="Ticker"
                    type="text"
                    value={stockSymbol}
                    onChange={(e) => setStockSymbol(e.target.value)}
                    >
                </input>
                </form>
            </div>
            <div className="settings-right-side-buttons">
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="gear" viewBox="0 0 16 16">
                        <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0"/>
                        <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z"/>
                    </svg>
                </button>
                <button onClick={closeOpenFocus}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="x" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                    </svg>
                </button>
            </div>       
        </div>

        <div className="focus">       
            <div className="ticker">
                <h1 style={{ fontSize: `${boxSize.width / 10}px` }}>{stockSymbol.toUpperCase()}</h1>
            </div>

            <div className="ticker-data">
                <div className="data-row">
                    <span style={{ fontSize: `${boxSize.width / 10}px` }}>{JSON.stringify(stockData.price, null, 2)}</span>
                </div>
            <div>    
            
            {stockData &&  <div className="data-row">
                <span style={{ fontSize: `${boxSize.width / 10}px` }}>{JSON.stringify(stockData.price_change, null, 2)}</span>
                <span style={{ fontSize: `${boxSize.width / 10}px` }}>{JSON.stringify(stockData.percent_change, null, 2)}</span>
            </div>}
        </div>
        
        </div>        
    </div>
</div>)
}

export default Focus