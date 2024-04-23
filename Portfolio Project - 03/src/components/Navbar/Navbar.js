import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
import logo from '../../assets/Logo.png'


const Navbar = () => {
  return (
    <div className='navbar'>
      <img className="logo" src={logo} alt="" />
      <div className='nav-menu'>
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About Me</Link>
        <Link to="/services" className="nav-link">Services</Link>
        <Link to="/portfolio" className="nav-link">Portfolio</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
      </div>
      <div className='nav-connect'>
        Connect With me
      </div>
    </div>
  )
}

export default Navbar