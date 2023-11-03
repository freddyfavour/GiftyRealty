import React, { useState } from "react"
import{BiMenuAltRight} from 'react-icons/bi'
import OutsideClickHandler from "react-outside-click-handler"
import './Header.css'

const Header = () =>{
    const [menuOpened, setMenuOpened] = useState(false)
    const getMenuStyles = (menuOpened) =>{
        if (document.documentElement.clientWidth <= 800){
            return{right: !menuOpened && '-100%'}
        }
    }
    return(
        <section className="section paddings h-wrapper">
            <div className="flexCenter paddings innerWidth h-container">
                <img src="./giftyrealtylogo.png" alt="logo" width={100} />

                <OutsideClickHandler 
                onOutsideClick={()=>{
                    setMenuOpened(false)
                }}
                >
                <div className="flexCenter h-menu"
                style={getMenuStyles(menuOpened)}>
                    <a href="#residencies">Residencies</a>
                    <a href="#values">Our Values</a>
                    <a href="#contact">Contact Us</a>
                    <button className="button">
                        <a href="mailto:giftyrealty@gmail.com">Get Started</a>
                    </button>
                </div>
                </OutsideClickHandler>
                  <div className="menu-icon" onClick={()=>setMenuOpened((prev)=>!prev)}>
                     <BiMenuAltRight size={30}/>
                   </div>
            </div>
        </section>
    )
}

export default Header