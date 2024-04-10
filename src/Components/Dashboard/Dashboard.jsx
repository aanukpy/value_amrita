// Sidebar.js
import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import DashboardCards from "./Dashboardcard";
import AreaChart from "./Chart";
import RevenueSources from "./Pie-chart";
import ProjectCard from "./Table";
import Topbar from "./Topnav";
import { useLocation } from "react-router-dom";

const Sidebar = () => {
  const [sidebarVisible, setSidebarVisible] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => {
      setSidebarVisible(window.innerWidth > 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const location = useLocation();
  const setTitle = () => {
    let title;
    const titleRoute = location.pathname.split("/");
    title =
      titleRoute[titleRoute.length - 1] === "userManagement"
        ? "User Management"
        : "Dashboard";
    return title;
  };

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        {/* Sidebar */}
        <div
          className={`col-auto col-md-3 col-xl-2 px-sm-2 px-0 pt-2 pb-4 dashboard-sn ${
            sidebarVisible ? "" : "hidden"
          }`}
        >
          <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100 shadow bg-sidebar">
            {/* Sidebar Brand */}
            <a
              href="/"
              className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
            >
              <h3
                style={{ color: "white", marginLeft: "50px" }}
                className="nav-link-text ms-1"
              >
                Admin Panel
              </h3>
            </a>{" "}
            {/* Sidebar Navigation */}
            <ul
              className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
              id="menu"
            >
              {/* Sidebar Items */}
              <li className="nav-item">
                <a href="#" className="nav-link align-middle px-0 text-white">
                  <i className="fs-4 bi-house"></i>{" "}
                  <span className="ms-1">Dashboard</span>
                </a>
              </li>
              {/* Labs */}
              <li className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle align-middle px-0 text-white"
                  id="labsDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fs-4 bi-speedometer2"></i>{" "}
                  <span className="ms-1">Labs</span>
                </a>
                {/* Submenu */}
                <ul className="dropdown-menu" aria-labelledby="labsDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Broad Area
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Labs
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Experiment
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Edit Experiment
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Manage Page
                    </a>
                  </li>
                </ul>
              </li>
              {/* Portal Admin */}
              <li className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle align-middle px-0 text-white"
                  id="portalDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fs-4 bi-speedometer2"></i>{" "}
                  <span className="ms-1">Nodal Centers</span>
                </a>
                {/* Submenu */}
                <ul className="dropdown-menu" aria-labelledby="portalDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Nodal center list
                    </a>
                  </li>
                  {/* <li><a className="dropdown-item" href="#">Item 2</a></li> */}
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle align-middle px-0 text-white"
                  id="accountDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fs-4 bi-speedometer2"></i>{" "}
                  <span className="ms-1">Users</span>
                </a>
                {/* Submenu */}
                <ul className="dropdown-menu" aria-labelledby="accountDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Students
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Instructors
                    </a>
                  </li>
                </ul>
              </li>
              {/* Instructor */}
              <li className="nav-item dropdown"></li>
            </ul>
            {/* User Dropdown */}
            <hr />
            <div className="dropdown pb-4"></div>
          </div>
        </div>
        {/* Main content area */}
        <div className="col py-3 pt-1">
          <Topbar toggleSidebar={toggleSidebar} title={setTitle()} />
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
