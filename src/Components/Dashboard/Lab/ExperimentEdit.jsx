import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Typography,
  Box,
  TextField,
  FormControl,
  InputLabel,
} from "@mui/material";
import Select from "react-select";
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
import {
  getBroad,
  getBroadState,
  getLabById,
} from "../../../redux/reselect/reselector";
import { useSelector } from "react-redux";
import RichTextEditor from "./TextEdit";
import { updateTheroryContent } from "../../../redux/slices/BroadAreaReducer";
import { useDispatch } from "react-redux";
import { updateSimulationContent } from "../../../redux/slices/ExperimentReducer";
import WithExperimentLayout from "../../common/ExperimentLayout";

const initialState = () => {
  return {
    broadAreaId: "",
    labId: "",
    experimentId: "",
  };
};
const ExperimentEdit = () => {
  const [state, setState] = useState(initialState());
  const broadOption = useSelector(getBroad);
  const broadState = useSelector(getBroadState);
  const [selectedBroadArea, setSelectedBroadArea] = useState("");
  const [selectedLab, setSelectedLab] = useState("");
  const [selectedExperiment, setSelectedExperiment] = useState("");
  const [editorContent, setEditorContent] = useState("");
  const [contentType, setContentType] = useState("Theory");
  const dispatch = useDispatch();
  const [labOption, setLabOption] = useState([]);
  const [experimentOption, setExperimentOption] = useState([]);
  const handleEditorChange = (content, delta, source, editor) => {
    if (contentType === "Theory") {
      dispatch(updateTheroryContent(editor.getHTML()));
    } else if (contentType === "Simulation") {
      dispatch(updateSimulationContent(editor.getHTML()));
    }
  };

  const handleButtonClick = (type) => {
    setContentType(type);
    setEditorContent("");
    console.log(`Clicked on ${type} button`);
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      // You can perform further actions with the uploaded file here
      console.log("Uploaded file:", file);
    }
  };

  useEffect(() => {
    const labs =
      broadState
        .find((item) => item.broadAreaId === state.broadAreaId)
        ?.labs.map((sub) => ({
          label: sub.labName,
          value: sub.labName,
          id: sub.labId,
        })) || [];
    setLabOption(labs);
  }, [state.broadAreaId, broadState]);

  useEffect(() => {
    const experiments =
      broadState
        .find((item) => item.broadAreaId === state.broadAreaId)
        ?.labs.find((sub) => sub.labId === state.labId)
        ?.experiments.map((exp) => ({
          label: exp.experimentName,
          value: exp.experimentName,
          id: exp.experimentId,
        })) || [];
    setExperimentOption(experiments);
  }, [state.broadAreaId, state.labId, broadState]);

  const handleSelectChange = (value, type) => {
    switch (type) {
      case "broad":
        setState((prev) => ({
          ...prev,
          broadAreaId: value.id,
          labId: "",
          experimentId: "",
        }));
        break;
      case "lab":
        setState((prev) => ({ ...prev, labId: value.id, experimentId: "" }));
        break;
      case "experiment":
        setState((prev) => ({ ...prev, experimentId: value.id }));
        break;
      default:
        break;
    }
  };
  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <Box sx={{ marginBottom: "1rem" }}>
            <Typography variant="h4" gutterBottom>
              Manage Experiments
            </Typography>
            <div>
              <label htmlFor="broadArea">Broad Area:</label>
              <Select
                styles={{
                  control: (css) => ({
                    ...css,
                    width: 500,
                  }),
                  menu: (css) => ({
                    ...css,
                    width: 500,
                  }),
                }}
                onChange={(e) => handleSelectChange(e, "broad")}
                options={broadOption}
              />
            </div>

            <div style={{ marginTop: 5 }}>
              <label htmlFor="broadArea">Labs:</label>
              <Select
                styles={{
                  control: (css) => ({
                    ...css,
                    width: 500,
                  }),
                  menu: (css) => ({
                    ...css,
                    width: 500,
                  }),
                }}
                onChange={(e) => handleSelectChange(e, "lab")}
                options={labOption}
              />
            </div>
            <label htmlFor="experiment">Experiments:</label>
            <Select
              styles={{
                control: (css) => ({
                  ...css,
                  width: 500,
                }),
                menu: (css) => ({
                  ...css,
                  width: 500,
                }),
              }}
              onChange={(e) => handleSelectChange(e, "experiment")}
              options={experimentOption}
            />
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
              {/* <Button
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
              </Button> */}
              {/* <Button
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
              </Button> */}

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
                onClick={() => handleButtonClick("documentation")}
                startIcon={<FontAwesomeIcon icon={faClipboardList} />}
                style={{
                  marginRight: "0.5rem",
                  border: "1px solid #ccc",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                  backgroundColor:
                    contentType === "documentation" ? "#f0f0f0" : "",
                }}
              >
                Documentation
              </Button>
              {/* <Button
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
              </Button> */}
              {/* <Button
                startIcon={<FontAwesomeIcon icon={faCommentAlt} />}
                style={{
                  marginRight: "1rem",
                  border: "1px solid #ccc",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                }}
              >
                Feedback
              </Button> */}
              {/* <Button
                startIcon={<FontAwesomeIcon icon={faPlus} />}
                style={{
                  border: "1px solid #ccc",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                }}
              ></Button> */}
            </div>
          </div>
          {contentType === "Simulation" && (
            <div>
              <input
                type="file"
                onChange={handleFileUpload}
                style={{ marginBottom: "1rem" }}
              />
            </div>
          )}
          {contentType === "documentation" && (
            <div>
              <input
                type="file"
                onChange={handleFileUpload}
                style={{ marginBottom: "1rem" }}
              />
            </div>
          )}
          {/* {contentType !== "Simulation" ? (
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
          )} */}
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
