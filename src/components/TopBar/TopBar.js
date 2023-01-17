import React from 'react'
import './topbar.css'
export default function TopBar() {
  return (
    <div className="top">
        <div className="topLeft">
        <i className=" topIcon fa-brands fa-facebook"></i>
        <i class="fa-brands fa-linkedin"></i>
        <i className="topIcon fa-brands fa-twitter"></i>
        <i className="topIcon fa-brands fa-square-instagram"></i>
        
        </div>
        <div className="topRight">
        <i class="fa-regular fa-hand-pointer"></i>
        <p>Join the fight, Become a Volunteer</p>
        </div>
    </div>
  )
}
