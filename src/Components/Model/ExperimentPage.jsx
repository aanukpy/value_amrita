import React from "react";
import { Breadcrumb, Button, Typography } from "antd";
import { HomeOutlined } from "@mui/icons-material";
import {Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getBroadState } from '../../redux/reselect/reselector';

const ExperimentPage = () => {
  const { sub } = useParams(); 

  const BroadDetails = useSelector(getBroadState); 

  const selectedBroadArea = BroadDetails.find(area => area.broadAreaId === sub);

  const dummyExperiments = [
    {
      id: 1,
      experiment: "Experiment 1",
      description: "Description of Experiment 1",
      Experiments: [
        { id: 1, title: "Experiment 1" },
        { id: 2, title: "Experiment 2" },
      ],
    },
    {
      id: 2,
      experiment: "Experiment 2",
      description: "Description of Experiment 2",
      Experiments: [
        { id: 3, title: "Experiment 3" },
        { id: 4, title: "Experiment 4" },
      ],
    },
  ];

  return (
    <div
      style={{
        height: "auto",
        minHeight: 700,
        marginTop: "90px",
        width: "69%",
        marginInline: "auto",
      }}
    >
      <Breadcrumb
        items={[
          {
            title: <HomeOutlined style={{ fontSize: 18, color: "#3F5C10" }} />,
            href: "/",
          },
          {
            title: selectedBroadArea ? selectedBroadArea.broadAreaName : "Broad Areas",
          },
        ]}
      />
     
      <Typography
        style={{
          fontSize: 30,
          fontFamily: 'Georgia, "Times New Roman", Times, serif',
          paddingBlock: 20,
          textTransform: "capitalize",
        }}
      >
        {selectedBroadArea ? selectedBroadArea.broadAreaName : ""}
      </Typography>

      <div>
        {selectedBroadArea && selectedBroadArea.labs.map((lab) => (
          <div key={lab.labId}>
            <div style={{ paddingBlock: 8 }}>
              <h6
                style={{
                  color: "#3F5C10",
                  fontSize: 22,
                }}
              >
                {lab.labName}
              </h6>
              <p
                style={{
                  fontSize: 15,
                  fontWeight: 500,
                  color: "#000000",
                  paddingBlock: 8,
                }}
              >
               
                {lab.description}
              </p>
            </div>
            <div>
              {dummyExperiments.map((item) => (
                item.Experiments.map((Experiments) => (
                  <Button
                    style={{
                      width: "auto",
                      margin: 5,
                      borderRadius: 20,
                      background: "white",
                    }}
                    key={Experiments.id}
                  >
                    <Link
                      to={`/experiment-page/${sub}/${Experiments.id}`}
                      style={{ textDecoration: "none" }}
                    >
                     
                      {Experiments.title}
                    </Link>
                  </Button>
                ))
              ))}
            </div>
          </div>
        ))}
      </div>

     
     
    </div>
  );
};

export default ExperimentPage;
