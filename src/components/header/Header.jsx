import React, { useState } from 'react';
import './Header.css';
import { BiMenuAltRight } from 'react-icons/bi';
// import OutsideClickHandler from 'react-outside-click-handler';
import { IoCloseSharp } from "react-icons/io5";

const Header = () => {

    const getMenuStyle = (menuOpened) => {
        if (document.documentElement.clientHeight <= 800) {
            return { right: !menuOpened && '-100%' };
        }

    }

    

    const [menuOpened, setMenuOpened] = useState(false);
    return (
        <section className='h-wrapper' id='home' >
            <div className="h-container flexCenter paddings innerWidth">
                <img src="./logo.png" alt="webiste-logo" width={100} />
                {/* <OutsideClickHandler onOutsideClick={() => setMenuOpened(false)}> */}
                    <div className="h-menu flexCenter" style={getMenuStyle(menuOpened)} >
                        <a href="#residencies" onClick = {() => setMenuOpened(false)}>Residencies</a>

                        <a href="#values" onClick = {() => setMenuOpened(false)}>Our Value</a>
                        <a href="#contact" onClick = {() => setMenuOpened(false)}>Contact Us</a>
                        <a href="#getstarted" onClick = {() => setMenuOpened(false)}>Get Started</a>
                        <button className="button">
                            <a href="#contact" onClick = {() => setMenuOpened(false)}>Contact</a>
                        </button>
                    </div>
                {/* </OutsideClickHandler> */}
            </div>

            <div className="menu-icon" onClick={() => setMenuOpened((prev) => !prev)}>
                {!menuOpened && <BiMenuAltRight size={30} />}
                {menuOpened && <IoCloseSharp  size={30}/>}
            </div>
        </section>
    )
}

export default Header;