import React from 'react'
import backgroungImage from './Images/backGround-image.jpeg'
import './Home.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Home() {

    const signinPage = () => {
        window.location.href = './SignUp'
    }
    const forgotPassword = () => {
        window.location.href = './ForgotPassword'
    }
    const MainTainRecordsPage = () => {
        window.location.href = './MaintainRecords'
    }
    return (
        <div className="homePage">
            <div>
                <img src={backgroungImage} className="imageSize" alt="" />
            </div>
            <div className="dialogBox">
                <div className="welcomeMsg">
                    Welcome To Kalpsaru Diamonds
                </div>
                <div className="loginMsg">Please login to access our online shop...</div>
                <div className="emailField">
                    <TextField
                        id="standard-password-input"
                        label="E-mail"
                        type="text"
                        variant="standard"
                        className="emailWidth"
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
                    />
                </div>
                <div className="forgotPass" onClick={forgotPassword}>Forgot password</div>
                <div className="loginButton">
                    <Button variant="outlined" onClick={MainTainRecordsPage} >Submit</Button>
                </div>
                <div className="signUp">New to kalpsaru?<span className="signUpText" onClick={signinPage}>Sign up</span></div>

            </div>
        </div>
    )
}
export default Home