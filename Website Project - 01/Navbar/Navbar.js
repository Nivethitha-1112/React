import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png' //importing the logo from assets folder

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
    return (
        <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
            <img src={logo} alt="" className='logo' />
            <ul>
                <li>Home</li>
                <li>Program</li>
                <li>About us</li>
                <li>Campus</li>
                <li>Testimonials</li>
                <li><button className='btn'>Contact Us</button></li>
            </ul>
        </nav>
    )
}

export default Navbar