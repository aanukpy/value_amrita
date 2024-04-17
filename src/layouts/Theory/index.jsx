import React from "react";
import WithExperimentLayout from "../../Components/common/ExperimentLayout";
import ReactQuill from "react-quill";
import "./quill.css";
import "react-quill/dist/quill.snow.css";
import { useSelector } from "react-redux";

const Theory = () => {
  const { labContent } = useSelector((state) => state.BroadArea);
  const { theory } = labContent;
  const modules = {
    toolbar: false,
  };

  return (
    <div style={{}}>
      <ReactQuill
        modules={modules}
        value={theory}
        className="my-custom-quill"
      />
    </div>
  );
};

const TheoryComponent = WithExperimentLayout(Theory);
export default TheoryComponent;
