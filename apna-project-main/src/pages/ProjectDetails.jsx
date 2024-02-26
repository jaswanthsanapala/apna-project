import React, { useState } from "react";
import "./Student/projectdesc.css";
import img from "../Faculty/users.png";
import Home from "./Home.jsx";
import { click } from "@testing-library/user-event/dist/click";

function ProjectDesc(props) {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    if (!clicked) setClicked(!clicked);
  };
  return (
    <div className="background">
      <h1 className="random" style={{ marginTop: "60px" }}></h1>
      <div className="flex1">
        <div className="left1">
          <h1 className="projectdesc">_{Home.projectName}</h1>
          <p>_{Home.description}</p>
          <h2 className="projectdesc">Prerequisites</h2>
          <p>_{Home.prerequisites}</p>
          <h2 style={{ display: "inline-block" }}>
            <a className="styleh" href="" target="_blank">
              Resources
            </a>
          </h2>
          <p style={{ display: "inline-block" }}>(click for resources)</p>
          <h2 className="projectdesc">Required Fields</h2>
          <p>
            Upload Resume:
            <input
              type="file"
              id="resume"
              name="resume"
              accept=".pdf"
              onChange={(event) => setResume(event.target.files[0])}
            />
          </p>
          <p>CPI:{Home.CPI}</p>
          <h2 className="projectdesc">Open For</h2>
          <p>__{Home.openFor}</p>
          <h2>Additional Details</h2>
          <textarea name="" id="" cols="30" rows="5">
            _{Home.additionalInformation}
          </textarea>
        </div>
        <div className="right1">
          <div>
            <img src={img} alt="profimg" /> {/* {props.img} */}
            <h3 className="profname">XXXXX</h3> {/* {props.name} */}
            <h5 style={{ textAlign: "left" }} className="profid">
              Email - ssss.iitk.ac.in
            </h5>{" "}
            {/* props.id */}
            <h5 style={{ textAlign: "left" }}>Department - CSE</h5>{" "}
            {/* props.dept */}
            <h5 style={{ textAlign: "left" }}>
              Reasearch Work - Lorem ipsum dolor sit amet.
            </h5>
          </div>
          <div>
            <button
              className="button"
              onClick={() => {
                if (!clicked) setClicked(!clicked);
              }}
            >
              {clicked ? "Requested" : "Request"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDesc;
