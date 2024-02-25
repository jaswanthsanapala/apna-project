import React from 'react'
import './prof.css'
// import axios from 'axios';
import  CseProfData from './main';



function ProfCard(props){
    return(
        <div className='prof-card'>
            <div className='box-1'>
                <div className="prof-dp">
                    <div className='circle'>
                    <img src="users.png" alt="" />
                    </div>
                </div>
                <div className="prof-details">
                    <h2>{props.name}</h2>
                    <p>{props.desig}</p>
                   {/* <p>{props.phone} <br />{props.address} <br />kartik@iitk.ac.in</p> */}
                   <p>{props.phone}</p>
                   <p>{props.address}</p>
                   <p>{props.email}</p>
                  
                </div>
            </div>
            <div className='box-2'>
                <p>{props.research}</p>
            </div>
        </div>
    );
}


function Prof() {

  return (
    <div id='faculty-page' className='faculty-page'>
        <h1 className='random'>Computer Science and Engineering</h1>
        {
            CseProfData.map((item) => {
              return (
               <ProfCard 
               department ={item.department}
               key ={item.name}
               name = {item.name} 
                desig = {item.designation}
                phone ={item.contact}
                address = {item.address}
                email = {item.email}
                research ={item.research}
               />
              )
            })
        }
    
    </div>
  )
}

export default Prof;
