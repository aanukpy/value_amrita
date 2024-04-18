import React, { useState } from "react";
import {
  Button,
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faFlask,
  faDesktop,
  faClipboardList,
  faBookOpen,
  faCommentAlt,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import RichTextEditor from "./TextEdit";
import { updateTheroryContent } from "../../../redux/slices/BroadAreaReducer";
import { useDispatch } from "react-redux";
import { updateSimulationContent } from "../../../redux/slices/ExperimentReducer";
import WithExperimentLayout from "../../common/ExperimentLayout";

const ExperimentEdit = () => {
  const [selectedBroadArea, setSelectedBroadArea] = useState("");
  const [selectedLab, setSelectedLab] = useState("");
  const [selectedExperiment, setSelectedExperiment] = useState("");
  const [editorContent, setEditorContent] = useState("");
  const [contentType, setContentType] = useState("Theory");
  const dispatch = useDispatch();

  const handleEditorChange = (content, delta, source, editor) => {
    if (contentType === "Theory") {
      dispatch(updateTheroryContent(editor.getHTML()));
    } else if (contentType === "Simulation") {
      dispatch(updateSimulationContent(editor.getHTML()));
    }
  };

  const handleButtonClick = (type) => {
    setContentType(type);
    setEditorContent(""); // Reset the editor content when switching between content types
    console.log(`Clicked on ${type} button`);
  };

  const handleBroadAreaChange = (event) => {
    setSelectedBroadArea(event.target.value);
  };

  const handleLabChange = (event) => {
    setSelectedLab(event.target.value);
  };

  const handleExperimentChange = (event) => {
    setSelectedExperiment(event.target.value);
  };

  const handlePlainTextChange = (event) => {
    setEditorContent(event.target.value);
  };

  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <Box sx={{ marginBottom: "1rem" }}>
            <FormControl sx={{ minWidth: 200, marginRight: "1rem" }}>
              <InputLabel>Broad Area</InputLabel>
              <Select
                value={selectedBroadArea}
                onChange={handleBroadAreaChange}
              >
                <MenuItem value="networkSecurity">Network Security</MenuItem>
                <MenuItem value="machineLearning">Machine Learning</MenuItem>
                <MenuItem value="databaseManagement">
                  Database Management
                </MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ minWidth: 200, marginRight: "1rem" }}>
              <InputLabel>Lab</InputLabel>
              <Select value={selectedLab} onChange={handleLabChange}>
                <MenuItem value="networkSecurityLab">
                  Network Security Lab
                </MenuItem>
                <MenuItem value="machineLearningLab">
                  Machine Learning Lab
                </MenuItem>
                <MenuItem value="databaseManagementLab">
                  Database Management Lab
                </MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ minWidth: 200 }}>
              <InputLabel>Experiment</InputLabel>
              <Select
                value={selectedExperiment}
                onChange={handleExperimentChange}
              >
                <MenuItem value="experiment1">Experiment 1</MenuItem>
                <MenuItem value="experiment2">Experiment 2</MenuItem>
                <MenuItem value="experiment3">Experiment 3</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "1rem",
              width: "70%",
            }}
          >
            <div>
              <Button
                onClick={() => handleButtonClick("Theory")}
                startIcon={<FontAwesomeIcon icon={faBook} />}
                style={{
                  marginRight: "0.5rem",
                  border: "1px solid #ccc",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                  backgroundColor: contentType === "Theory" ? "#f0f0f0" : "",
                }}
              >
                Theory
              </Button>
              <Button
                onClick={() => handleButtonClick("Procedure")}
                startIcon={<FontAwesomeIcon icon={faFlask} />}
                style={{
                  marginRight: "0.5rem",
                  border: "1px solid #ccc",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                  backgroundColor: contentType === "Procedure" ? "#f0f0f0" : "",
                }}
              >
                Procedure
              </Button>

              <Button
                onClick={() => handleButtonClick("Simulation")}
                startIcon={<FontAwesomeIcon icon={faDesktop} />}
                style={{
                  marginRight: "0.5rem",
                  border: "1px solid #ccc",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                  backgroundColor:
                    contentType === "Simulation" ? "#f0f0f0" : "",
                }}
              >
                Simulation
              </Button>
              <Button
                startIcon={<FontAwesomeIcon icon={faClipboardList} />}
                style={{
                  marginRight: "0.5rem",
                  border: "1px solid #ccc",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                }}
              >
                Assignment
              </Button>
              <Button
                onClick={() => handleButtonClick("References")}
                startIcon={<FontAwesomeIcon icon={faBookOpen} />}
                style={{
                  marginRight: "0.5rem",
                  border: "1px solid #ccc",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                  backgroundColor:
                    contentType === "References" ? "#f0f0f0" : "",
                }}
              >
                References
              </Button>
              <Button
                startIcon={<FontAwesomeIcon icon={faCommentAlt} />}
                style={{
                  marginRight: "1rem",
                  border: "1px solid #ccc",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                }}
              >
                Feedback
              </Button>
              <Button
                startIcon={<FontAwesomeIcon icon={faPlus} />}
                style={{
                  border: "1px solid #ccc",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                }}
              ></Button>
            </div>
          </div>

          {contentType !== "Simulation" ? (
            <RichTextEditor
              value={editorContent}
              onChange={handleEditorChange}
            />
          ) : (
            <textarea
              value={editorContent}
              onChange={handlePlainTextChange}
              style={{ width: "70%", height: "50px", resize: "vertical" }}
            />
          )}
        </div>
        <div style={{}}>
          <Button
            startIcon={""}
            style={{
              border: "1px solid #ccc",
              alignItems: "flex-end",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            }}
          >
            Add
          </Button>
        </div>
      </div>
    </div>
  );
};

const EditExperimentLayout = WithExperimentLayout(ExperimentEdit);

export default EditExperimentLayout;
