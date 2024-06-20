// Location For Project Routes to be Defined
import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from "./Home";
import Terminal from './Components/Terminal/terminal';
import Navbar from './Components/NavigationBar/Navbar';
import Login from './Components/LoginPage/login';
import Pricing from './Components/PricingPage/Pricing'
import Roadmap from './Components/RoadmapPage/Roadmap';

function App() {
    return(
        <>
        <Navbar />

        <div className='container'>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/terminal" element={<Terminal />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/roadmap" element={<Roadmap />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </div>
        </>
    )
}

export default App // Expose App to Other Modules