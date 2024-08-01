import useDragger from "../DraggerComponent/dragger";
import { onAuthStateChanged } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../../../api";
import "./userbiography.css"

function UserBiography({setOpenUserBiography}: any) {
    
    useDragger("user-biography-box");
    const auth = getAuth();

    const userEmail = auth.currentUser?.email
    const [userName, setUserName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [company, setCompany] = useState('');

    const submitForm = (e: any) => {
        e.preventDefault();
        updateUser();
        setUserName('');
        setLastName('');
        setCompany('');
    };

    const updateUser = async () => {
        try {
            const response = await api.post("http://127.0.0.1:8000/api/v1/userbiography/postuserbio/", {
                params: { 
                    userEmail: userEmail,
                    userName: userName,
                    firstName: firstName,
                    lastName: lastName,
                    company: company,
                }
            });

            console.log(response.data);


        } catch (error) {
            console.log(error);
        }
    };
    
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setLoggedIn(!!user); // Convert auth state to boolean
        });

        return () => unsubscribe();
    }, [auth]);
    
    const closeOpenUserBiography = () => {
        setOpenUserBiography(false);
    };
    return(
        <div id="user-biography-box" className="box">
            <div className="top-settings-row">
            <div className="settings-text">
                <span>User Biography</span>
            </div>
            <div className="settings-right-side-buttons">
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="gear" viewBox="0 0 16 16">
                        <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0"/>
                        <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z"/>
                    </svg>
                </button>
                <button onClick={closeOpenUserBiography}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="x" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                    </svg>
                </button>
            </div>       
        </div>

        {!loggedIn ? 
            <div className="top-settings-row">
                <p>Loading...</p>
            </div>
        : 
            <div>
                <form id="bio-form">
                    <div className="bio-row">
                        <b><label>User Name: </label></b>
                        <input id="company" onChange={((e) => setUserName(e.target.value))}></input>
                    </div>
                    <div className="bio-row">
                        <b><label>First Name: </label></b>
                        <input id="company" onChange={((e) => setFirstName(e.target.value))}></input>
                    </div>
                    <div className="bio-row">
                        <b><label>Last Name: </label></b>
                        <input id="company" onChange={((e) => setLastName(e.target.value))}></input>
                    </div>
                    <div className="bio-row">
                        <b><label>Company: </label></b>
                        <input id="company" onChange={((e) => setCompany(e.target.value))}></input>
                    </div>
                    <div className="submit-row">
                        <Link to={"/signout"}>
                            <button id="log-out"><span>Log Out</span></button>
                        </Link>
                        <button id="next" onClick={submitForm}><span>Next</span></button>
                    </div>
                </form>
            </div>
        }
        
    </div>)
}

export default UserBiography