import React from 'react'
import './footer.css'
export default function Footer() {
  return (
    <>
    <div className="footer">
        <div className="box1">
            <h3>ENVIORMENTAL</h3>
        <i className=" topIcon fa-brands fa-facebook"></i>
        <i class="fa-brands fa-linkedin"></i>
        <i className="topIcon fa-brands fa-twitter"></i>
        <i className="topIcon fa-brands fa-square-instagram"></i>
        </div>
        <div className="box2">
            <div className="link">
                <p>Our Cause</p>
                <p>Contact Us</p>
                <p>Cases</p>
                <p>Our Benefactors</p>
            </div>
            <h4>Join our Cause, Become a Member</h4>
            <form action="">
                <input type="text" placeholder="Enter your email address" />
                <button>Join</button>
            </form>
        </div>
        <div className="box3">
            <p>4517 Washington Ave. Manchester,
Kentucky 39495
(505) 555-0125, (406) 555-0120
binhan628@gmail.com
manhhachkt08@gmail.com</p>
        </div>
     
    </div>
    <div className="last">
    <p>All rights reserved by Aman Gupta</p>
    <p>Terms & Conditions &nbsp; &nbsp; Privacy & Cookies</p>
 </div>
 </>
  )
}
