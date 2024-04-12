import React, { useState } from "react";
import { Upload, message } from "antd";

import { useDispatch } from "react-redux";
import { csvToJSON } from "../../helpers/csvToArray";
import { addBulUserData } from "../../redux/slices/userManagementReducer";

const CsvUploadComponent = ({ color }) => {
  const [fileList, setFileList] = useState([]);
  const dispatch = useDispatch();
  const beforeUpload = (file) => {
    const isCSV = file.type === "text/csv";
    if (!isCSV) {
      message.error("Please upload a CSV file only!");
      return Upload.LIST_IGNORE;
    }
    return true;
  };

  const handleChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);

    if (newFileList.length > 0) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const csvData = event.target.result;
        const data = csvToJSON(csvData);
        console.log(data);
        dispatch(addBulUserData(data));
      };
      reader.readAsText(newFileList[0].originFileObj);
    }
  };

  const props = {
    name: "file",
    multiple: false,
    accept: ".csv",
    beforeUpload,
    onChange: handleChange,
    fileList,
  };

  return (
    <Upload {...props}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
          justifyContent: "center",
          width: 500,
          height: 300,
          background: "#fefefe",
          borderRadius: 50,
          borderStyle: "dashed",
          borderWidth: 1,
        }}
      >
        <i
          className={`fa-solid fa-upload text-${color}`}
          style={{ marginRight: 10, marginTop: 7 }}
        />
        <div style={{ marginTop: 8 }} className={`text-${color}`}>
          Upload (.csv)
        </div>
      </div>
    </Upload>
  );
};

export default CsvUploadComponent;
