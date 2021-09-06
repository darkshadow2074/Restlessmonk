import React from 'react'
import "./headsection.css"
import particles from "../assets/particles.png"
const HeadSection = ()=> {
    return (
        <div className="headSection" style={{backgroundImage: `transparent url(${particles}) 0% 0% no-repeat padding-box`}}>
            <div className="headline__section">
              <h1 className="headline">We extract Leads & Data from Instagram</h1>
            </div>
            <div className="tagline__section">
              <p className="tagline">Our agency does all the hard work and <br/>gives you the clean targeted data in Sheets!</p>
            </div>
            <div className="btn__section">
              <button className="btn__primary">GET LEADS</button>
            </div>
        </div>
    )
}

export default HeadSection
