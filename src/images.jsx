import React, { useState, useEffect } from "react";

const FileSignatureConverter = () => {
  const [file, setFile] = useState(null);
  const [signature, setSignature] = useState([]);
  const [showImage, setShowImage] = useState("");
  const [error, setError] = useState("");

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  useEffect(() => {
    calculateSignature();
  }, [file]);
  console.log(file);

  const calculateSignature = () => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      const arrayBuffer = event.target.result;
      const byteArray = new Uint8Array(arrayBuffer);
      const signature = convertToHex(byteArray.slice(0, byteArray.length - 1));
      setSignature(signature);
    };
    reader.readAsArrayBuffer(file);
  };

  const convertToHex = (byteArray) => {
    return Array.from(byteArray, (byte) =>
      ("0" + (byte & 0xff).toString(16)).slice(-2)
    ).join("");
  };

  const convert = () => {
    let cleanedHexString = signature.replace(/[^A-Fa-f0-9]/g, "");
    if (cleanedHexString.length % 2 !== 0) {
      console.log("Cleaned hex string length is odd.");
      return;
    }

    let binary = new Array();
    for (let i = 0; i < cleanedHexString.length / 2; i++) {
      let h = cleanedHexString.substr(i * 2, 2);
      binary[i] = parseInt(h, 16);
    }

    let byteArray = new Uint8Array(binary);
    let dataURL = window.URL.createObjectURL(
      new Blob([byteArray], { type: "application/octet-stream" })
    );
    setShowImage(dataURL);
  };

  return (
    <div>
      <h2>File Signature Converter</h2>
      <input type="file" onChange={handleFileChange} />
      <textarea style={{ width: 500, height: 500 }}>{signature}</textarea>

      <button onClick={convert}>Convert</button>
      {showImage && <img alt="no" src={showImage} />}
    </div>
  );
};

export default FileSignatureConverter;
