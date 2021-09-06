import React ,{useState} from 'react'
import "./navbar.css"
import brandLogo from "../assets/brandLogo.svg"
import checkoutLogo from "../assets/checkoutLogo.svg"

function Navbar() {
    const [clicked,setClicked] = useState(false);
    const [size,setSize] = useState(window.innerWidth);
    const responsiveHandler = () =>{
        setClicked(clicked===false?true:false);
     }
    const resizeHandler = () =>{
        setSize(window.innerWidth);
    }
     window.addEventListener("resize",resizeHandler);
    return (
        <div className="div__navbar">
            <div className="div__navBrand_section">
               <img src={brandLogo} alt="logo" className="img__brandLogo" />
            </div>
           <ul className="navMenuSection" style={{
                transform:clicked?"translate(0%)":" ", display:size<=768?(clicked?"flex":"none"):"flex",
                top:size<=768?(clicked&&"18vh"):"0vh"}}>
              <li className="navMenuItems" style={{
                        animation: clicked?`navLinkFade 0.5s ease forwards ${0 / 7 + 0.4}s`:" ",
                    }}>USPs</li>
              <li className="navMenuItems" style={{
                        animation: clicked?`navLinkFade 0.5s ease forwards ${1 / 7 + 0.4}s`:" ",
                    }}>PRICING</li>
              <li className="navMenuItems" style={{
                        animation: clicked?`navLinkFade 0.5s ease forwards ${2 / 7 + 0.4}s`:" ",
                    }}><a href="https://www.google.com" className="checkout_link"><img src={checkoutLogo} alt="Checkout" width="40px" /></a></li>
           </ul>
           <div className={clicked?"burger toggle":"burger"} onClick={responsiveHandler}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </div>
    )
}

export default Navbar
