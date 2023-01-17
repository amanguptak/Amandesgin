import React from 'react'
import "./static.css"
import vector1 from "../../images/Vector1.png"
import vector2 from "../../images/Vector2.png"
import vector3 from "../../images/Vector3.png"
import counter from "../../images/Counter.png"

import vector5 from "../../images/Vector5.png"
import vector6 from "../../images/Vector6.png"
export default function Static() {
  return (
    <div className="static">
       <h1 className="task">Our Continued Project Assistance Programs</h1>
       <div className="grid">
        <div className="card">
           <img src={vector1} alt="" />
           <h3>Reduce Global Warming Now</h3>
           <p className="desc">The warming of the atmosphere has an impact on weather patterns, causing more frequent and severe droughts and storms worldwide.</p>
        </div>
        <div className="card">
           <img src={vector2} alt="" />
           <h3>Protecting Ecosystems</h3>
           <p className="desc">Higher temperatures are shortening the seasons and, in some places, have already exceeded safe levels for ecosystems and humans.</p>
        </div>
        <div className="card">
           <img src={vector3} alt="" />
           <h3>Shift Towards Clean Energy</h3>
           <p className="desc">This energy transition has the potential to impact many aspects of life, including the environment, society, the economy, and governance.</p>
        </div>
        <div className="card">
           <img src={vector6} alt="" />
           <h3>Safe Coastal Livelihoods</h3>
           <p className="desc">Sustainable aquaculture, e.g. grouper aquaculture, meets the high demand for reef fish while potentially preserving coastal communities' livelihoods.</p>
        </div>
        <div className="card">
           <img src={vector5} alt="" />
           <h3>Stop Toxic Chemical in Air</h3>
           <p className="desc">Solubility is differentiated by whether the substance is easily dissolved in organic solvents under normal environmental conditions of temperature & pressure.</p>
        </div>
        
        <div className="card">
           <img src={vector6} alt="" />
           <h3>Ban Radioactive Contamination</h3>
           <p className="desc">Radioactive materials released into the environment can contaminate the air, water, surfaces, soil, plants, buildings, people & animals.</p>
        </div>
       </div>
       <div className="counter">
        <img src={counter} alt="" />
       </div>
    </div>
  )
}
