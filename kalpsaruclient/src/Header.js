import React from "react";
import { useHistory } from "react-router-dom";

const Header = () => {

  const history = useHistory();

  const handleLogin = () =>{
    history.push('/login')
  }
  const handleDiamond = () =>{
    history.push('/DiamondPurchaseReg')
  }
  const handleSupplementary = () =>{
    history.push('/supplementary')
  }
  const handleLogout = () =>{
    window.localStorage.clear()
    history.push('/')
  }
  const handleMainPage = () =>{
    history.push('/MainTainRecords')
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-info bg-info">
        <div className="container-fluid">
          <a className="navbar-brand text-white" href="#">
            <strong>KALPSARU DIAMONDS</strong>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#" onClick={handleMainPage}>
                  Home 
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={handleDiamond}>
                  Diamond
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={handleSupplementary}>
                  Supplementary
                </a>
              </li>
            </ul>
            {/* <span className="navbar-text mx-3 text-cursor" onClick={handleLogin}>Login</span> */}
            <button className="btn btn-warning text-cursor" onClick={handleLogout}>Logout</button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
