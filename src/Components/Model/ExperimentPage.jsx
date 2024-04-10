import React from "react";
import { Breadcrumb, Button, Typography } from "antd";
import { HomeOutlined } from "@mui/icons-material";
import { Link, useParams } from "react-router-dom";
import {
  Chemical_Science,
  Biotechnology_Biomedical_Engineering,
  Computer_Science,
  Mechanical_Engineering,
  Physical_Sciences,
} from "../../Data/ExperimentData"; // Importing the data

const ExperimentPage = () => {
  const { sub } = useParams();

  // Define a mapping object to map subjects to their respective data
  const subjectDataMap = {
    "75": Biotechnology_Biomedical_Engineering,
    "76": Chemical_Science,
    "77": Computer_Science,
    "78": Mechanical_Engineering,
    "79": Physical_Sciences,
  }

  const subjectData = subjectDataMap[sub] || []; // Get the data based on sub

  // Get the main title name from the subjectDataMap
  const mainTitle = {
    "75": "Biotechnology Engineering",
    "76": "Chemical Science",
    "77": "Computer Science",
    "78": "Mechanical Engineering",
    "79": "Physical Sciences",
  }[sub];

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
            title: mainTitle || "",
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
        {subjectData.length > 0 ? subjectData[0].experiment : ""}
      </Typography>
      <div>
        {subjectData.map((item) => (
          <div key={item.id}>
            <div style={{ paddingBlock: 8 }}>
              <h6
                style={{
                  color: "#3F5C10",
                  fontSize: 22,
                }}
              >
                {item.experiment}
              </h6>
              <p
                style={{
                  fontSize: 15,
                  fontWeight: 500,
                  color: "#000000",
                  paddingBlock: 8,
                }}
              >
                {item.description}
              </p>
            </div>
            <div>
              {item.links.map((links) => (
                <Button
                  style={{
                    width: "auto",
                    margin: 5,
                    borderRadius: 20,
                    background: "white",
                  }}
                  key={links.id}
                >
                  <Link
                    // to={`/subject/${sub}/${item.id}`}
                    to={`/experiment-page/${sub}/${links.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    {links.title}
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperimentPage;
