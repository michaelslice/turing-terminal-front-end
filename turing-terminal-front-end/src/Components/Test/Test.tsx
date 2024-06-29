import React, { useState, useEffect } from 'react';
import api from "../../../api"
import "./test.css";

function Test() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get('http://127.0.0.1:8000/api/v1/test/');

                const response1 = await api.get('http://127.0.0.1:8000/api/v1/test/msft/');
                console.log(response1);

            // const response2 = await api.get('http://127.0.0.1:8000/test/msftholders/');
            // console.log(response2);

            // const response3 = await api.get('http://127.0.0.1:8000/test/msft/options/');
            // console.log(response3);

            // const response4 = await api.get('http://127.0.0.1:8000/test/msft/recommendations/');
            // console.log(response4);

            // const response5 = await api.get('http://127.0.0.1:8000/test/msft/actions/');
            // console.log(response5);

            // const response6 = await api.get('http://127.0.0.1:8000/test/msft/balance-sheet/');
            // console.log(response6);

            // const response7 = await api.get('http://127.0.0.1:8000/test/msft/income-statement/');
            // console.log(response7);

            // const response8 = await api.get('http://127.0.0.1:8000/test/msft/cash-flow/');
            // console.log(response8);

            //    setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="test">
            <div className='test-form'>
                <form method="POST">
                    <input placeholder='Ticker'></input>
                    <input placeholder='Price'></input>
                </form>
                <button>
                    <span>Send Data</span>
                </button>
            </div>
        </div>
    );
}

export default Test;
