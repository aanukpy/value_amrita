import React, { useState } from 'react';

const Labs = () => {
  const [newLabName, setNewLabName] = useState('');
  const [newLabDescription, setNewLabDescription] = useState('');
  const [labs, setLabs] = useState([
    { id: 1, name: "Lab 1", description: "This is lab 1 description" },
    { id: 2, name: "Lab 2", description: "This is lab 2 description" },
    { id: 3, name: "Lab 3", description: "This is lab 3 description" },
    { id: 4, name: "Lab 4", description: "This is lab 4 description" },
    { id: 5, name: "Lab 5", description: "This is lab 5 description" }
  ]);

  const [demoLabs] = useState([
    { id: 1, name: "Demo Lab 1", description: "This is demo lab 1 description" },
    { id: 2, name: "Demo Lab 2", description: "This is demo lab 2 description" },
    { id: 3, name: "Demo Lab 3", description: "This is demo lab 3 description" },
    { id: 4, name: "Demo Lab 4", description: "This is demo lab 4 description" },
    { id: 5, name: "Demo Lab 5", description: "This is demo lab 5 description" }
  ]);

  const handleAddLab = () => {
    const newLab = {
      id: labs.length + 1,
      name: newLabName,
      description: newLabDescription
    };
    setLabs([...labs, newLab]);
    setNewLabName('');
    setNewLabDescription('');
  };

  const handleDeleteLab = (id) => {
    const updatedLabs = labs.filter(lab => lab.id !== id);
    setLabs(updatedLabs);
  };

  return (
    <div className="container">
      <div className="row">
        <h4>Computer Science</h4>
        <div className="col-md-offset-1 col-md-10 " style={{ height: '100vh' }}>
          <div className="panel">
            <div className="panel-heading">
              <div className="row">
                <div className="col-sm-12 col-xs-12" >
                  <button onClick={handleAddLab} className="btn btn-sm btn-primary pull-left"><i style={{ color: 'white' }} className="fa-solid fa-plus"></i> Add New</button>
                  <form className="form-horizontal pull-right">
                    <div className="form-group" >
                      <label>Show : </label>
                      <select className="form-control">
                        <option>5</option>
                        <option>10</option>
                        <option>15</option>
                        <option>20</option>
                      </select>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="panel-body table-responsive" >
              <table className="table" >
                <thead>
                  <tr>
                    <th>Action</th>
                    <th>#</th>
                    <th>Lab Name</th>
                    <th>Description</th>
                    <th>View</th>
                  </tr>
                </thead>
                <tbody>
                  {labs.map((lab) => (
                    <tr key={lab.id}>
                      <td>
                        <ul className="action-list">
                          <li><button className="btn btn-primary" onClick={() => handleEditLab(lab.id)}><i className="fas fa-pencil-alt"></i></button></li>
                          <li><button className="btn btn-danger" onClick={() => handleDeleteLab(lab.id)}><i className="fas fa-times"></i></button></li>
                        </ul>
                      </td>
                      <td>{lab.id}</td>
                      <td>{lab.name}</td>
                      <td>{lab.description}</td>
                      <td><button className="btn btn-sm btn-success"><i className="fas fa-search"></i></button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

    
    
    </div>
  );
};

export default Labs;
