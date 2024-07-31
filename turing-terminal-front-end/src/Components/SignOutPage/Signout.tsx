import { useNavigate } from 'react-router-dom';
import { getAuth, signOut } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import './signout.css'

function Signout() {
    const navigate = useNavigate();
    
    function handleSignOut() {
        const auth = getAuth();
        signOut(auth).then(() => {    
            navigate('/home');     
        }).catch((error) => {
            console.log(error);
        });
    }    
    return(
        <div className='Signout'>  
        <div className='background'></div>
            <div className='logout-container'>
                <h1>Signout</h1>
                <p>Are you sure you want to sign out?</p>
                <button className='logout-button' onClick={handleSignOut}>Logout</button>
            </div>
        </div>
    )
}

export default Signout;