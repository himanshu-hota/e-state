import React from 'react';
import './GetStarted.css';

const GetStarted = () => {
  return (
    <section className="g-wrapper" id='getstarted'>
        <div className="paddings innerWidth g-container">
            <div className="flexColCenter inner-container">
                <span className='primaryText'>Get Started with Homyz</span>
                <span className='secondaryText'>Find your residence</span>

                <button className="button">
                    Get Started
                </button>
            </div>
        </div>
    </section>
  )
}

export default GetStarted;