import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import logoImage from '../assets/logo.jpg';

function Header() {
    return (
        <div>
            <header>
                <div className='logo'>
                <Link to="/"><img src={logoImage} alt="Logo" /></Link>
                </div>
                <nav>
                    <ul>
                        <li><Link to="/sign-in" className="button">Sign In</Link></li>
                        <li><Link to="/sign-up" className="button">Sign Up</Link></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Header;