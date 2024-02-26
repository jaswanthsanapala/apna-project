import React from "react";
import { Outlet, Link } from "react-router-dom";

function NavBar(){
    return(
        <>
     <div className="nav">
        <div className="heading">
            <img className="logo" src="images/iitk.gif" alt="" />
            <h1>ProfInfo Central</h1>
        </div>
         <ul>
             <li><Link className="a" to="/Profile">Profile</Link></li>
             <li><Link className="a" to="/Login">Log in</Link></li>
             <li><Link className="a" to="/Faculty">Faculty</Link></li>
             <li><Link className="a" to="/About">About</Link></li>
             <li><Link className="a" to="/Student">Student</Link></li>
             <li><Link className="a" to="/">Home</Link></li>
             <li><Link className="a" to="/Prof">Prof</Link></li>
       </ul>
       
    </div>
    <Outlet />
    </>
    );
}

export default NavBar;