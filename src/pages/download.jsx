import React, { useState } from "react";

const Download = () => {
  const [selectedFile, setSelectedFile] = useState("");

  // Example files - Replace with real API call if needed
  const files = [
    { name: "Math Notes", url: "/downloads/math_notes.pdf" },
    { name: "Science Guide", url: "/downloads/science_guide.pdf" },
    { name: "History Summary", url: "/downloads/history_summary.pdf" },
  ];

  const handleDownload = () => {
    if (!selectedFile) {
      alert("Please select a file to download.");
      return;
    }
    window.location.href = selectedFile;
  };

  return (
    <section id="download">
      <div className="download-container">
        <h2>Download Your File</h2>
        
        {/* File Selection */}
        <div className="input-group">
          <label htmlFor="file-select">Choose Your File:</label>
          <select
            id="file-select"
            value={selectedFile}
            onChange={(e) => setSelectedFile(e.target.value)}
          >
            <option value="">-- Select File --</option>
            {files.map((file, index) => (
              <option key={index} value={file.url}>
                {file.name}
              </option>
            ))}
          </select>
        </div>

        {/* Download Button */}
        <button
          className="download-button"
          id="download-btn"
          onClick={handleDownload}
          disabled={!selectedFile} // Disabled if no file is selected
        >
          Download
        </button>
      </div>
    </section>
  );
};

export default Download;
