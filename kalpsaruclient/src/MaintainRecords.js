import React from "react";
import Button from "@mui/material/Button";
import "./MaintainRecords.css";
import { useHistory } from "react-router-dom";
import Header from "./Header";

function MainTainRecords() {
  const history = useHistory();
  const diamondPurchaseBtn = () => {
    // window.location.href = "./DiamondPurchaseReg";
    history.push("DiamondPurchaseReg");
  };

  const handleSupplementary = () => {
    history.push("supplementary");
  };
  return (
    <div>
      <div className=" my-5">
        <h1 className="text-center">KALPSARU DIAMONDS</h1>
      </div>
      <div className="container my-5">
        <div className="row">
          <div className="col-sm-4">
            <div className="card custom-card ">
              <div className="card-body py-3 ">
                <h2 className="text-center">Diamond Purchase Register</h2>
                <div className="d-flex justify-content-center">
                  <button  className="btn btn-warning my-3" variant="outlined" onClick={diamondPurchaseBtn}>
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card custom-card">
              <div className="card-body py-3">
                <h2 className="text-center">Supplementary Income Register</h2>
                <div className="d-flex justify-content-center">
                  <button className="btn btn-warning my-3" variant="outlined" onClick={handleSupplementary}>
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card custom-card">
              <div className="card-body py-3">
                <h2 className="text-center">Account Summary</h2>
                <div className="d-flex justify-content-center">
                  <button  className="btn btn-warning my-3" variant="outlined">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MainTainRecords;
