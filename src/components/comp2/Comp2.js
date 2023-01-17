import React from 'react'
import img5 from '../../images/img5.png'
import './comp2.css'
export default function Comp2() {
  return (
    <div className="cmp2">
        <img src={img5} alt="" />
        <div className="des">
            <h1>Take Action. Let’s Get In Touch</h1>
            <p>Given the limited resources, the issues we address, from hunger & clean drinking water to disease prevention and homelessness, can be taxing.</p>
            <button>Donate Now</button>
        </div>
    </div>
  )
}
