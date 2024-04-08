import React from 'react';
import "./Topnav.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBell, faEnvelope, faUserCircle } from '@fortawesome/free-solid-svg-icons';

function Topnav() {
    return (
        <div id="content-wrapper" className="d-flex flex-column">
            {/* Content Wrapper */}
            <div id="content-wrapper" className="d-flex flex-column">
                {/* Main Content */}
                <div id="content">
                    {/* Topbar */}
                    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                        {/* Sidebar Toggle (Topbar) */}
                        <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                            <i className="fa fa-bars"></i>
                        </button>
                        {/* Topbar Search */}
                        <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                            <div className="input-group">
                                <input type="text" className="form-control bg-light border-0 small"
                                    placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
                                <div className="input-group-append">
                                    <button className="btn btn-primary" type="button">
                                        <FontAwesomeIcon icon={faSearch} />
                                    </button>
                                </div>
                            </div>
                        </form>
                        {/* Topbar Navbar */}
                        <ul className="navbar-nav ml-auto">
                           
                            {/* Notification Icon */}
                            <li className="nav-item mx-1">
                                <a className="nav-link" href="/">
                                    <FontAwesomeIcon icon={faBell}  style={{color:"grey",marginLeft:"700px"}}/>
                                </a>
                            </li>
                            {/* Message Icon */}
                            <li className="nav-item mx-1">
                                <a className="nav-link" href="/">
                                    <FontAwesomeIcon icon={faEnvelope} style={{color:"grey"}} />
                                </a>
                            </li>
                             {/* Profile Icon */}
                             <li className="nav-item mx-1">
                                <a className="nav-link" href="/">
                                   <FontAwesomeIcon icon={faUserCircle}  style={{color:"grey"}}/>
                                </a>
                            </li>
                        </ul>
                    </nav>
                    {/* End of Topbar */}
                    {/* Begin Page Content */}
                    <div className="container-fluid">
                        <h1 className="h3 mb-4 text-gray-800">Dashboard</h1>
                        {/* Your Page Content Goes Here */}
                    </div>
                    {/* /.container-fluid */}
                </div>
                {/* End of Main Content */}
            </div>
            {/* End of Content Wrapper */}
        </div>
    );
}

export default Topnav;
