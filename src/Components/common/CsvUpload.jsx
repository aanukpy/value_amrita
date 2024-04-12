import React, { useState } from "react";
import { Upload, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const CsvUploadComponent = ({ color }) => {
  const [fileList, setFileList] = useState([]);
  console.log(color);
  const beforeUpload = (file) => {
    const isCSV = file.type === "text/csv";
    if (!isCSV) {
      message.error("Please upload a CSV file only!");
      return Upload.LIST_IGNORE; // Prevent upload if not CSV
    }
    return true; // Allow upload if valid CSV
  };

  const handleChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);

    if (newFileList.length > 0) {
      // Handle the uploaded file(s) here
      const reader = new FileReader();
      reader.onload = (event) => {
        const csvData = event.target.result;
        // Process the CSV data (e.g., parse with Papa Parse)
        console.log("CSV data:", csvData); // Example logging
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
