import React, { useState } from 'react';
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemPanel, AccordionItemState, AccordionItemButton } from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css'
import { MdOutlineArrowDropDown } from 'react-icons/md';
import './Value.css';
import { data } from '../../utils/accordion';

const Value = () => {
    const [className, setclassName] = useState(null);

    return (
        <section className="v-wrapper" id='values'>
            <div className="paddings innerWidth flexCenter v-container">
                {/* Left */}
                <div className="v-left">
                    <div className="image-container">
                        <img src="./value.png" alt="big-house" />
                    </div>
                </div>

                {/* Right */}
                <div className="flexColStart v-right">
                    <span className='orangeText'>Our Value</span>
                    <span className='primaryText'>Value We Give to You</span>
                    <span className='secondaryText'>
                        We are always ready to help by providing the best service.
                        <br />
                        We beleive a good place to live brings more comfort to your life.
                    </span>

                    <Accordion allowMultipleExpanded={false} preExpanded={[0]} className='accordion'>
                        {data.map((item, i) => {
                            

                            return (
                                <AccordionItem className={`accordionItem ${className}`} key={i} uuid={i}>
                                    <AccordionItemHeading>
                                        <AccordionItemButton className='flexCenter accordionButton'>

                                            <AccordionItemState>
                                                {({ expanded }) => expanded ? setclassName('expanded') : setclassName('collapsed')}
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
                            )
                        })}
                    </Accordion>

                </div>
            </div>
        </section>
    )
}

export default Value;