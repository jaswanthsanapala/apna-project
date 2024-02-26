import React, { useState } from "react";
import "./Home.css";

const Home = () => {
  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");
  const [prerequisites, setPrerequisites] = useState("");
  const [openFor, setOpenFor] = useState("");
  const [additionalInformation, setAdditionalInformation] = useState("none");
  const [cpi, setCPI] = useState("");
  const [resume, setResume] = useState("none");
  const [maxStudents, setMaxStudents] = useState("none");
  const [clicked, setClicked] = useState(false);

  const handleSave = () => {
    console.log("Project Name:", projectName);
    console.log("Description", description);
    console.log("Prerequisites:", prerequisites);
    console.log("Open For", openFor);
    console.log("Additional Information:", additionalInformation);
    console.log("CPI:",cpi);
    console.log("Resume:", resume);
    console.log("Maximum number of Students:", maxStudents);
  };

  const handleCancel = () => {
    setProjectName("");
    setDescription("");
    setPrerequisites("none");
    setOpenFor("none")
    setAdditionalInformation("none");
    setCPI("none");
    setResume("none");
    setMaxStudents("none");
  };

  const handleclick = () => {
    if (!clicked) setClicked(!clicked);
  };

  return (
    <div class="project-details-container">
      <h1>.</h1>
      <form>
        <label htmlFor="project-name">Project Name:</label>
        <input
          type="text"
          id="project-name"
          name="project-name"
          value={projectName}
          onChange={(event) => setProjectName(event.target.value)}
        />

        <label htmlFor="Description">Description:</label>
        <input
          type="text"
          id="Description"
          name="Description"
          placeholder="About the Project"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />

        <label htmlFor="prerequisites">Prerequisites:</label>
        <input
          type="text"
          id="prerequisites"
          name="prerequisites"
          placeholder="Technical Skills or Relevant courses"
          value={prerequisites}
          onChange={(event) => setPrerequisites(event.target.value)}
        />

        <label htmlFor="open_for">Open For:</label>
        <input
          type="text"
          id="openFor"
          name="openFor"
          placeholder="Batches"
          value={openFor}
          onChange={(event) => setOpenFor(event.target.value)}
        />

        <label htmlFor="additional-information">Additional Information:</label>
        <select
          id="additional-information"
          name="additional-information"
          value={additionalInformation}
          onChange={(event) => setAdditionalInformation(event.target.value)}
        >
          <option value="none">None</option>
          <option value="interview">Interview</option>
          <option value="written-test">Written Test</option>
        </select>

        <label htmlFor="cpi">CPI:</label>
        <input
          type="text"
          id="cpi"
          name="cpi"
          value={cpi}
          onChange={(event) => setCPI(event.target.value)}
        />

        <label htmlFor="resume">Resume:</label>
        <input
          type="file"
          id="resume"
          name="resume"
          accept=".pdf"
          onChange={(event) => setResume(event.target.files[0])}
        />

        <label htmlFor="max-students">Maximum Number of Students</label>
        <input
          type="number"
          id="max-students"
          name="max-students"
          value={maxStudents}
          onChange={(event) => setMaxStudents(event.target.value)}
        />

        <button className="button" onClick={handleclick}>
          {clicked ? "Saved" : "Save"}
        </button>
        <button type="button" id="cancel-button" onClick={handleCancel}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default Home;
