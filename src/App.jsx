import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Home from "./Components/home";
import NavBar from "./Components/Header";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Footer from "./Components/Footer";
import News from "./Components/News";
import Experiment from "./Components/Experiment";
import Gallery from "./Components/Gallery";
import ExperimentPage from "./Components/Model/ExperimentPage";
import { ConfigProvider } from "antd";
import Contact from "./Components/Contact";
import Project from "./Components/Project";
import Workshop from "./Components/Workshop";
import Apply from "./Components/NodalCentres/Apply";
import Demo from "./Components/NodalCentres/Demo";
import Inauguration from "./Components/NodalCentres/Inauguration";
import NodalLogin from "./Components/NodalCentres/NodalLogin";
import List from "./Components/NodalCentres/List";
import routes from "./routes";
import Simulation from "./layouts/Simulation";
import Sidebar from "./Components/Dashboard/Lab/Dashboard";
import Labs from "./Components/Dashboard/Lab/Labs";

function App() {
  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return (
          <Route
            exact
            path={route.route}
            element={route.component}
            key={route.key}
          />
        );
      }

      return null;
    });
  return (
    <ConfigProvider
      theme={{
        token: {
          // Seed Token
          colorPrimary: "green",
          borderRadius: 2,

          // Alias Token
          colorBgContainer: "#f6ffed",
        },
      }}
    >
      <Router>
        {/* <NavBar /> */}
        <Routes>
          <Route path="/" element={<Sidebar />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/news" element={<News />} />
          <Route path="/experiment" element={<ExperimentPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/workshops" element={<Workshop />} />
          <Route path="/nodalcentreapply" element={<Apply />} />
          <Route path="/nodalcentredemo" element={<Demo />} />
          <Route path="/inauguration" element={<Inauguration />} />
          <Route path="/nodalcentrelogin" element={<NodalLogin />} />
          <Route path="/nodalcentrelist" element={<List />} />
          <Route path="/Labs" element={<Labs />} />
          <Route path="/experiment-page/:name" element={<Simulation />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
     
    </ConfigProvider>
    
  );
}

export default App;
