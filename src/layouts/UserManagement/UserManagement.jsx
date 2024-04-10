import React from "react";
import Card from "../../Components/userManagement/Card";
import { userManagementData } from "../../Data/userManagement";
import { useSelector, useDispatch } from "react-redux";
import {
  modifyCardColor,
  modifyCrudOperation,
} from "../../redux/slices/userManagementReducer";
import AddUser from "../../Components/userManagement/AddUser";
import EditUser from "../../Components/userManagement/EditUser";
import DeleteUser from "../../Components/userManagement/DeleteUser";

const UserManagement = () => {
  const { crudId, cardColor } = useSelector((state) => state.userManagement);
  const dispatch = useDispatch();
  const onHandleClick = (id, color) => {
    dispatch(modifyCrudOperation(id));
    dispatch(modifyCardColor(color));
  };

  return (
    <div>
      <div className="row">
        {userManagementData.map((item) => {
          return <Card key={item.id} item={item} onClick={onHandleClick} />;
        })}
      </div>
      <div className="card shadow mb-4">
        <div
          className={`card-header py-3 d-flex flex-row align-items-center justify-content-between border-left-${cardColor}`}
        >
          <h6 className={`m-0 font-weight-bold text-${cardColor}`}>
            {crudId === 1 ? (
              <i className={`fa-solid fa-users`} style={{ marginRight: 10 }} />
            ) : crudId === 2 ? (
              <i
                className={`fa-solid fa-pencil-square`}
                style={{ marginRight: 10 }}
              />
            ) : (
              <i className={`fa-solid fa-trash`} style={{ marginRight: 10 }} />
            )}
            {crudId === 1
              ? "ADD USERS"
              : crudId === 2
              ? "EDIT USERS"
              : "DELETE USERS"}
          </h6>
          <i
            className={`fa-solid fa-upload text-${cardColor}`}
            style={{ marginRight: 10 }}
          />
        </div>
        <div className="card-body">
          <div
            style={{
              height: "500px",
              maxHeight: "auto",
              minHeight: "auto",
              display: "flex",
            }}
          >
            {crudId === 1 ? (
              <AddUser />
            ) : crudId === 2 ? (
              <EditUser color={cardColor} isEdit />
            ) : (
              <EditUser color={cardColor} isEdit={false} />
            )}
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <button
            style={{ marginRight: 50, marginBottom: 25, width: 150 }}
            className={`btn btn-${cardColor}`}
          >
            {crudId === 1 ? "ADD" : crudId === 2 ? "UPDATE" : "DELETE"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
