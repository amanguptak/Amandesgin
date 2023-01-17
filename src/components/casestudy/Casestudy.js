import React from 'react'
import "./case.css"
import fire from "../../images/fire.png"
export default function Casestudy() {
  return (
    <div className="case">
    <h1>Case Study</h1>
 <div className="fire">
 
 <div className="left">
<img src={fire} alt="" />
 </div>
 <div className="right">
   <p className="dis">DISASTER MITIGATION</p>
   <div className="donate">
    <p>Switching to Clean Energy & Preserving our Abode, Earth.</p>
    <button className='btn'>Donate</button>
   </div>
   <div className="about">
   Planning and zoning are examples of mitigation actions, as are floodplain protection, property acquisition and relocation, and public outreach projects. Installing disaster warning systems, purchasing radio communications equipment, and conducting emergency response training are examples of preparedness actions. Disaster mitigation is at the heart of emergency management.

   </div>
   
   <meter id ="disk" value="0.67">67%</meter>
   <div className="end">
    <p>Raised : $10.11 million</p>
    <p>Goal: $23 million</p>
   </div>
 </div>
 </div>
 </div>
  )
}
