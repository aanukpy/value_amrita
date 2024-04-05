import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  TextField,
  Button,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";

const DataTable = () => {
  const [data, setData] = useState([
    {
      id: 1,
      name: "Bio Technology",
      description:
        "Study of living organisms and their application in technology",
    },
    {
      id: 2,
      name: "Computer Science",
      description:
        "Study of algorithms, data structures, and software engineering",
    },
    {
      id: 3,
      name: "Physics",
      description:
        "Study of matter, energy, and the fundamental forces of nature",
    },
    {
      id: 4,
      name: "Chemical Science",
      description: "Study of chemical compounds, reactions, and properties",
    },
    {
      id: 5,
      name: "Mechanical Engineering",
      description: "Study of machines, materials, and mechanical systems",
    },
    {
      id: 6,
      name: "Electronics",
      description: "Study of electronic components, circuits, and systems",
    },
  ]);

  const [editIndex, setEditIndex] = useState(-1); // Index of the row being edited
  const [editName, setEditName] = useState(""); // Edited name value
  const [editDescription, setEditDescription] = useState(""); // Edited description value

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const handleEdit = (id, name, description) => {
    setEditIndex(id);
    setEditName(name);
    setEditDescription(description);
  };

  const handleSave = (id) => {
    setData(
      data.map((item) => {
        if (item.id === id) {
          return { ...item, name: editName, description: editDescription };
        }
        return item;
      })
    );
    setEditIndex(-1); // Reset edit state after saving
  };

  const handleCancel = () => {
    setEditIndex(-1); // Reset edit state without saving
  };

  return (
    <>
    <h4>Broad Areas</h4>
    <TableContainer component={Paper} style={{width:'60%'}}>
      <Table sx={{ minWidth: 400 }} aria-label="simple table w-50">
        <TableHead>
          <TableRow>
            <TableCell>Sl No</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Manage</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={row.id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>
                {editIndex === row.id ? (
                  <TextField
                    value={editName}
                    onChange={(e) => setEditName(e.target.value)}
                  />
                ) : (
                  row.name
                )}
              </TableCell>
              <TableCell>
                {editIndex === row.id ? (
                  <TextField
                    value={editDescription}
                    onChange={(e) => setEditDescription(e.target.value)}
                  />
                ) : (
                  row.description
                )}
              </TableCell>
              <TableCell>
                {editIndex === row.id ? (
                  <>
                    <Button
                      variant="contained"
                      onClick={() => handleSave(row.id)}
                    >
                      Save
                    </Button>
                    <Button variant="contained" onClick={handleCancel}>
                      Cancel
                    </Button>
                  </>
                ) : (
                  <>
                    <IconButton
                      aria-label="edit"
                      onClick={() =>
                        handleEdit(row.id, row.name, row.description)
                      }
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      aria-label="delete"
                      onClick={() => handleDelete(row.id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                    <IconButton aria-label="view">
                      <VisibilityIcon />
                    </IconButton>
                  </>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
};

export default DataTable;
