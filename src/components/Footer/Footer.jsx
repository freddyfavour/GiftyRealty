import React from "react";
import "./Footer.css";

const Footer = () =>{
    return(
        <section className="f-wrapper">
            <div className="paddings innerWidth flexCenter f-container">
                
                {/* left section */}
                <div className="flexColStart f-left">
                    <img src="giftyrealtylogo.png" alt="logo" width={120}/>
                    <span className="secondaryText">
                        Our vision is to make everyone<br/>
                        have a property of their own
                    </span>
                </div>

                {/* right section */}
                <div className="flexColStart f-right">
                    <span className="primaryText">Information</span>
                    <span className="secondaryText">Klm 7,Old Lagos Road.</span>
                    <div className="flexCenter f-menu">
                        <a href="#residencies"><span>Residencies</span></a>
                        <a href="#values"><span>Values</span></a>
                        <a href="#contact"><span>Contact</span></a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer;