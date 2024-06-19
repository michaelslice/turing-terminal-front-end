import './navbar.css'
import { BrowserRouter, Routes, Router, Route, Link } from 'react-router-dom';

function Navbar() {
    return(
        <div className='navbar'>
            <Link to={"/home"}>Home</Link>
            <Link to={"/terminal"}>Terminal</Link>
            <Link to={"/login"}>Login</Link>   
        </div>   
    )
}

export default Navbar