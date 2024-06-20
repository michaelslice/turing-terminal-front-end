import './navbar.css'
import { Link } from 'react-router-dom';

function Navbar() {
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
                    <Link to={"/login"} className='login-text'>Log in</Link>   
                </div>
                
                <div className='terminal-button'>
                    <Link to={"/terminal"} className='terminal-text'>Launch Terminal</Link>   
                </div>
            </div>
        </div>   
    )
}

export default Navbar