
import "./login.css"
import Navbar from "../NavigationBar/Navbar"
import { initializeApp } from "firebase/app";
import { useState } from "react";
import { Navigate, Link, useNavigate } from "react-router-dom";
import { 
    signInWithPopup, 
    getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    sendPasswordResetEmail, 
    GoogleAuthProvider,
    GithubAuthProvider   
} from "firebase/auth";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_APIKEY,
    authDomain: import.meta.env.VITE_AUTHDOMAIN,
    projectId: import.meta.env.VITE_PROJECTID,
    storageBucket: import.meta.env.VITE_STORAGEBUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
    appId: import.meta.env.VITE_APPID
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();

function Login() {

    const navigate = useNavigate();
    // const navigate = useNavigate(); // Get the navigate function
    const [emailAlertFail, setEmailAlertFail] = useState(false);
    const [invalidEmail, setInvalidEmail] = useState(false);
    const [openResetDisplay, setOpenResetDisplay] = useState(false);
    const [invalidLogin, setInvalidLogin] = useState('');
    const [attemptedSignup, setAttemptedSignup] = useState(false);
    const [loginMenuStatus, setloginMenuStatus] = useState(false);
    const setLoginStatusDisplayTrue = () => setloginMenuStatus(true);    
    const setLoginStatusDisplayFalse = () => setloginMenuStatus(false);
    const [loginStatus, setLoginStatus] = useState(false);
    const [resetPasswordStatus, setresetPasswordStatus] = useState(false);
    const setresetPasswordStatusTrue = () => setresetPasswordStatus(true);
    const setresetPasswordStatusFalse = () => setresetPasswordStatus(false);
    const [passwordStatus, setPasswordStatus] = useState(false);
    const [userCredentials, setUserCredentials] = useState({email: '', password: '', passwordConfirm: ''});
    const isInvalidEmail = (email: string) => {  return !email.includes('@') || email.trim() === '@' || email.indexOf('@') === 0 || email.lastIndexOf('@') === email.length - 1 || email.split('@')[1].length === 0;}
    function handleCredentials(event: any) {
    const { name, value } = event.target;
    
    // Removes error if user attempts to type again
    setPasswordStatus(false);
    setInvalidLogin('');
    
    setUserCredentials(prevState => ({
        ...prevState,
        [name]: value
        }));
    }

    function handleSignup(e: any) {
        e.preventDefault();
        // Check if the email is invalid
        if (isInvalidEmail(userCredentials.email)) 
        {
            setAttemptedSignup(true)
            return; 
        }
        if(userCredentials.password !== userCredentials.passwordConfirm)
        {
            setPasswordStatus(true);
            return;
        }
        createUserWithEmailAndPassword(auth, userCredentials.email, userCredentials.password)
        .then((userCredential) => {
        const user = userCredential.user;
        console.log(user)
        // navigate('/home');
        setUserCredentials(prevState => ({
            ...prevState,
            email: ''
        }));
    })
        .catch((error) => {
        setInvalidLogin(error.message);
        });
    }

    function googleLogin(e: any)
    {
        e.preventDefault();
        
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            const user = result.user;
            console.log(user)
            navigate('/terminal');
        }).catch((error) => {
            setInvalidLogin(error.message);
        });
    }

    function gitHubLogin(e: any) {
        e.preventDefault();
        
        signInWithPopup(auth, gitHubProvider)
        .then((result) => {
            const user = result.user;
            console.log(user)
           // navigate('/navigation');
        }).catch((error) => {
            setInvalidLogin(error.message);
           
        });
    }

    // Handle user log in if account is valid
    function handleLogin(e: any) {
        e.preventDefault();
        signInWithEmailAndPassword(auth, userCredentials.email, userCredentials.password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user)
          navigate('/terminal');
        })
        .catch((error) => {
            setInvalidLogin(error.message);
        });
    }

    const [emailReset, setEmailReset] = useState('');

    function handlePasswordReset() {
        // Assuming emailReset contains the correct email address
        sendPasswordResetEmail(auth, emailReset)
        .then(() => {
            setInvalidEmail(true);
        })
        .catch((error) => {
            setOpenResetDisplay(true);
            setInvalidLogin(error.message);
            setEmailAlertFail(true)
        })
    }

    return ( <div className="Login">
        <div className="large-space">
        </div>

        {!resetPasswordStatus && <div className="background1">
          <div className='login-display'>
                
               {!loginMenuStatus && <button className='login-button-menu' title='login' onClick={setLoginStatusDisplayTrue}>
                    <p>LOGIN</p>
                </button>}
    
                {loginMenuStatus && <button className='create-account-button' title='login' onClick={setLoginStatusDisplayFalse}>
                    <p>CREATE ACCOUNT</p>
                
                </button>} 
            </div>
        <div className='google-login'>
            <button className='login-google-button' title='login' onClick={googleLogin}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="google-logo" viewBox="0 0 16 16">
                <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z"/>
            </svg>        
                <p>{loginMenuStatus ? 'LOGIN WITH GOOGLE' : 'SIGNUP WITH GOOGLE'}</p>        
            </button>
        </div>
        <div className='or-display'>
            <p>or</p>
        </div>
        
        <div className="email-container" >
            <div className="email-box" >
                <input title="Please fill out this field." name="email" onChange={handleCredentials} value={userCredentials.email} ></input> 
                <span>EMAIL *</span >
            </div>
    
            <div className="password-box">
                <input type="password" title="Please fill out this field." name="password" onChange={handleCredentials} value={userCredentials.password}/> 
                <span>PASSWORD *</span>
            </div>
       
            {!loginMenuStatus && <div className="password-confirm-box" >
                <input type="password" title="Please fill out this field." name="passwordConfirm" onChange={handleCredentials} value={userCredentials.passwordConfirm}/> 
                <span>CONFIRM PASSWORD *</span>
        </div>}
       
        <div className='login-button-menu'>
            <button className='login-account-button' title='login' onClick={loginMenuStatus ? handleLogin : handleSignup}> {/*  onClick={(e)=>{checkPassword(); if(!passwordStatus) { loginMenuStatus ? handleLogin : handleSignup(e)}}} */}
            {loginMenuStatus ? 'LOGIN' : 'SIGN UP'}
            </button>
        </div>
    
        {passwordStatus && <div className='password-must-match'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="exclamation-point" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z"/>
            </svg>
            <p>Your password must match.</p>
        </div>}
    
        {invalidLogin && <div className='invalid-password'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="exclamation-point-invalid" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z"/>
            </svg>
            <p>{invalidLogin}</p>
        </div>}
    
        <div className='forget-password' onClick={setresetPasswordStatusTrue}>
            <p>FORGOT YOUR PASSWORD?</p>
        </div>
        </div>
    </div>} {/* Closing Bracket for resetPasswordStatus logic */}
    
    
    {/* Logic for the reset password section*/}
    
        {resetPasswordStatus && 
        <div className="background1">        
            <div className='reset-password-section'>
                <h1>Reset Password</h1>   
              
                 {!invalidEmail &&  <div className="email-box">
                    <input title="Please fill out this field." type="text" name='resetEmail' value={emailReset} onChange={(e) => setEmailReset(e.target.value)}></input>                 
                    <span>EMAIL *</span>
                    <div className='login-button-menu' onClick={handlePasswordReset}>
                        <button className='password-reset-button' title='login'>
                            SEND PASSWORD RESET LINK
                        </button>
                       </div>
                    {openResetDisplay && <div className='invalid-email-reset'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="exclamation-point-invalid" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                        <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z"/>
                    </svg>
                        <p>We could not find an account with that email. Try another email, or create a new account.</p>
                    </div>}
                    
                    <div className='back-to-login' onClick={setresetPasswordStatusFalse}>    
                    <p>BACK TO LOGIN</p>
                </div>
            </div>}
    
           {invalidEmail && <div className='reset-password-message'>
                <p>An email has been sent to your registered email address. 
                Please check your inbox (and your spam folder, just in case) 
                and follow the instructions provided in the email to reset your password.                
                </p>
                <div className='back-to-login-reset' onClick={setresetPasswordStatusFalse}>    
                <p>BACK TO LOGIN</p>
            </div>
        </div>}
        </div>
    </div>}
    <div className="large-space">
    </div>
</div>
)};

export default Login