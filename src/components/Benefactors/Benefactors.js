import React from 'react'
import "./benefactors.css"
import rect from "../../images/Rectangle 16.png"
import img1 from "../../images/image 76.png"
import img2 from "../../images/image 80.png"
import img3 from "../../images/image 81.png"
import img4 from "../../images/image 82.png"
import img5 from "../../images/image 83.png"
export default function Benefactors() {
  return (
    <div className="reviews">
    <h1 className="our">Our Benefactors</h1>
     <div className="grids">
        <div className="users">
            <img src={rect} alt="" />
            <p className="review">Pauline J. Wright</p>
            <span>Volunteer</span>
        </div>
        <div className="users">
            <img src={img1} alt="" />
            <p className="review">James L. Stewart</p>
            <span>Volunteer</span>
        </div>
        <div className="users">
            <img src={img2} alt="" />
            <p className="review">William V. Mejia</p>
            <span>Volunteer</span>
        </div>
        <div className="users">
            <img src={img3} alt="" />
            <p className="review">Brandon J. Hudgins</p>
            <span>Volunteer</span>
        </div>
        <div className="users">
            <img src={img4} alt="" />
            <p className="review">James L. Stewart</p>
            <span>Volunteer</span>
        </div>
        <div className="users">
            <img src={img5} alt="" />
            <p className="review">Cesar R. Watts</p>
            <span>Volunteer</span>
        </div>

    </div>
    </div>
   
  )
}
