import React from 'react'
import img from '../components/Faculty/users.png'

function Profile() {
    return (
        <div>
            <img src={img} alt="student pic" />
            <div>
                <h3 style={{ display: "inline-block" }}>Name</h3>
                <h1 style={{ display: "inline-block" }}>xxx</h1>
            </div>
            <div>
                <h3 style={{ display: "inline-block" }}>Roll No</h3>
                <h1 style={{ display: "inline-block" }}>220xxx</h1>
            </div>
            <div>
                <h3 style={{ display: "inline-block" }}>Email Id</h3>
                <h1 style={{ display: "inline-block" }}>xxx.iitk.ac.in</h1>
            </div>
            <div>
                <h3 style={{ display: "inline-block" }}>Department</h3>
                <h1 style={{ display: "inline-block" }}>Computer Science</h1>
            </div>
            <div>
                <h3 style={{ display: "inline-block" }}>Project History</h3>
                <ul>
                    <li>WEB DEV</li>
                    <li>WEB DEV</li>
                    <li>WEB DEV</li>
                </ul>
            </div>
        </div>
    )
}

export default Profile
