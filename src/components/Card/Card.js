import React from 'react'
import "./card.css"

export default function Card() {
  return (
    <>
    <div className="data">
        <div className="card1">
            <div className="data1">
            <h5>Air Pollution</h5>
            <p>What’s currently happening in Air Pollution all around the world? AQI region-wise.</p>
            </div>
            </div>
        <div className="card2">
            
            <div className="data3">

            <h6>WATER POLLUTANT</h6>
        <h4>Think up spending hours every day looking for drinking water.</h4>
        <p>Collaborating with local partners to implement community-owned clean drinking water projects in remote communities.</p>
            </div>
            
        <div className="data2">
        <meter id ="disk" value="0.67">67%</meter>
        <button>Donate</button>
            </div>
        </div>
        <div className="card3">
            
            <p><h6>MELTING ICEBERGS</h6>Negative mass balances due to retiring glaciers is causing them to disappear.</p></div>
    </div>
    
    </>
  )
}
