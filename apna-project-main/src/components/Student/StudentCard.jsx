import React from 'react'
import './studentcard.css'
import img from '../Faculty/users.png'
import { Link } from 'react-router-dom'
import ProjectDesc from './ProjectDesc'

function StudentCard({color}) {
    return (
        <div className='studentCard' style={{ background: color}}>
            <div className='box1'>
                <div className="left">
                    <img className="student-img" src={img} alt='student' /> <br />
                    <p className='style padding'>XXXXXXXX</p>
                </div>
                <div className="right">
                    <p className='style border'>WEB-DEV</p>
                    <div className='right-div'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, aperiam!
                    </div>
                </div>
            </div>
            <div className='box2'>
                <div className='prereq'>
                    <h4>Pre-Requisite</h4>
                </div>
                <div className='desc'>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati, repudiandae?</p>
                </div>
                <div className='flex'>
                    <div>
                        <p><span>Students registered</span>:2/50</p>
                    </div>
                    <div className='style'>
                        <Link className='Link' to="/ProjectDesc">Learn More</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

function StudentProject() {
    let dummyArray = [
        { id: "Recent", a: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], color: "red" },
        { id: "Projects", a: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], color: "green" }
    ];
    return (
        <div>
            {dummyArray.map((item) => (
                <div>
                    <h1 className='projectTitle' style={{background:item.color}}>{item.id}</h1> {/* Moved item.id to a separate line */}
                    <div className='flexcard'>
                        {item.a.map((i) => (
                            <StudentCard color={item.color} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default StudentProject
