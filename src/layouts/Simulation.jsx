import React from "react";
import SideNav from "./SideNav";
import ContentPage from "./ContentPage";
import { useState } from "react";
import TheoryComponent from "./Theory";
import { useSelector } from "react-redux";
import SimulatorPage from "./ContentPage";
import { useEffect } from "react";

const Simulation = () => {
  const { selectedCategory, experimentIds } = useSelector((state) => state.exp);
  useEffect(() => {
    console.log("hi", experimentIds);
  }, []);

  return (
    <div style={{ height: "auto", marginTop: 55, display: "flex", flex: 1 }}>
      <SideNav selectedCategory={selectedCategory} />
      {selectedCategory === "Theory" && <TheoryComponent />}
      {selectedCategory === "Simulator" && <SimulatorPage />}
      {selectedCategory === "Procedure" && <SimulatorPage />}
    </div>
  );
};

export default Simulation;
