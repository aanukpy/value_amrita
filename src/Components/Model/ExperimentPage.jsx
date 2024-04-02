import React from "react";
import { Computer_science } from "../../Data/ExperimentData";
import { Breadcrumb, Button, Space, Typography } from "antd";
import { HomeOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";

const initialState = () => {
  return {
    activeKey: [""],
    openModal: false,
    item: null,
  };
};

const ExperimentPage = () => {
  const onHandleClick = () => {};

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
          },
          {
            title: "computer science",
          },
        ]}
      />
      <Typography
        style={{
          fontSize: 30,
          fontFamily: 'Georgia, "Times New Roman", Times, serif',
          paddingBlock: 20,
        }}
      >
        Computer Science
      </Typography>
      <div>
        {Computer_science.map((item) => {
          return (
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
                {item.links.map((links) => {
                  return (
                    <Button
                      style={{
                        width: "auto",
                        margin: 5,
                        borderRadius: 20,
                        background: "white",
                      }}
                      key={links.id}
                      onClick={onHandleClick}
                    >
                      <Link
                        to={`/experiment-page/${item.id}`}
                        style={{ textDecoration: "none" }}
                      >
                        {links.title}
                      </Link>
                    </Button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ExperimentPage;
