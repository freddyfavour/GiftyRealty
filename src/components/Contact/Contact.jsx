import React from "react";
import './Contact.css';
import { MdCall } from "react-icons/md";
import {BsFillChatDotsFill} from "react-icons/bs";
import {HiChatBubbleBottomCenter} from "react-icons/hi2";

const Contact = () => {
    return(
        <section className="c-wrapper" id="contact">
            <div className="paddings innerWidth flexCenter c-container">
                {/* left side */}
                <div className="flexColStart c-left">
                    <span className="brownText">Our Contact</span>
                    <span className="primaryText">Easy to Contact Us</span>
                    <span className="secondaryText">We are always ready and available to provide top notch services. We believe that a good place o live can make your life better</span>

                    <div className="flexColStart contactModes">
                        {/* First row*/}
                        <div className="flexStart row">
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <MdCall size={25}/>
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className="primaryText">Call</span>
                                        <span className="secondaryText">+234 906 331 3323</span>
                                    </div>
                                </div>
                                <div className="flexCenter button"><a href="tel:+2349063313323">Call Now</a></div>
                            </div>

                            {/* second mode */}
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <BsFillChatDotsFill size={25}/>
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className="primaryText">Chat</span>
                                        <span className="secondaryText">+234 906 331 3323</span>
                                    </div>
                                </div>
                                <div className="flexCenter button"><a href="https://wa.me/2349063313323">Chat Now</a></div>
                            </div>
                        </div>

                        {/* Second row */}
                        <div className="flexStart row">
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <BsFillChatDotsFill size={25}/>
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className="primaryText">Video Call</span>
                                        <span className="secondaryText">+234 906 331 3323</span>
                                    </div>
                                </div>
                                <div className="flexCenter button"><a href="https://wa.me/2349063313323?text=I'd like to initiate a video call regarding Gifty Realty">Video Call</a></div>
                            </div>

                            {/* fourth mode */}
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <HiChatBubbleBottomCenter size={25}/>
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className="primaryText">Message</span>
                                        <span className="secondaryText">+234 906 331 3323</span>
                                    </div>
                                </div>
                                <div className="flexCenter button"><a href="mailto:giftyrealty@gmail.com">Text Now</a></div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* right side */}
                <div className="c-right">
                    <div className="image-container">
                        <img src='./contact.jpg' alt=''/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact