import { Breadcrumb } from "antd";
import React from "react";
import { useParams } from "react-router-dom";

const ContentPage = () => {
  const { sub, exp } = useParams();
  console.log(sub, exp);
  return (
    <div style={{ flex: 0.85 }}>
      <Breadcrumb>
        <Breadcrumb.Item>{sub}</Breadcrumb.Item>
        <Breadcrumb.Item>{`exp ${exp}`}</Breadcrumb.Item>
      </Breadcrumb>
      <object
        data={`/src/LabFiles/PhysicalChemistry/exp${exp}/experiment.html`}
        type="text/html"
        width="100%"
        height="900px"
      />
    </div>
  );
};
export default ContentPage;
