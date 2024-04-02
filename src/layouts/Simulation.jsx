import React from "react";
import SideNav from "./SideNav";
import ContentPage from "./ContentPage";

const Simulation = () => {
  return (
    <div style={{ height: "auto", marginTop: 55, display: "flex", flex: 1 }}>
      <SideNav />
      <ContentPage />
    </div>
  );
};

export default Simulation;
