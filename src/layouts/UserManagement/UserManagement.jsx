import React from "react";
import Card from "../../Components/userManagement/Card";
import { userManagementData } from "../../Data/userManagement";
import { useSelector, useDispatch } from "react-redux";
import { ExclamationCircleFilled } from "@ant-design/icons";
import {
  addBulkUserAction,
  clearEditForm,
  editUserAction,
  getUserDetails,
  modifyCardColor,
  modifyCrudOperation,
  openUploadComponent,
  updateDeletePage,
  updateEditPage,
  updateEditUser,
} from "../../redux/slices/userManagementReducer";
import AddUser from "../../Components/userManagement/AddUser";
import EditUser from "../../Components/userManagement/EditUser";
import DeleteUser from "../../Components/userManagement/DeleteUser";
import {
  clearState,
  register,
  updateResisterData,
} from "../../redux/slices/authReducer";
import Snackbar from "../../Components/common/snackbar";
import { Base64 } from "js-base64";
import { Modal } from "antd";
import {
  roleToNumber,
  userRoleForAdmin,
} from "../../utilits/common/userDetails";
import { getValue } from "../../helpers/localStorage";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import CSVUploader from "../../CSVfile";
import { csvToJSON } from "../../helpers/csvToArray";
import CsvUploadComponent from "../../Components/common/CsvUpload";

const UserManagement = () => {
  const {
    crudId,
    cardColor,
    userDetails,
    showEditPageDetails,
    editUser,
    showDeletePageDetails,
    openUpload,
    bulkUserData,
  } = useSelector((state) => state.userManagement);
  const { registerData } = useSelector((state) => state.auth);
  const { fullname = "admin", email, schoolId } = registerData;
  console.log(showDeletePageDetails);
  const validationForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "" || fullname === "" || schoolId === "") {
      if (fullname === "") {
        Snackbar({
          type: "info",
          content: "Please enter valid first name",
        });
      } else if (!emailRegex.test(email)) {
        Snackbar({
          type: "info",
          content: "Please enter a valid mail",
        });
      } else if (schoolId === "") {
        Snackbar({
          type: "info",
          content: "School ID is mandatory",
        });
      }
    }
  };
  const dispatch = useDispatch();
  const onHandleClick = (id, color) => {
    dispatch(modifyCrudOperation(id));
    dispatch(modifyCardColor(color));
    dispatch(clearEditForm());

    dispatch(clearState());
  };
  const userdetailfun = () => {
    const userRole = getValue("userRole");
    dispatch(getUserDetails({ userRole }));
  };
  const onHandleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    dispatch(
      updateResisterData({
        ...registerData,
        [name]: value,
      })
    );
    dispatch(
      updateEditUser({
        ...editUser,
        [name]: value,
      })
    );
  };
  const onAddUser = () => {
    try {
      validationForm();

      if (
        fullname.trim() !== "" &&
        email.trim() !== "" &&
        schoolId.trim() !== ""
      ) {
        const data = {
          ...registerData,
          password: Base64.encode("@mritaV2024"),
          confirmpassword: Base64.encode("@mritaV2024"),
        };
        dispatch(register(data));
      }
    } catch (error) {
      Snackbar({
        type: "error",
        content: "Please enter mandatory fields",
      });
    }
  };
  const onBulkAddUser = () => {
    try {
      const filterData = bulkUserData?.map((item) => {
        return {
          ...item,
          password:
            item.password !== ""
              ? Base64.encode(item.password)
              : Base64.encode("@mritaV2024"),
          role:
            item.role !== "" ? roleToNumber(item.role.toUpperCase()) : "GUEST",
          gender:
            item.gender !== ""
              ? item.gender.toUpperCase() === "M"
                ? "Male"
                : item.gender.toUpperCase() === "F"
                ? "Female"
                : item.gender.toUpperCase() === "O"
                ? "Others"
                : "Male"
              : "Male",
        };
      });
      dispatch(addBulkUserAction(filterData));
    } catch (error) {
      Snackbar({
        type: "error",
        content: "Please enter mandatory fields",
      });
    }
  };
  const onDelete = () => {
    try {
      const data = {
        data: editUser,
        query: {
          id: registerData.userId,
        },
      };

      dispatch(editUserAction(data));
      dispatch(clearEditForm());
    } catch (error) {
      Snackbar({
        type: "error",
        content: "Something went wrong",
      });
    }
  };
  const onEditUser = () => {
    try {
      const data = {
        data: editUser,
        query: {
          id: registerData.userId,
        },
      };

      dispatch(editUserAction(data));
      dispatch(clearEditForm());
    } catch (error) {
      Snackbar({
        type: "error",
        content: "Something went wrong",
      });
    }
  };
  const handleClose = () => {
    dispatch(
      updateDeletePage({
        showAdd: false,
        userEmail: "",
      })
    );
  };
  console.log(bulkUserData);
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
            style={{ marginRight: 10, marginTop: 7 }}
            onClick={() => dispatch(openUploadComponent(true))}
          />
        </div>
        <div className="card-body">
          <div
            style={{
              height: "500px",
              maxHeight: "auto",
              minHeight: "auto",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {crudId === 1 ? (
              <>
                {" "}
                {openUpload ? (
                  <CsvUploadComponent color={cardColor} />
                ) : (
                  <AddUser
                    onHandleChange={onHandleChange}
                    state={registerData}
                  />
                )}
              </>
            ) : crudId === 2 ? (
              <EditUser
                color={cardColor}
                isEdit
                data={userDetails}
                onHandleChange={onHandleChange}
                state={registerData}
                userdetailfun={userdetailfun}
              />
            ) : (
              <EditUser
                color={cardColor}
                isEdit={false}
                data={userDetails}
                userdetailfun={userdetailfun}
              />
            )}
          </div>
        </div>
        {crudId === 1 && (
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <button
              style={{ marginRight: 50, marginBottom: 25, width: 150 }}
              className={`btn btn-${cardColor}`}
              onClick={openUpload ? onBulkAddUser : onAddUser}
            >
              {" "}
              ADD
            </button>
          </div>
        )}
        {crudId === 2 && showEditPageDetails?.showAdd && (
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <button
              style={{ marginRight: 30, marginBottom: 25, width: 150 }}
              className={`btn btn-${cardColor}`}
              onClick={() => dispatch(clearEditForm())}
            >
              {" "}
              Cancel
            </button>
            <button
              style={{ marginRight: 50, marginBottom: 25, width: 150 }}
              className={`btn btn-${cardColor}`}
              onClick={onEditUser}
              disabled={Object.keys(editUser).length === 0}
            >
              {" "}
              Edit
            </button>
          </div>
        )}
      </div>
      {showDeletePageDetails.showAdd && (
        <Modal
          title="Confirm Delete"
          visible={showDeletePageDetails.showAdd}
          onOk={onDelete}
          onCancel={handleClose}
          confirmLoading={false} // Disable default loading indicator
          centered
        >
          <p>
            <ExclamationCircleOutlined
              style={{ color: "red", fontweight: 700, marginRight: 10 }}
            />
            Are you sure you want to delete this user?
          </p>
        </Modal>
      )}
    </div>
  );
};

export default UserManagement;
