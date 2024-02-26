import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import NavBar from "./pages/NavBar";
import LogOut from "./pages/LogOut";
import Student from "./pages/Student";
import Faculty from "./pages/Faculty"
import Login from "./pages/Login";
import Home from "./pages/Home";
import ProjectDesc from "./components/Student/ProjectDesc";
import Profile from "./pages/Profile";
import Prof from "./pages/Prof";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="LogOut" element={<LogOut />} />
          <Route path="ProjectDesc" element={<ProjectDesc />} />
          <Route path="Login" element={<Login />} />
          <Route path="Student" element={<Student />} />
          <Route path="Faculty" element={<Faculty />} />
          <Route path="About" element={<About />} />
          <Route path="Profile" element={<Profile/>}/>
          <Route path="Prof" element={<Prof/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
