import React, { useState } from "react";
import useDragger from "../DraggerComponent/dragger";
import api from "../../../../api";
import "./news.css";
import "../CalenderComponents/calenderstart.css";
import "../CalenderComponents/calenderend.css";

function News({ setOpenNews }: any) {
    useDragger("news-box");

    const closeOpenNews = () => {
        setOpenNews(false);
    }

    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);
    const [newsData, setNewsData] = useState<any[]>([]);
    const [stockSymbol, setStockSymbol] = useState<string>('');
   
    /**
     * const fetchNews = async () =>: Is a synchronous function used to make
     * a GET request for the requested tickers news
     *  
     * @param params: { ticker: stockSymbol }: Send the stock symbol as 
     * a query parameter with the key 'ticker'
     * 
     * @notes If the API call is successful then, update the state of 
     * NewsData
     * 
     */
    const fetchNews = async () => {
        try {
            // Pause The Execution of The Function Until the Promise(Result of api.get) is resolved 
            const response = await api.get("http://127.0.0.1:8000/api/v1/news/getnews/", {
                params: { ticker: stockSymbol }
            });

            setNewsData(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    const submitNews = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        fetchNews();
    }

    const clearSearch = () => {setStockSymbol(" ")}

    return (
        <div id="news-box" className="news-box">
            <div className="top-settings-row">
                <div className="settings-text">
                    <span>News</span>
                </div>
                <div className="settings-right-side-buttons">
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="gear" viewBox="0 0 16 16">
                            <path d="..."/>
                        </svg>
                    </button>
                    <button onClick={closeOpenNews}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="x" viewBox="0 0 16 16">
                            <path d="..."/>
                        </svg>
                    </button>
                </div>
            </div>

            <div className="filings-text">
                <div className="filings-options">
                    <form onSubmit={submitNews}>
                        <input
                            placeholder="Company"
                            id="theme"
                            onChange={(e) => setStockSymbol(e.target.value)}>
                        </input>
                    </form>
                </div>

                <div className="filings-options">
                    <button onClick={clearSearch}>
                        <span>Clear</span>
                    </button>

                    <button>
                        <span>Pause</span>
                    </button>
                </div>
            </div>

            <div className="filing-table">
                <table>
                    <thead>
                        <tr>
                            <th>Headline</th>
                            <th>Publisher</th>
                            <th>Link</th>
                        </tr>
                    </thead>
                    <tbody>
                        {newsData.map((item, index) => (
                            <tr key={index}>
                                <td>{item.title}</td>
                                <td>{item.publisher}</td>
                                <td><a href={item.link} target="_blank" rel="noopener noreferrer">Read more</a></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

    </div>);
}

export default News;