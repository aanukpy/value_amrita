import React, { useState } from "react";
import "./Dashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import Fade from "react-reveal/Fade"; // Import the Fade component
const Labs = () => {
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
  const [newLab, setNewLab] = useState({
    labName: "",
    description: "",
  });

  const [editLab, setEditLab] = useState(null);

  const handleAddLab = () => {
    setLabs([...labs, newLab]);
    setNewLab({ labName: "", description: "" });
  };

  const handleEditLab = () => {
    const updatedLabs = labs.map((lab) => {
      if (lab.id === editLab.id) {
        return editLab;
      }
      return lab;
    });
    setLabs(updatedLabs);
    setEditLab(null);
  };

  const handleDeleteLab = (id) => {
    const updatedLabs = labs.filter((lab) => lab.id !== id);
    setLabs(updatedLabs);
  };

  return (
    <Fade up duration={1000} delay={200}>
      <div className="container-xl">
        <div className="table-responsive">
          <div className="table-wrapper">
            <div className="table-title">
              <div className="row">
                <div className="col-sm-6">
                  <h2>
                    Manage <b>Labs</b>
                  </h2>
                </div>
                <div className="col-sm-6">
                  <button
                    className="btn btn-success"
                    data-toggle="modal"
                    onClick={() => {
                      /* Add New Lab logic */
                    }}
                  >
                    <FontAwesomeIcon icon={faEdit} /> <span>Add New Lab</span>
                  </button>
                  <button
                    className="btn btn-danger"
                    data-toggle="modal"
                    onClick={() => {
                      /* Delete Lab logic */
                    }}
                  >
                    <FontAwesomeIcon icon={faTrash} /> <span>Delete</span>
                  </button>
                </div>
              </div>
            </div>
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Lab Name</th>
                  <th>Description</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {labs.map((lab) => (
                  <tr key={lab.id}>
                    <td>{lab.id}</td>
                    <td>{lab.labName}</td>
                    <td>{lab.description}</td>
                    <td>
                      <button
                        className="edit"
                        data-toggle="modal"
                        onClick={() => {
                          /* Edit Lab logic */
                        }}
                      >
                        <FontAwesomeIcon icon={faEdit} />
                      </button>
                      <button
                        className="delete"
                        data-toggle="modal"
                        onClick={() => {
                          /* Delete Lab logic */
                        }}
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {/* <div className="clearfix">
              <div className="hint-text">
                Showing <b>5</b> out of <b>{labs.length}</b> entries
              </div>
              <ul className="pagination">
                <li className="page-item disabled">
                  <a href="#">Previous</a>
                </li>
               
                <li className="page-item">
                  <a href="#" className="page-link">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a href="#" className="page-link">
                    2
                  </a>
                </li>
                <li className="page-item active">
                  <a href="#" className="page-link">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a href="#" className="page-link">
                    4
                  </a>
                </li>
                <li className="page-item">
                  <a href="#" className="page-link">
                    5
                  </a>
                </li>
                <li className="page-item">
                  <a href="#">Next</a>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
        <div
          className="modal fade"
          id="addLabModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="addLabModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="addLabModalLabel">
                  Add New Lab
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="labName">Lab Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="labName"
                      value={newLab.labName}
                      onChange={(e) =>
                        setNewLab({ ...newLab, labName: e.target.value })
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea
                      className="form-control"
                      id="description"
                      rows="3"
                      value={newLab.description}
                      onChange={(e) =>
                        setNewLab({ ...newLab, description: e.target.value })
                      }
                    ></textarea>
                  </div>
                </form>
              </div>
              j
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleAddLab}
                >
                  Add Lab
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Edit Lab Modal */}
        <div
          className="modal fade"
          id="editLabModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="editLabModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="editLabModalLabel">
                  Edit Lab
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="editLabName">Lab Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="editLabName"
                      value={editLab?.labName}
                      onChange={(e) =>
                        setEditLab({ ...editLab, labName: e.target.value })
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="editDescription">Description</label>
                    <textarea
                      className="form-control"
                      id="editDescription"
                      rows="3"
                      value={editLab?.description}
                      onChange={(e) =>
                        setEditLab({ ...editLab, description: e.target.value })
                      }
                    ></textarea>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleEditLab}
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Labs;
