import './navbar.css'
import { Link } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState } from 'react';

function Navbar() {
    
    const [userConsent, setUserConsent] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);
    const auth = getAuth();
    
    
    onAuthStateChanged(auth, (user) => {
      if (user) 
      {
        setLoggedIn(true);
      } 
      else 
      {
        setLoggedIn(false);
      }
    });

    return(
        <div className='navbar'>    
            <div className='left-side-links'>
            <a>Turing Terminal</a>
                <Link to={"/home"} className='home-button'>Home</Link>
                <Link to={"/pricing"} className='pricing-button'>Pricing</Link>
                <Link to={"/roadmap"} className='roadmap-button'>Roadmap</Link>
            </div>
            <div className='right-side-links'>    
                <div className='login-button'>
                    {!loggedIn && <Link to={"/login"} className="text">LOGIN</Link>}
                    {loggedIn && <Link to={"/signout"} className="text">LOGGED IN</Link>}   
                </div>
                
                <div className='terminal-button'>
                    <Link to={"/terminal"} className='terminal-text'>Launch Terminal</Link>   
                </div>
            </div>
        </div>   
    )
}

export default Navbar