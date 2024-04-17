import React, { useState } from "react";
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
  MenuItem,
  Select,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faTrash,
  faPlus,
  faSave,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import Fade from "react-reveal/Fade"; // Import the Fade component
import { Link, useLocation } from "react-router-dom";
import WithExperimentLayout from "../../common/ExperimentLayout";
import { getBroadState } from "../../../redux/reselect/reselector";
import { useDispatch, useSelector } from "react-redux";
const Listing = () => {
  const [selectedBroadArea, setSelectedBroadArea] = useState("");
  const [selectedLab, setSelectedLab] = useState("");
  const [selectedExperiment, setSelectedExperiment] = useState("");
  const [labs, setLabs] = useState([
    {
      id: 1,
      labName: "Network Security Lab",
      description:
        "Lab for studying network security protocols and techniques.",
    },
    {
      id: 2,
      labName: "Machine Learning Lab",
      description:
        "Lab for implementing and experimenting with machine learning algorithms.",
    },
    {
      id: 3,
      labName: "Database Management Lab",
      description:
        "Lab for learning and practicing database management concepts.",
    },
    {
      id: 4,
      labName: "Operating Systems Lab",
      description:
        "Lab for studying various operating systems and their components.",
    },
    {
      id: 5,
      labName: "Computer Vision Lab",
      description:
        "Lab for exploring computer vision techniques and applications.",
    },
    {
      id: 6,
      labName: "Cybersecurity Lab",
      description:
        "Lab for hands-on experience with cybersecurity tools and methodologies.",
    },
  ]);
 

  const handleLabChange = (event) => {
    setSelectedLab(event.target.value);
  };

  const handleExperimentChange = (event) => {
    setSelectedExperiment(event.target.value);
  };
  const [editedLabs, setEditedLabs] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [isNewLabOpen, setIsNewLabOpen] = useState(false);
  const [newLab, setNewLab] = useState({
    labName: "",
    description: "",
  });

  const handleEditLab = (labId) => {
    setIsEditing(true);
    const editedLabIndex = labs.findIndex((lab) => lab.id === labId);
    const labToEdit = labs[editedLabIndex];
    setEditedLabs({ ...editedLabs, [labId]: labToEdit });
  };

  const handleSaveLab = (labId) => {
    setIsEditing(false);
    const updatedLabs = labs.map((lab) => {
      if (lab.id === labId) {
        return editedLabs[labId];
      }
      return lab;
    });
    setLabs(updatedLabs);
    setEditedLabs({});
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditedLabs({});
  };

  const handleChange = (e, labId, field) => {
    const updatedLab = { ...editedLabs[labId], [field]: e.target.value };
    setEditedLabs({ ...editedLabs, [labId]: updatedLab });
  };

  const handleAddLab = () => {
    setIsNewLabOpen(true);
  };

  const handleSaveNewLab = () => {
    const newId = labs.length + 1;
    setLabs([...labs, { id: newId, ...newLab }]);
    setNewLab({ labName: "", description: "" });
    setIsNewLabOpen(false);
  };

  const handleCancelNewLab = () => {
    setNewLab({ labName: "", description: "" });
    setIsNewLabOpen(false);
  };

  const handleDeleteLab = (labId) => {
    const updatedLabs = labs.filter((lab) => lab.id !== labId);
    setLabs(updatedLabs);
  };

  const handleViewLab = (labId) => {
    // Handle view action here, for example, navigate to a new page to view lab details
    console.log(`Viewing lab with ID ${labId}`);
  };
  const BroadDetails = useSelector(getBroadState);

  const broadAreas = BroadDetails.map((item) => {
    return {
      label: item.broadAreaName,
      value: item.broadAreaName,
      id: item.broadAreaId,
    };
  });
  console.log(broadAreas);
  const handleBroadAreaChange = (event) => {
    setSelectedBroadArea(event.target.value);
  };

  return (

      <div className="container-xl" style={{ margin: 0 }}>
        <div className="table-responsive">
          <Box sx={{ marginBottom: "1rem", marginTop: "50px" }}>
            <Box sx={{ marginBottom: "1rem" }}>
              <Typography variant="h4" gutterBottom>
                Manage Experiments
              </Typography>
              <div>
            <label htmlFor="broadArea">Broad Area:</label>
            <select
              id="broadArea"
              value={selectedBroadArea}
              onChange={handleBroadAreaChange}
            >
              {broadAreas.map((area) => (
                <option key={area.value} value={area.value}>
                  {area.label}
                </option>
              ))}
            </select>
          </div>
              {/* <FormControl sx={{ minWidth: 200, marginRight: '1rem' }}>
  <InputLabel>Lab</InputLabel>
  <Select
    value={selectedLab}
    onChange={handleLabChange}
  >
    <MenuItem value="networkSecurityLab">Network Security Lab</MenuItem>
    <MenuItem value="machineLearningLab">Machine Learning Lab</MenuItem>
    <MenuItem value="databaseManagementLab">Database Management Lab</MenuItem>
    
  </Select>
</FormControl> */}
              <FormControl sx={{ minWidth: 200 }}>
                <InputLabel>Labs</InputLabel>
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
          </Box>
          {!isNewLabOpen && (
            <Button
              variant="contained"
              color="primary"
              startIcon={<FontAwesomeIcon icon={faPlus} />}
              sx={{ marginBottom: "1rem" }}
              onClick={handleAddLab}
            >
              Add New Experiment
            </Button>
          )}
          {isNewLabOpen && (
            <>
              <TextField
                label="Lab Name"
                value={newLab.labName}
                onChange={(e) =>
                  setNewLab({ ...newLab, labName: e.target.value })
                }
                sx={{ marginRight: "1rem" }}
              />
              <TextField
                label="Description"
                value={newLab.description}
                onChange={(e) =>
                  setNewLab({ ...newLab, description: e.target.value })
                }
                sx={{ marginRight: "1rem" }}
              />
              <Button
                variant="contained"
                color="primary"
                startIcon={<FontAwesomeIcon icon={faSave} />}
                onClick={handleSaveNewLab}
                sx={{ marginRight: "1rem" }}
              >
                Save
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={handleCancelNewLab}
              >
                Cancel
              </Button>
            </>
          )}
          <TableContainer
            component={Paper}
            sx={{
              border: "1px solid #ccc",
              borderRadius: "4px",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              marginTop: "1rem",
            }}
          >
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>No</TableCell>
                  <TableCell>Experiment Name</TableCell>
                  <TableCell>Description</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {labs.map((lab) => (
                  <TableRow
                    key={lab.id}
                    sx={{ "&:hover": { backgroundColor: "#f5f5f5" } }}
                  >
                    <TableCell>{lab.id}</TableCell>
                    <TableCell>
                      {isEditing && editedLabs[lab.id] ? (
                        <TextField
                          value={editedLabs[lab.id].labName}
                          onChange={(e) => handleChange(e, lab.id, "labName")}
                          fullWidth
                        />
                      ) : (
                        lab.labName
                      )}
                    </TableCell>
                    <TableCell>
                      {isEditing && editedLabs[lab.id] ? (
                        <TextField
                          value={editedLabs[lab.id].description}
                          onChange={(e) =>
                            handleChange(e, lab.id, "description")
                          }
                          fullWidth
                        />
                      ) : (
                        lab.description
                      )}
                    </TableCell>
                    <TableCell style={{ display: "flex" }}>
                      {isEditing ? (
                        <>
                          <Button
                            variant="contained"
                            color="primary"
                            startIcon={<FontAwesomeIcon icon={faSave} />}
                            onClick={() => handleSaveLab(lab.id)}
                            style={{ marginRight: "20px" }}
                          >
                            Save
                          </Button>
                          <Button
                            variant="contained"
                            color="secondary"
                            onClick={handleCancelEdit}
                            style={{ marginRight: "20px" }}
                          >
                            Cancel
                          </Button>
                        </>
                      ) : (
                        <>
                          <Button
                            variant="contained"
                            color="primary"
                            startIcon={<FontAwesomeIcon icon={faEdit} />}
                            style={{ marginRight: "20px" }}
                            onClick={() => handleEditLab(lab.id)}
                          >
                            Edit
                          </Button>
                          <Button
                            component={Link}
                            to={`editExperiment`}
                            variant="contained"
                            color="success"
                            startIcon={<FontAwesomeIcon icon={faEye} />}
                            style={{ marginRight: "20px" }}
                          >
                            View
                          </Button>
                          <Button
                            variant="contained"
                            color="secondary"
                            startIcon={<FontAwesomeIcon icon={faTrash} />}
                            onClick={() => handleDeleteLab(lab.id)}
                            style={{ marginRight: "20px" }}
                          >
                            Delete
                          </Button>
                        </>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>

  );
};

const ListingLayout = WithExperimentLayout(Listing);

export default ListingLayout;
