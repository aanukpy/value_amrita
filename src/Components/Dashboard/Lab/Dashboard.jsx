import React from 'react';

import LabHome from './LabHome'
import Labs from './Labs';
// Sidebar component
const Sidebar = () => {
    return (
        <div className="container-fluid">
            <div className="row flex-nowrap">
                {/* Sidebar */}
                <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark " >
                    <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white  ">
                        {/* Sidebar Brand */}
                        <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                            <span className="fs-5 d-none d-sm-inline ">Menu</span>
                        </a>
                        {/* Sidebar Navigation */}
                        <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                            {/* Sidebar Items */}
                            <li className="nav-item">
                                <a href="#" className="nav-link align-middle px-0">
                                    <i className="fs-4 bi-house text-light"></i> <span className="ms-1 d-none d-sm-inline text-light ">Home</span>
                                </a>
                            </li>
                            <li>
                                <a href="#submenu1" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                                    <i className="fs-4 bi-speedometer2"></i> <span className="ms-1 d-none d-sm-inline text-light ">Content Manager</span>
                                </a>
                                {/* Submenu 1 */}
                                <ul className="collapse nav flex-column ms-1 submenu" id="submenu1" data-bs-parent="#menu">
                                    <li className="w-100 ml-3">
                                        <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Broad Area</span>  </a>
                                    </li>
                                    <li>
                                        <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Labs</span>  </a>
                                    </li>
                                    <li className="w-100">
                                        <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Experiment</span>  </a>
                                    </li>
                                    <li className="w-100">
                                        <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Edit Experiment</span> </a>
                                    </li>
                                    <li className="w-100">
                                        <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Manage Page</span>  </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#submenu2" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                                    <i className="fs-4 bi-speedometer2"></i> <span className="ms-1 d-none d-sm-inline  text-light">Dashboard</span>
                                </a>
                                {/* Submenu 2 */}
                                <ul className="collapse nav flex-column ms-1 submenu" id="submenu2" data-bs-parent="#menu">
                                    <li className="w-100 ml-3">
                                        <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Item</span> 1 </a>
                                    </li>
                                    <li>
                                        <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Item</span> 2 </a>
                                    </li>
                                </ul>
                            </li>
                            {/* Other Sidebar Items */}
                            {/* ... */}
                        </ul>
                        {/* User Dropdown */}
                        <hr />
                        <div className="dropdown pb-4">
                            <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                                {/* <img src="https://github.com/mdo.png" alt="hugenerd" width="30" height="30" className="rounded-circle" /> */}
                                <span className="d-none d-sm-inline mx-1">Admin</span>
                            </a>
                            <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                                <li><a className="dropdown-item" href="#">New project...</a></li>
                                <li><a className="dropdown-item" href="#">Settings</a></li>
                                <li><a className="dropdown-item" href="#">Profile</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Sign out</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Main content area */}
                <div className="col py-3">
               {/* <LabHome/> */}
               <Labs/>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
