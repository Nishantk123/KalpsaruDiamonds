import React, { useState } from 'react'
import './SignUp.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function SignUp() {
    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [cnfrmPassword, setCnfrmPassword] = useState("")
    const backToLoginPage = () => {
        window.location.href = './'
    }
    const nameInputField = (e) => {
        setUserName(e.target.value)
    }
    const emailInputField = (e) => {
        setEmail(e.target.value)
    }
    const passInputField = (e) => {
        setPassword(e.target.value)
    }
    const cnfrmPassInputField = (e) => {
        setCnfrmPassword(e.target.value)
    }
    const submitRegDetail = () => {
        let signUpCredential = {
            name: userName,
            email: email,
            password: password
        }
        fetch(`${process.env.REACT_APP_API}/register`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(signUpCredential),
        })
            .then((response) => response.json())
            .then((response) => {
                localStorage.setItem("loginkalpToken", response.token)
                window.location.href = './'
            })
    }
    return (<div>
        <div className="mainElement">
            <div className="signupPage">
                <div className="registrationText">
                    Registraion Page
                </div>
                <div className="parentFirstName">
                    Name
                    <div className="fNameTxtField">
                        <TextField
                            label="First name"
                            id="outlined-size-small"
                            size="small"
                            type="text"
                            className="textFieldWidth"
                            onChange={nameInputField}
                        />
                    </div>
                </div>
                <div className="parentFirstName">
                    Email ID
                    <div className="fNameTxtField">
                        <TextField
                            label="Email ID"
                            id="outlined-size-small"
                            size="small"
                            type="email"
                            className="textFieldWidth"
                            onChange={emailInputField}
                        />
                    </div>
                </div>
                <div className="parentFirstName">
                    Password
                    <div className="fNameTxtField">
                        <TextField
                            label="Password"
                            id="outlined-size-small"
                            size="small"
                            type="password"
                            className="textFieldWidth"
                            onChange={passInputField}
                        />
                    </div>
                </div>
                <div className="parentFirstName">
                    Confirm Password
                    <div className="fNameTxtField">
                        <TextField
                            label="Confirm Password"
                            id="outlined-size-small"
                            size="small"
                            type="password"
                            className="textFieldWidth"
                            onChange={cnfrmPassInputField}
                        />
                    </div>
                </div>
                <div className="passwordMatchMsg">{password === cnfrmPassword ? "" : "Password should match"}</div>
                <div className="backToLogin" onClick={backToLoginPage}>Back to login page</div>
                <div className="submitRegBtn">
                    <Button variant="outlined" onClick={submitRegDetail}>Submit</Button>
                </div>
            </div>
        </div>
    </div>)
}
export default SignUp