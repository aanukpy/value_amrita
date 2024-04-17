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
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faTrash,
  faPlus,
  faSave,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import Select from "react-select";
import { Link } from "react-router-dom";
import WithExperimentLayout from "../../common/ExperimentLayout";
import { getBroadState } from "../../../redux/reselect/reselector";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUID } from "../../../helpers/uniqueId";
import { addLabDetails } from "../../../redux/slices/BroadAreaReducer";
import { memo } from "react";
import { useCallback } from "react";
import NodataComponent from "../../common/NodataComponent";

const initialState = () => {
  return {
    selectedBroadArea: "",
    selectedBroadId: "",
    labDetails: [],
  };
};

const Labs = () => {
  const BroadDetails = useSelector(getBroadState);

  const data = useCallback(() => BroadDetails, [BroadDetails]);
  const dispatch = useDispatch();
  const [state, setState] = useState(initialState());

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

  const [editedLabs, setEditedLabs] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [isNewLabOpen, setIsNewLabOpen] = useState(false);
  const [newLab, setNewLab] = useState({
    labName: "",
    description: "",
  });

  const broadAreas = BroadDetails?.map((item) => {
    return {
      label: item.broadAreaName,
      value: item.broadAreaName,
      id: item.broadAreaId,
    };
  });

  const filterLabDetails = () => {
    const filterLab = BroadDetails?.filter((item) => {
      return item?.broadAreaId === state.selectedBroadId;
    });
    setState((prev) => ({
      ...prev,
      labDetails: filterLab[0]?.labs || [],
    }));
  };
  useEffect(() => {
    filterLabDetails();
  }, [data, state.selectedBroadId]);
  console.log(state);
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
    try {
      const data = {
        labId: getUID(),
        labName: newLab.labName,
        description: newLab.description,
        broadId: state.selectedBroadId,
      };
      console.log(data);
      dispatch(addLabDetails(data));
      const newId = labs.length + 1;
      setLabs([...labs, { id: newId, ...newLab }]);
      setNewLab({ labName: "", description: "" });
      setIsNewLabOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancelNewLab = () => {
    setNewLab({ labName: "", description: "" });
    setIsNewLabOpen(false);
  };

  const handleDeleteLab = (labId) => {
    const updatedLabs = labs.filter((lab) => lab.id !== labId);
    setLabs(updatedLabs);
  };

  const handleSelectChange = (selectedOption) => {
    setState((prev) => ({
      ...prev,
      selectedBroadArea: selectedOption.value,
      selectedBroadId: selectedOption.id,
    }));
  };

  return (
    <div className="container-xl" style={{ margin: 0 }}>
      <div className="table-responsive">
        <Box sx={{ marginBottom: "1rem" }}>{/* Other components */}</Box>
        <Box sx={{ marginBottom: "1rem", marginTop: "50px" }}>
          <Typography variant="h4" gutterBottom>
            Manage Labs
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
              onChange={handleSelectChange}
              options={broadAreas}
            />
          </div>
        </Box>
        {!isNewLabOpen && (
          <Button
            variant="contained"
            color="primary"
            startIcon={<FontAwesomeIcon icon={faPlus} />}
            sx={{ marginBottom: "1rem" }}
            onClick={handleAddLab}
          >
            Add New Lab
          </Button>
        )}
        {isNewLabOpen && (
          <div style={{ display: "flex" }}>
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
          </div>
        )}
        {state.labDetails.length > 0 ? (
          <TableContainer
            component={Paper}
            sx={{
              border: "1px solid #ccc",
              borderRadius: "4px",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              marginTop: "1rem",
              width: "100%",
            }}
          >
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>No</TableCell>
                  <TableCell>Lab Name</TableCell>
                  <TableCell>Description</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {state.labDetails.map((lab, index) => (
                  <TableRow
                    key={lab.id}
                    sx={{ "&:hover": { backgroundColor: "#f5f5f5" } }}
                  >
                    <TableCell>{index + 1}</TableCell>
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
                            to={`/listing`}
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
        ) : (
          <NodataComponent />
        )}
      </div>
    </div>
  );
};

const LabsLayout = WithExperimentLayout(memo(Labs));
export default LabsLayout;
