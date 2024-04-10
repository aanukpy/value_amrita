import React from "react";
import { addUserDetails } from "../../Data/userManagement";
import TextField from "@mui/material/TextField";

const AddUser = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
      }}
    >
      {addUserDetails.map((item) => {
        return item.isInput ? (
          <TextField
            style={{
              width: 350,
              marginBlock: 15,
            }}
            key={item.id}
            id="outlined-basic"
            label={item.title}
            variant="outlined"
          />
        ) : (
          <select
            style={{
              width: 350,
              marginBlock: 15,
              padding: "16px 14px",
              outlineColor: "#4e73df",
            }}
            // onChange={onHandleChange}
            // value={profession}
          >
            <option value="">-- Select {item.title} --</option>
            {item.subValue.map((sub) => {
              return (
                <option key={sub.id} value={sub.value}>
                  {sub.value}
                </option>
              );
            })}
          </select>
        );
      })}
    </div>
  );
};

export default AddUser;
