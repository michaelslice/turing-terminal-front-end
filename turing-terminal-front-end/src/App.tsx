// Location For Project Routes to be Defined
import { Routes, Route } from 'react-router-dom';
import Home from "./Home";
import Terminal from './Components/Terminal/terminal';
import Login from './Components/LoginPage/login';
import Pricing from './Components/PricingPage/Pricing'
import Roadmap from './Components/RoadmapPage/Roadmap';
import Signout from './Components/SignOutPage/Signout';

function App() {
    return(
        <>
        <div className='container'>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/terminal" element={<Terminal />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/roadmap" element={<Roadmap />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signout" element={<Signout />} />
            </Routes>
        </div>
        </>
    )
}

export default App // Expose App to Other Modules