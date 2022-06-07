import React from 'react';
import Button from '@mui/material/Button';
import './MaintainRecords.css'

function MainTainRecords() {
    const diamondPurchaseBtn = () => {
        window.location.href = "./DiamondPurchaseReg"
    }
    return (
        <div>
            <div className="mainHeading">
                <h1>
                    KALPSARU DIAMONDS
                </h1>
            </div>
            <div className="recordSubHeading">
                <div className="purchaseReg">
                    <h2>
                        Diamond Purchase Register
                    </h2>
                    <div>
                        <Button variant="outlined" onClick={diamondPurchaseBtn} >Submit</Button>
                    </div>
                </div>
                <div className="incomeReg">
                    <h2>
                        Supplementary Income Register
                    </h2>
                    <div>
                        <Button variant="outlined" >Submit</Button>
                    </div>
                </div>
                <div className='accSum'>
                    <h2>
                        Account Summary
                    </h2>
                    <div>
                        <Button variant="outlined" >Submit</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MainTainRecords