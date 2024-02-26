import React from "react";
import { Link } from "react-router-dom";
import Home from "./Home.jsx";

function StudentCard({ color }) {
  return (
    <div className="studentCard" style={{ background: color }}>
      <div className="box1">
        <div className="left">
          <p className="style padding">XXXXXXXX</p>
        </div>
        <div className="right">
          <p className="style border">{Home.projectName}</p>
          <div className="right-div">__{Home.description}</div>
        </div>
      </div>
      <div className="box2">
        <div className="prereq">
          <h4>Pre-Requisite</h4>
        </div>
        <div className="desc">
          <p>
            {Home.prerequisites}
          </p>
        </div>
        <div className="flex">
          <div>
            <p>
              <span>Students registered</span>:2/_{Home.maxStudents}
            </p>
          </div>
          <div className="style">
            <Link className="Link" to="/ProjectDetails">
              View
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function Prof() {
  let dummyArray = [{ id: "Recent", a: [1, 2], color: "red" }];
  return (
    <div>
      {dummyArray.map((item) => (
        <div>
          <h1 className="projectTitle" style={{ background: item.color }}>
            {item.id}
          </h1>{" "}
          {/* Moved item.id to a separate line */}
          <div className="flexcard">
            {item.a.map((i) => (
              <StudentCard color={item.color} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Prof;