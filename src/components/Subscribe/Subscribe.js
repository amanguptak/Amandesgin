import React from 'react'
import  './subscribe.css'
import video from '../../images/Rectangle 95.png'
export default function Subscribe() {
  return (
    
    <div className="subscribe">
        <div className="leftSub">
        <h1>Sign Up For Environment News & Alerts</h1>
            <p>We are bringing worldwide concerns and solutions fresh to your emails. As opposed to what others do, we make our contributions timely.</p>
            <form action="">
                <input type="text" placeholder='Enter your email'/>
                <button>Subscribe</button>
            </form>
        </div>
        <div className="rightSub">
            <img src={video} alt="" />
        </div>
    </div>
   
  )
}
