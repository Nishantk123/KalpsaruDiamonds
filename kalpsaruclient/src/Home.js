import React, { useState } from 'react'
import backgroungImage from './Images/backGround-image.jpeg'
import './Home.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';

function Home() {
    const [loginEmail, serLoginEmail] = useState("")
    const [loginPass, serLoginPass] = useState("")
    const history = useHistory();
    const signinPage = () => {
        window.location.href = './SignUp'
    }
    const forgotPassword = () => {
        window.location.href = './ForgotPassword'
    }
    // const MainTainRecordsPage = () => {
    //     window.location.href = './MaintainRecords'
    // }
    const emailInputField = (e) => {
        serLoginEmail(e.target.value)
    }
    const passwordInputField = (e) => {
        serLoginPass(e.target.value)
    }
    const MainHomePage = () => {
        let loginCredential = {
            email: loginEmail,
            password: loginPass
        }
        fetch(`${process.env.REACT_APP_API}/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(loginCredential),
        })
            .then((response) => response.json())
            .then((response) => {
                console.log(response);
                window.localStorage.setItem("jwtToken", response.token)
                history.push('/dashboard')
                // window.location.href = './MainTainRecords'
            })
        // window.location.href = './MainTainRecords'

    }
    return (
        <div className="homePage">
            <div>
                {/* <img src={backgroungImage} className="imageSize" alt="" /> */}
            </div>
            <div className="dialogBox">
                <div className="welcomeMsg">
                    Welcome To Kalpsaru Diamonds
                </div>
                <div className="emailField">
                    <TextField
                        id="standard-password-input"
                        label="E-mail"
                        type="text"
                        variant="standard"
                        className="emailWidth"
                        onChange={emailInputField}
                    />
                </div>
                <div className="passwordField">
                    <TextField
                        id="standard-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        variant="standard"
                        className="emailWidth"
                        onChange={passwordInputField}
                    />
                </div>
                {/* <div className="forgotPass" onClick={forgotPassword}>Forgot password</div> */}
                <div className="loginButton">
                    <Button variant="outlined" onClick={MainHomePage} >Submit</Button>
                </div>
                <div className="signUp">New to kalpsaru?<span className="signUpText" onClick={signinPage}>Sign up</span></div>

            </div>
        </div>
    )
}
export default Home