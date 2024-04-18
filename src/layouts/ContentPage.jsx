import { Breadcrumb } from "antd";
import React from "react";
import { useParams } from "react-router-dom";
import WithExperimentLayout from "../Components/common/ExperimentLayout";

const Simulator = () => {
  const { sub, exp } = useParams();
  console.log(sub, exp);
  return (
    <div style={{ flex: 0.85 }}>
      <Breadcrumb>
        <Breadcrumb.Item>{sub}</Breadcrumb.Item>
        <Breadcrumb.Item>{`exp ${exp}`}</Breadcrumb.Item>
      </Breadcrumb>

      <iframe
        src="http://192.168.183.140:4848/"
        title="W3Schools Free Online Web Tutorials"
        width="100%"
        height="900px"
      ></iframe>
    </div>
  );
};
const SimulatorPage = WithExperimentLayout(Simulator);
export default SimulatorPage;
