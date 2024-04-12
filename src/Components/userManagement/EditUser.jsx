import React, { useEffect } from "react";
import Table from "../common/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { userRoleForAdmin } from "../../utilits/common/userDetails";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";
import AddUser from "./AddUser";
import { Base64 } from "js-base64";
import { updateResisterData } from "../../redux/slices/authReducer";

const EditUser = ({
  color,
  isEdit,
  data,
  state,
  onHandleChange,
  userdetailfun,
}) => {
  const { showEditPageDetails, userDetails } = useSelector(
    (state) => state.userManagement
  );
  const { registerData } = useSelector((state) => state.auth);

  const filterDetails = userDetails
    ?.filter((item) => item.email === showEditPageDetails?.userEmail)
    .map((item) => ({
      password: item.password,
      confirmpassword: item.password,
      role: item.role,
      fullname: item.fullname,
      age: item.age,
      email: item.email,
      gender: item.gender,
      phonenumber: item.phonenumber,
      state: item.state,
      country: item.country,
      profession: item.profession,
      college: item.college,
      subject: item.subject,
      university: item.university,
      schoolId: item.schoolId,
      userId: item._id,
    }));
  console.log(userDetails);
  const tableData = data?.map((item, index) => {
    return {
      id: index + 1,
      name: item.fullname,
      email: item.email,
      role: userRoleForAdmin(item.role),
      schoolid: item.schoolId,
      created: moment(item.registerDate).format("DD-MM-YYYY hh:mm"),
    };
  });
  const dispatch = useDispatch();
  useEffect(() => {
    if (isEdit && showEditPageDetails?.showAdd) {
      dispatch(updateResisterData(filterDetails[0]));
    }
    userdetailfun();
    console.log("hello");
  }, [isEdit, showEditPageDetails?.showAdd]);
  console.log("hi", registerData);
  return (
    <div style={{ width: "100%", height: "100%" }}>
      {isEdit && showEditPageDetails?.showAdd ? (
        <AddUser
          state={registerData}
          onHandleChange={onHandleChange}
          isEdit
          isEditAdd={showEditPageDetails?.showAdd}
        />
      ) : (
        <>
          <form
            className="d-sm- form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search w-100 "
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div style={{ width: 500 }} className="input-group">
              <input
                type="text"
                className="form-control bg-light border-0 small"
                placeholder="search for email or name"
                aria-label="Search"
                aria-describedby="basic-addon2"
              />
              <div className="input-group-append">
                <button className={`btn btn-${color}`} type="button">
                  <FontAwesomeIcon icon={faSearch} />
                </button>
              </div>
            </div>
          </form>
          <Table isEdit={isEdit} color={color} data={tableData} />
        </>
      )}
    </div>
  );
};

export default EditUser;
