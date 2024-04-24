import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/Logo.png';

const Navbar = () => {
  const location = useLocation();

  return (
    <div className='navbar'>
      <img className="logo" src={logo} alt="" />
      <div className='nav-menu'>
        <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active-link' : ''}`}>Home</Link>
        <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active-link' : ''}`}>About Me</Link>
        <Link to="/services" className={`nav-link ${location.pathname === '/services' ? 'active-link' : ''}`}>Services</Link>
        <Link to="/portfolio" className={`nav-link ${location.pathname === '/portfolio' ? 'active-link' : ''}`}>Portfolio</Link>
        <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active-link' : ''}`}>Contact</Link>
      </div>
      <Link to="https://www.linkedin.com/in/nivethithamano/" className='nav-connect' target="_blank" rel="noopener noreferrer">
        Connect With me
      </Link>
    </div>
  );
}

export default Navbar;
