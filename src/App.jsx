import React, { useState } from "react";

function HexEditor() {
  // State to store the hexadecimal data and offset
  const [hexData, setHexData] = useState("");
  const [offset, setOffset] = useState(0);

  // Function to handle changes in the hexadecimal data
  const handleHexChange = (event) => {
    setHexData(event.target.value);
  };

  // Function to handle changes in the offset
  const handleOffsetChange = (event) => {
    setOffset(parseInt(event.target.value, 10));
  };

  // Function to display the data with offset
  const getDataWithOffset = () => {
    return hexData.substring(offset * 2); // Multiply by 2 because each byte is represented by 2 characters
  };

  // Function to handle file drop
  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const arrayBuffer = e.target.result;
      const byteArray = new Uint8Array(arrayBuffer);
      const hexString = Array.from(byteArray)
        .map((byte) => ("00" + byte.toString(16)).slice(-2)) // Pad with leading zeros
        .join("");
      setHexData(hexString);
    };

    reader.readAsArrayBuffer(file);
  };

  // Function to prevent default behavior on drag over
  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <div onDrop={handleDrop} onDragOver={handleDragOver}>
      <h1>Hexadecimal Editor</h1>
      {/* Input field for offset */}
      <div>
        <label htmlFor="offset">Offset:</label>
        <input
          type="number"
          id="offset"
          value={offset}
          onChange={handleOffsetChange}
        />
      </div>
      {/* Input field for hexadecimal data */}
      <textarea
        value={getDataWithOffset()}
        onChange={handleHexChange}
        rows={20} // Increased number of rows for better visibility
        cols={80} // Increased number of columns for better visibility
        placeholder="Drop a file or enter hexadecimal data here..."
      />
    </div>
  );
}

export default HexEditor;
