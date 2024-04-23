import WithExperimentLayout from "../../Components/common/ExperimentLayout";
// import ReactQuill from "react-quill";
// import "./quill.css";
// import "react-quill/dist/quill.snow.css";
// import { useSelector } from "react-redux";
// import { Component } from "react";
// import Markdown from "markdown-to-jsx";
import React, { useState, useEffect } from "react";
//  import README from '/src/layouts/Theory/aim.md'
import ReactMarkdown from 'react-markdown'
const Theory = () => {
  const [markdownContent, setMarkdownContent] = useState('');

  useEffect(() => {
    fetch('/src/layouts/Theory/aim.md') // Adjust the path if necessary
      .then((response) => response.text())
      .then((text) => setMarkdownContent(text))
      .catch((error) => console.error('Error fetching Markdown:', error));
  }, []);

  return (
    <div>
      <h1>Markdown Preview</h1>
      <ReactMarkdown>{markdownContent}</ReactMarkdown>
    </div>
  );
}



const TheoryComponent = WithExperimentLayout(Theory);
export default TheoryComponent;
