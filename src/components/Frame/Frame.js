import React from 'react'
import  "./frame.css"
import frmae1 from "../../images/Frame 244.png"
import frmae2 from "../../images/Frame 245.png"
import frmae3 from "../../images/Frame 246.png"
import company from "../../images/company.png"
export default function Frame() {
  return (
    <>
    <div className="frame">
        <img src={frmae1} alt="" />
        <img src={frmae2} alt="" />
        <img src={frmae3} alt="" />
    </div>
    <div className="company">
        <img src={company} alt="" />
    </div>
    </>
  )
}
