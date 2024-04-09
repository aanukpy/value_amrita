import React from 'react';
import './Sidebar.css';
import DashboardCards from './Dashboardcard';
import Topnav from './Topnav';
import AreaChart from './Chart';
import RevenueSources from './Pie-chart';
import ProjectCard from './Table';
import Topbar from './Topnav';

const Sidebar = () => {
    return (
        <div className="container-fluid">
            <div className="row flex-nowrap">
                {/* Sidebar */}
                <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 pt-2 pb-4  dashboard-sn">
                    <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100  shadow bg-sidebar">
                        {/* Sidebar Brand */}
                        <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                        <h3 style={{ color: 'white', marginLeft:"50px" }} className="nav-link-text ms-1">Admin Panel</h3>


                        </a>
                        {/* Sidebar Navigation */}
                        <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                            {/* Sidebar Items */}
                            <li className="nav-item">
                                <a href="#" className="nav-link align-middle px-0 text-white">
                                    <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">Dashboard</span>
                                </a>
                            </li>
                            {/* Labs */}
                            <li className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle align-middle px-0 text-white" id="labsDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="fs-4 bi-speedometer2"></i> <span className="ms-1 d-none d-sm-inline">Labs</span>
                                </a>
                                {/* Submenu */}
                                <ul className="dropdown-menu" aria-labelledby="labsDropdown">
                                    <li><a className="dropdown-item" href="#">Broad Area</a></li>
                                    <li><a className="dropdown-item" href="#">Labs</a></li>
                                    <li><a className="dropdown-item" href="#">Experiment</a></li>
                                    <li><a className="dropdown-item" href="#">Edit Experiment</a></li>
                                    <li><a className="dropdown-item" href="#">Manage Page</a></li>
                                </ul>
                            </li>
                            {/* Portal Admin */}
                            <li className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle align-middle px-0 text-white" id="portalDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="fs-4 bi-speedometer2"></i> <span className="ms-1 d-none d-sm-inline">Nodal Centers</span>
                                </a>
                                {/* Submenu */}
                                <ul className="dropdown-menu" aria-labelledby="portalDropdown">
                                    <li><a className="dropdown-item" href="#">Nodal center list</a></li>
                                    {/* <li><a className="dropdown-item" href="#">Item 2</a></li> */}
                                </ul>
                            </li>
                            {/* Report */}
                            {/* <li className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle align-middle px-0 text-white" id="reportDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="fs-4 bi-speedometer2"></i> <span className="ms-1 d-none d-sm-inline">Report</span>
                                </a>
                               
                                <ul className="dropdown-menu" aria-labelledby="reportDropdown">
                                    <li><a className="dropdown-item" href="#">Item 1</a></li>
                                    <li><a className="dropdown-item" href="#">Item 2</a></li>
                                </ul>
                            </li> */}
                            {/* Account */}
                            <li className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle align-middle px-0 text-white" id="accountDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="fs-4 bi-speedometer2"></i> <span className="ms-1 d-none d-sm-inline">Users</span>
                                </a>
                                {/* Submenu */}
                                <ul className="dropdown-menu" aria-labelledby="accountDropdown">
                                    <li><a className="dropdown-item" href="#">Students</a></li>
                                    <li><a className="dropdown-item" href="#">Instructors</a></li>
                                </ul>
                            </li>
                            {/* Instructor */}
                            <li className="nav-item dropdown">
                                {/* <a href="#" className="nav-link dropdown-toggle align-middle px-0 text-white" id="instructorDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="fs-4 bi-speedometer2"></i> <span className="ms-1 d-none d-sm-inline">Instructor</span>
                                </a> */}
                                {/* Submenu */}
                                {/* <ul className="dropdown-menu" aria-labelledby="instructorDropdown">
                                    <li><a className="dropdown-item" href="#">Item 1</a></li>
                                    <li><a className="dropdown-item" href="#">Item 2</a></li>
                                </ul> */}
                            </li>
                        </ul>
                        {/* User Dropdown */}
                        <hr />
                        <div className="dropdown pb-4">
                            {/* <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                                <span className="d-none d-sm-inline mx-1">Admin</span>
                            </a> */}
                            {/* <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                                <li><a className="dropdown-item" href="#">New project...</a></li>
                                <li><a className="dropdown-item" href="#">Settings</a></li>
                                <li><a className="dropdown-item" href="#">Profile</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Sign out</a></li>
                            </ul> */}
                        </div>
                    </div>
                </div>
                {/* Main content area */}
                <div className="col py-3 pt-1">
                    <Topbar />
                    <DashboardCards />
                    <div className="row">
                        <div className="col-xl-8">
                            <AreaChart />
                        </div>
                        <div className="col-xl-4">
                            <RevenueSources />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-8">
                            <ProjectCard />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
