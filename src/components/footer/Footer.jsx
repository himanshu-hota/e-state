import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <section className="f-wrapper" id='footer'>
        <div className="paddings innerWidth flexCenter f-container">
            {/* left */}
            <div className="flexColStart f-left">
                <img src="./logo2.png" alt="brand-logo" />

                <span className="secondaryText">
                    Our vision is to provide people <br />
                    the best place to live for them.
                </span>
            </div>

            {/* right */}
            <div className="flexColStart f-right">
                <span className='primaryText'>Information</span>
                <span className='secondaryText'>145 New york,FL 4571, USA</span>

                <div className="flexCenter f-menu">
                    <span>Propery</span>
                    <span>Services</span>
                    <span>Product</span>
                    <span>About Us</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer;