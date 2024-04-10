import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faBell,
  faEnvelope,
  faCog,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import "./Topnav.css";

function Topbar({ toggleSidebar, title }) {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <>
      <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
        <button
          id="sidebarToggleTop"
          className="btn btn-link d-md-none rounded-circle mr-3"
          onClick={toggleSidebar}
        >
          <i className="fa fa-bars"></i>
        </button>
        <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
          <h5>{title}</h5>
        </form>
        <div className="position-relative">
          <div className="nav-item no-arrow">
            <div className="nav-link" onClick={toggleDropdown}>
              <FontAwesomeIcon icon={faCog} style={{ color: "grey" }} />
            </div>
            {showDropdown && (
              <div className="dropdown-panel position-absolute top-100 start-0">
                <button className="btn-close" onClick={toggleDropdown}>
                  <FontAwesomeIcon icon={faTimes} />
                </button>
                <div>
                  <h4 style={{ color: "white" }}>Theme</h4>
                  <div className="theme-options">
                    <div>
                      <input
                        type="radio"
                        id="lightTheme"
                        name="theme"
                        value="light"
                      />
                      <label htmlFor="lightTheme" style={{ color: "white" }}>
                        Light
                      </label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        id="darkTheme"
                        name="theme"
                        value="dark"
                      />
                      <label htmlFor="darkTheme" style={{ color: "white" }}>
                        Dark
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item dropdown no-arrow mx-1">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="alertsDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <FontAwesomeIcon icon={faBell} style={{ color: "grey" }} />
              <span className="badge badge-danger badge-counter">3+</span>
            </a>
            <div
              className="dropdown-menu dropdown-menu-right dropdown-list shadow animated--grow-in"
              aria-labelledby="alertsDropdown"
            >
              {/* Dropdown content */}
            </div>
          </li>
          <li className="nav-item dropdown no-arrow mx-1">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="messagesDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <FontAwesomeIcon icon={faEnvelope} style={{ color: "grey" }} />
              <span className="badge badge-danger badge-counter">7</span>
            </a>
            <div
              className="dropdown-menu dropdown-menu-right dropdown-list shadow animated--grow-in"
              aria-labelledby="messagesDropdown"
            >
              {/* Dropdown content */}
            </div>
          </li>
          <li className="nav-item dropdown no-arrow">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="userDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span className="mr-2 d-none d-lg-inline text-gray-600 small">
                Admin
              </span>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Topbar;
