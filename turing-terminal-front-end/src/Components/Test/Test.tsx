import React, { useState, useEffect } from 'react';
import api from "../../../api"
import "./test.css";

function Test() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get('http://localhost:8000/api/stocklist/');
                console.log("SUCCESS");
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="test">
            {data.map(item => (
                <div key={item}>
                    {item}
                </div>
            ))}
        </div>
    );
}

export default Test;
