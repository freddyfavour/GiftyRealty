import React from 'react'
import './Hero.css'
import {HiLocationMarker} from 'react-icons/hi'
import CountUp from 'react-countup'

const Hero = () =>{
    return (
        <section className="hero-wrapper">
            <div className="paddings innerWidth flexCenter hero-container">
                {/* Left section */}
                <div className="flexColStart hero-left">
                    <div className="hero-title">
                        <div className="brown-circle"/>
                        <h1>
                            Acquire The<br/>
                            Best Properties<br/>
                            Now
                        </h1>
                    </div>
                    <div className="flexColStart secondaryText hero-des">
                        <span>Discover great propeties within Nigeria and acquire them</span>
                        <span>Become a property owner today with <b>Gifty Realty</b></span>
                    </div>
                   {/*<div className="flexCenter search-bar">
                        <HiLocationMarker color="var(--gold)" size={25}/>
                        <input type="text" />
                        <button className="button">Search</button>
                    </div>
                    */}
                    <div className="flexCenter stats">
                        <div className="flexColCenter stat">
                            <span>
                                <CountUp start={0} end={20} duration={4}/>
                                <span>+</span>
                            </span>
                            <span className='secondaryText'>States located</span>
                        </div>

                        <div className="flexColCenter stat">
                            <span>
                                <CountUp start={100} end={500} duration={4}/>
                                <span>+</span>
                            </span>
                            <span className='secondaryText'>Properties</span>
                        </div>

                        <div className="flexColCenter stat">
                            <span>
                                <CountUp start={30} end={300} duration={4}/>
                                <span>+</span>
                            </span>
                            <span className='secondaryText'>Premium Products</span>
                        </div>
                    </div>
                </div>

                {/* Right section */}
                <div className="flexCenter hero-right">
                    <div className="image-container">
                        <img src='./hero-image.png' alt='image' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero