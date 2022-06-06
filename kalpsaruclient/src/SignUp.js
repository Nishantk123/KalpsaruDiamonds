import React from 'react'
import './SignUp.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function SignUp() {
    const backToLoginPage = () => {
        window.location.href = './'
    }
    return (<div>
        <div className="mainElement">
            <div className="signupPage">
                <div className="registrationText">
                    Registraion Page
                </div>
                <div className="parentFirstName">
                    FirstName
                    <div className="fNameTxtField">
                        <TextField
                            label="First name"
                            id="outlined-size-small"
                            size="small"
                            type="text"
                            className="textFieldWidth"
                        // placeholder="Enter your name"
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

                        // placeholder="Enter your name"
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

                        // placeholder="Enter your name"
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

                        />
                    </div>
                </div>
                <div className="backToLogin" onClick={backToLoginPage}>Back to login page</div>
                <div className="submitRegBtn">
                    <Button variant="outlined">Submit</Button>
                </div>
            </div>
        </div>
    </div>)
}
export default SignUp