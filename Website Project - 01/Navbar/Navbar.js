import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll'; //import link from react scroll (website refered: react-scroll-npm)
import './Navbar.css'
import logo from '../../assets/logo.png' //importing the logo from assets folder
import menu_icon from '../../assets/menu-icon.png'

const Navbar = () => {

    const [sticky, setSticky] = useState(false);
    //sticky is state variable which holds the current state 
    //setSticky is the function that allows updating the value of sticky

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 50 ? setSticky(true) : setSticky(false);
        });
    }, []);
    //first argument to useEffect is a function contains the code which will run after each render
    //second argument is array dependencies which is empty array, which will run once after initial render
    //we add an event listener to the window's scroll event. Whenever the user scrolls, this event listener checks the vertical scroll position (window.scrollY). If it's greater than 50 pixels, it sets the sticky state to true, indicating that the Navbar should become sticky. Otherwise, it sets the sticky state to false.
    
    const [mobileMenu, setMobileMenu] = useState(false);
    const toggleMenu = () => {
        mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
    }


    return (
        <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
            <img src={logo} alt="" className='logo' />
            <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
                <li><Link to='hero' smooth={true} offset={0} duration={500}> Home</Link></li>
                <li><Link to='program' smooth={true} offset ={-260} duration={500}>Programs</Link></li>
                <li><Link to='about' smooth={true} offset ={-150} duration={500}>About us</Link></li>
                <li><Link to='campus' smooth={true} offset ={-260} duration={500}>Campus</Link></li>
                <li><Link to='testimonials' smooth={true} offset ={-260} duration={500}>Testimonials</Link></li>
                <li><Link to='contact' smooth={true} offset ={-260} duration={500} className='btn'>Contact Us</Link></li>
            </ul>
            <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu}/>
        </nav>
    )
}

export default Navbar