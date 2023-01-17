import React from 'react'
import "./header.css"
import logo from "../../images/logo2.png"
export default function Header() {
  return (
    <div className="header">
       <div className="logo">
     <img src={logo}alt="" />

       </div>
       <div className="middle">
        <p style={{color:"#A3DA8D"}}>Home </p>
        <p>Our Cause</p>
        <p>Contact Us</p>
        <p>Cases</p>
        <p>Our Benefactors</p>
       </div>
       <div className="headerR">
       <i class="fa-solid fa-magnifying-glass"></i>
       <button className="btn">Help us Fight</button>
       </div>
    </div>
  )
}
