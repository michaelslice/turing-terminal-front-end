import { useState } from "react";
import useDragger from "../DraggerComponent/dragger";
import "./quotemonitor.css"

import "../FilingsComponent/filings.css"


function QuoteMonitor({setOpenQuoteMonitor}: any) {
    
    useDragger("quote-monitor-box");
    
    const closeOpenQuoteMonitor = () => {
        console.log("close settings")
        setOpenQuoteMonitor(false);
    }

    const [stocks, setStocks] = useState<string[]>([]);
    const [newStock, setNewStock] = useState<string>("");

    /**
     * 
     * 
     * 
     */
    const addStock = (e: any) => {
        if(e.key === 'Enter' && newStock.trim() !== '') {
            setStocks([...stocks, newStock.trim()]);
            setNewStock('');
        }
    };

    return(
        <div id="quote-monitor-box" className="box">
            <div className="top-settings-row">
            
            <div className="settings-text">
                <span>Quote Monitor</span>
            </div>
            <div className="settings-right-side-buttons">
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="gear" viewBox="0 0 16 16">
                        <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0"/>
                        <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z"/>
                    </svg>
                </button>
                <button onClick={closeOpenQuoteMonitor}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="x" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                    </svg>
                </button>
            </div>       
        </div>

        <div className="filing-table">
            <table>
                <thead>
                    <tr>
                        <th>Ticker</th>
                        <th>Last</th>
                        <th>Bid</th>
                        <th>Ask</th>
                        <th>Change</th>
                        <th>Change %</th>
                        <th>Volume</th>
                    </tr>
                </thead> 
            <tbody>
                {stocks.map((stock, index) => (
                    <tr key={index}>
                        <td>{stock}</td>
                        <td>Placeholder</td>
                        <td>Placeholder</td>
                        <td>Placeholder</td>
                        <td>Placeholder</td>
                        <td>Placeholder</td>
                        <td>Placeholder</td>
                    </tr>
                ))}
            </tbody>
        </table>    

        <div className="filing-row1">
            <input
                placeholder="Add a ticker"
                value={newStock}
                onChange={(e) => setNewStock(e.target.value)}
                onKeyDown={addStock}
            />
        </div>
        </div>
    </div>)
}

export default QuoteMonitor