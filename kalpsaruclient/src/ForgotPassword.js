import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './ForgotPassword.css'


function ForgotPassword() {
    const backToLoginPage = () => {
        window.location.href = './'
    }
    return (
        <div>
            <div className="mainElement">
                <div className="forgotPassPage">
                    <div className="resetPassText">
                        Reset Password
                </div>
                    <div className="emailIDForGotPass">
                        Email ID
                    <div className="ForPassEmailField">
                            <TextField
                                label="Email"
                                id="outlined-size-small"
                                size="small"
                                type="email"
                                className="forgotPassEmailWidth"

                            />
                        </div>
                    </div>
                    <div className="backToLoginFromForPass" onClick={backToLoginPage}>Back to login page</div>
                    <div className="submitForgotPassBtn">
                        <Button variant="outlined" color="primary">Send Email</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ForgotPassword