// Location For Project Routes to be Defined
import { BrowserRouter, Routes, Router, Route, Link, Navigate } from 'react-router-dom';
import React from 'react';
import Home from "./Home";
import Terminal from './Components/Terminal/terminal';
import Navbar from './Components/NavigationBar/Navbar';
import Login from './Components/LoginPage/login';

function App() {
    return(
        <>
   
        <div className='container'>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/terminal" element={<Terminal />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </div>
        </>
    )
}

export default App // Expose App to Other Modules