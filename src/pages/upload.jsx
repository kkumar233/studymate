import React, { useState } from "react";

const Upload = () => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [customSubject, setCustomSubject] = useState("");
  const [showCustomSubject, setShowCustomSubject] = useState(false);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubjectChange = (event) => {
    const selectedSubject = event.target.value;
    setSubject(selectedSubject);

    // Show custom subject input if "Other" is selected
    if (selectedSubject === "other") {
      setShowCustomSubject(true);
    } else {
      setShowCustomSubject(false);
      setCustomSubject(""); // Reset custom subject
    }
  };

  const handleCustomSubjectChange = (event) => {
    setCustomSubject(event.target.value);
  };

  const handleUpload = () => {
    if (!file || !title || (!subject && !customSubject)) {
      alert("Please fill all fields and select a file.");
      return;
    }
    alert(`File "${file.name}" uploaded successfully!`);
  };

  return (
    <section id="upload">
      <div className="upload-container">
        <h2>Upload Your Study Material</h2>

        {/* Drag and Drop Box */}
        <div id="drop-zone">
          <p>Drag & Drop Your File Here</p>
          <input
            type="file"
            id="fileInput"
            accept=".pdf,.docx,.pptx,.jpg"
            onChange={handleFileChange}
            hidden
          />
          <button type="button" onClick={() => document.getElementById("fileInput").click()}>
            Browse Files
          </button>
        </div>

        {/* Title & Subject Fields */}
        <div className="input-group">
          <input
            type="text"
            value={title}
            onChange={handleTitleChange}
            placeholder="Enter Title"
            required
          />
        </div>

        <div className="input-group">
          <select id="subjectSelect" value={subject} onChange={handleSubjectChange}>
            <option value="">Select Subject</option>
            <option value="Math">Math</option>
            <option value="Science">Science</option>
            <option value="History">History</option>
            <option value="English">English</option>
            <option value="other">Other (Enter Below)</option>
          </select>
        </div>

        {showCustomSubject && (
          <div className="input-group">
            <input
              type="text"
              id="customSubject"
              value={customSubject}
              onChange={handleCustomSubjectChange}
              placeholder="Enter Custom Subject"
              required
            />
          </div>
        )}

        <button
          className="upload-button"
          onClick={handleUpload}
          disabled={!file || !title || (!subject && !customSubject)}
        >
          Upload →
        </button>
      </div>
    </section>
  );
};

export default Upload;
