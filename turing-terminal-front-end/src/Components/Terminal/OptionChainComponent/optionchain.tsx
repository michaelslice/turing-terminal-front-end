import { useState } from "react";
import useDragger from "../DraggerComponent/dragger";
import api from "../../../../api";
import "./optionchain.css"

interface OptionContract {
    contractID: string;
    symbol: string;
    expiration: string; 
    strike: number;
    type: "call" | "put"; 
    last: number;
    mark: number;
    bid: number;
    bid_size: number;
    ask: number;
    ask_size: number;
    volume: number;
    open_interest: number;
    date: string; 
    implied_volatility: number;
    delta: number;
    gamma: number;
    theta: number;
    vega: number;
    rho: number;
}
  
function OptionsChain({setOpenOptionChain}: any) {
    
    useDragger("options-box");
    
    const closeOpenOptionsChain = () => {
        console.log("close settings")
        setOpenOptionChain(false);
    }

    const [display, setDisplay] = useState<any>()
    
    const renderDisplay = (event: React.MouseEvent) => {
        switch(event.currentTarget.id) {
            case "callsandputs":
                getOptionsChain()    
                return setDisplay("callsandputs");
            case "calls":
                getCallOptions()
                return setDisplay("calls");
            case "puts":
                getPutOptions()
                return setDisplay("puts");
        }
    }

    const [ticker, setTicker] = useState('');
    const [optionChain, setOptionChain] = useState<any[]>([])
    const [callOptions, setCallOptions] = useState<any[]>([])
    const [putOptions, setPutOptions] = useState<any[]>([])

    const getOptionsChain =  async () => {
        try {
            const response = await api.get("http://127.0.0.1:8000/api/v1/optionchain/getoptionchain/", {
                params: { ticker: ticker }
            });
            const data = response.data;
            const dataArray = data.map((item: OptionContract) =>({
                contractID: item.contractID,
                symbol: item.symbol,
                expiration: item.expiration,
                strike: item.strike,
                type: item.type,
                last: item.last,
                mark: item.mark,
                bid: item.bid,
                bid_size: item.bid_size,
                ask: item.ask,
                ask_size: item.ask_size,
                volume: item.volume,
                open_interest: item.open_interest,
                date: item.date,
                implied_volatility: item.implied_volatility,
                delta: item.delta,
                gamma: item.gamma,
                theta: item.theta,
                vega: item.vega,
                rho: item.rho,
            }));
         
            setOptionChain(dataArray)

        } catch (error) {
            console.log(error)
        }
    } 

    const getCallOptions =  async () => {
        try {
            const response = await api.get("http://127.0.0.1:8000/api/v1/optionchain/getcalls/", {
                params: { ticker: ticker }
            });
            const data = response.data;
            const dataArray = data.map((item: OptionContract) =>({
                contractID: item.contractID,
                symbol: item.symbol,
                expiration: item.expiration,
                strike: item.strike,
                type: item.type,
                last: item.last,
                mark: item.mark,
                bid: item.bid,
                bid_size: item.bid_size,
                ask: item.ask,
                ask_size: item.ask_size,
                volume: item.volume,
                open_interest: item.open_interest,
                date: item.date,
                implied_volatility: item.implied_volatility,
                delta: item.delta,
                gamma: item.gamma,
                theta: item.theta,
                vega: item.vega,
                rho: item.rho,
            }));

            setCallOptions(dataArray)

        } catch (error) {
            console.log(error)
        }
    } 

    const getPutOptions =  async () => {
        try {
            const response = await api.get("http://127.0.0.1:8000/api/v1/optionchain/getputs/", {
                params: { ticker: ticker }
            });
            const data = response.data;
            const dataArray = data.map((item: OptionContract) =>({
                contractID: item.contractID,
                symbol: item.symbol,
                expiration: item.expiration,
                strike: item.strike,
                type: item.type,
                last: item.last,
                mark: item.mark,
                bid: item.bid,
                bid_size: item.bid_size,
                ask: item.ask,
                ask_size: item.ask_size,
                volume: item.volume,
                open_interest: item.open_interest,
                date: item.date,
                implied_volatility: item.implied_volatility,
                delta: item.delta,
                gamma: item.gamma,
                theta: item.theta,
                vega: item.vega,
                rho: item.rho,
            }));
            console.log(dataArray)
            setPutOptions(dataArray)

        } catch (error) {
            console.log(error)
        }
    } 

    return(
        <div id="options-box" className="box">
            <div className="top-settings-row">
            
            <div className="settings-text">
                <span>Option Chain</span>
                <input onChange={(e) => setTicker(e.target.value)} placeholder="Ticker"></input>
            </div>
            <div className="settings-right-side-buttons">
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="gear" viewBox="0 0 16 16">
                        <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0"/>
                        <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z"/>
                    </svg>
                </button>
                <button onClick={closeOpenOptionsChain}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="x" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                    </svg>
                </button>
            </div>       
        </div>

        <div className="top-settings-row"> 
            <button onClick={renderDisplay} id="callsandputs">
                <span>Calls/Puts</span>
            </button>

            <button onClick={renderDisplay} id="calls">
                <span>Calls</span>
            </button>

            <button onClick={renderDisplay} id="puts">
                <span>Puts</span>
            </button>
        </div>


        {display === "callsandputs" && 
            <div className="filing-table">
                <table>
                    <thead>
                        <tr>
                            <th>Strike</th>
                            <th>Ticker</th>
                            <th>Bid</th>
                            <th>Ask</th>
                            <th>Last</th>
                            <th>Vol</th>
                            <th>IV</th>
                            <th>Delta</th>
                            <th>Theta</th>
                            <th>Vega</th>
                            <th>Rho</th>
                        </tr>
                    </thead>
                    <tbody>
                        {optionChain.map((item, index) => (
                            <tr key={index}>
                            <td >{item.strike}</td>
                            <td >{item.symbol}</td>
                            <td >{item.bid}</td>
                            <td >{item.ask}</td>
                            <td >{item.last}</td>
                            <td >{item.volume}</td>
                            <td >{item.implied_volatility}</td>
                            <td >{item.delta}</td>
                            <td >{item.theta}</td>
                            <td >{item.vega}</td>
                            <td >{item.rho}</td>
                            </tr>
                        ))}
                 </tbody>
            </table> 
        </div>}


        {display === "calls" && 
            <div className="filing-table">
                <table>
                    <thead>
                        <tr>
                            <th>Strike</th>
                            <th>Ticker</th>
                            <th>Bid</th>
                            <th>Ask</th>
                            <th>Last</th>
                            <th>Vol</th>
                            <th>IV</th>
                            <th>Delta</th>
                            <th>Theta</th>
                            <th>Vega</th>
                            <th>Rho</th>
                        </tr>
                    </thead>
                    <tbody>
                        {callOptions.map((item, index) => (
                            <tr key={index}>
                            <td >{item.strike}</td>
                            <td >{item.symbol}</td>
                            <td >{item.bid}</td>
                            <td >{item.ask}</td>
                            <td >{item.last}</td>
                            <td >{item.volume}</td>
                            <td >{item.implied_volatility}</td>
                            <td >{item.delta}</td>
                            <td >{item.theta}</td>
                            <td >{item.vega}</td>
                            <td >{item.rho}</td>
                            </tr>
                        ))}
                 </tbody>
            </table> 
        </div>}

        {display === "puts" && 
            <div className="filing-table">
                <table>
                    <thead>
                        <tr>
                            <th>Strike</th>
                            <th>Ticker</th>
                            <th>Bid</th>
                            <th>Ask</th>
                            <th>Last</th>
                            <th>Vol</th>
                            <th>IV</th>
                            <th>Delta</th>
                            <th>Theta</th>
                            <th>Vega</th>
                            <th>Rho</th>
                        </tr>
                    </thead>
                    <tbody>
                        {putOptions.map((item, index) => (
                            <tr key={index}>
                            <td >{item.strike}</td>
                            <td >{item.symbol}</td>
                            <td >{item.bid}</td>
                            <td >{item.ask}</td>
                            <td >{item.last}</td>
                            <td >{item.volume}</td>
                            <td >{item.implied_volatility}</td>
                            <td >{item.delta}</td>
                            <td >{item.theta}</td>
                            <td >{item.vega}</td>
                            <td >{item.rho}</td>
                            </tr>
                        ))}
                 </tbody>
            </table> 
        </div>}

    </div>)
}

export default OptionsChain