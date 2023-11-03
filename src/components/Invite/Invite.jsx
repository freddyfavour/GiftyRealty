import React from "react";
import "./Invite.css"

const Invite = () =>{
    return(
        <section className="i-wrapper">
            <div className="paddings innerWidth i-container">
                <div className="flexColCenter inner-container">
                    <span className="primaryText">Get Started with Gifty Realty</span>
                    <span className="secondaryText">Subscribe and find super attracive price quotes from us<br/>Find your property soon
                    </span>
                    <button className="button">
                        <a href="mailto:giftyrealty@gmail.com">Get Started</a>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Invite