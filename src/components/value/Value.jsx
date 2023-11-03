import React from "react";
import './Value.css';
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel, AccordionItemState} from "react-accessible-accordion";
import 'react-accessible-accordion/dist/fancy-example.css';
import {MdOutlineArrowDropDown } from 'react-icons/md';
import data from '../../utils/accordion';
import { useState } from "react";

const Value = () =>{
    return(
        <section className="v-wrapper" id="value">
            <div className="paddings innerWidth flexCenter v-container">

                {/* left side bar */}
                <div className="v-left">
                    <div className="image-container">
                        <img src="./gift2.jpeg" alt="" />
                    </div>
                </div>

                {/* right side bar */}
                <div className="flexColStart v-right">
                    <span className="brownText">Our Values</span>
                    <span className="primaryText">Values we give to you</span>
                    <span className="secondaryText">We are always ready to provide you with the best services
                        <br/>
                        We beleive that we can make life better
                    </span>


                    <Accordion 
                     className="accordion" 
                     allowMultipleExpanded={false} 
                     preExpanded={[0]}
                    >
                    {data.map((item, i) => {
                     const [className, setClassName] = useState(null);
                     return (
                         <AccordionItem className={`accordionItem ${className}`} key={i} uuid={i}>
                             <AccordionItemHeading>
                                 <AccordionItemButton className={`flexCenter accordionButton ${className}`}>
                                     <AccordionItemState>
                                         {({ expanded }) => 
                                         expanded
                                         ? setClassName("expanded")
                                         : setClassName("collapsed")
                                        }
                                     </AccordionItemState>
                                     <div className="flexCenter icon">
                                         {item.icon}
                                     </div>
                                     <span className="primaryText">
                                         {item.heading}
                                     </span>
                                     <div className="flexCenter icon">
                                         <MdOutlineArrowDropDown size={20} />
                                     </div>
                                 </AccordionItemButton>
                             </AccordionItemHeading>
                        <AccordionItemPanel>
                        <p className="secondaryText">
                          {item.detail}
                        </p>
                     </AccordionItemPanel>
                  </AccordionItem>
                 );
                })}
             </Accordion>

             </div>
            </div>
        </section>
    )
}

export default Value;