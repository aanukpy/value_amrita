import React from "react";
import Table from "../common/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const EditUser = ({ color, isEdit }) => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
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
      <Table isEdit={isEdit} color={color} />
    </div>
  );
};

export default EditUser;
