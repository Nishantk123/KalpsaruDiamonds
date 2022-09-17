import React from "react";
import { useHistory } from "react-router-dom";
import profile from "../Images/profile.svg";
const Header = () => {
  const history = useHistory()

  const handleLogout = () =>{
    window.localStorage.removeItem("jwtToken")
    history.push('/')
  }
  return (
    // <div classNameName="header">
    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
      <form className="form-inline d-none d-sm-block">
        <button
          id="sidebarToggleTop"
          className="btn btn-link d-md-none rounded-circle mr-3"
        >
          <i className="fa fa-bars"></i>
        </button>
      </form>
      <form className="d-none d-sm-inline-block form-inline mr-auto ms-md-3 my-2 my-md-0 mw-100 navbar-search">
        <div className="input-group">
          <input
            type="text"
            className="form-control bg-light border-0 "
            placeholder="Search for..."
            aria-label="Search"
            aria-describedby="basic-addon2"
          />
          <div className="input-group-append">
            <button className="btn btn-success" type="button">
              <i className="fas fa-search fa-sm"></i>
            </button>
          </div>
        </div>
      </form>
      <ul className="navbar-nav ms-auto">
        <li className="nav-item dropdown no-arrow d-sm-none">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            // id="searchDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i className="fas fa-search fa-fw"></i>
          </a>

          <div
            className="dropdown-menu"
            // aria-labelledby="searchDropdown"
          >
            <form className="form-inline me-auto w-100 navbar-search">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control bg-light border-0 small"
                  placeholder="Search for..."
                  aria-label="Search"
                  aria-describedby="basic-addon2"
                />
                <div className="input-group-append">
                  <button className="btn btn-primary" type="button">
                    <i className="fas fa-search fa-sm"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {/* <div> */}
              <img className="profile-logo" src ="https://displaydesign.wiantech.net/kalpsaru/img/undraw_profile.svg" />
            {/* </div> */}
          </a>
          <ul class="dropdown-menu dropdown-menu-dark custom-dropdown-menu">
            <li><a class="dropdown-item" href="#">Profile</a></li>
            <li><a class="dropdown-item" href="#" onClick={handleLogout}>Log out</a></li>
          </ul>
        </li>
      </ul>
    </nav>
    // </div>
  );
};

export default Header;
