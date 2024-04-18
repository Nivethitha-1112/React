import React from 'react';
import { Link } from 'react-router-dom';
import { BiHome, BiBookAlt, BiSolidReport, BiStats, BiTask, BiMessage, BiHelpCircle } from 'react-icons/bi';
import '../styles/sidebar.css';

const Sidebar = () => {
    return (
        <div className='menu'>
            <div className='logo'>
                <BiBookAlt className='logo-icon'/>
                <h2>RiverWorld</h2>
            </div>

            <div className='menu--list'>
                <Link to="/" className='item'>
                    <BiHome className='icon' />
                    Dashboard
                </Link>
                <Link to="/assignments" className='item'>
                    <BiTask className='icon'  />
                    Assignment
                </Link>
                <Link to="/reports" className='item'>
                    <BiSolidReport className='icon'  />
                    Report
                </Link>
                <Link to="/stats" className='item'>
                    <BiStats className='icon' />
                    Stats
                </Link>
                <Link to="/messages" className='item'>
                    <BiMessage className='icon' />
                    Message
                </Link>
                <Link to="/help" className='item'>
                    <BiHelpCircle className='icon' />
                    Help
                </Link>

            </div>
        </div>
    );
}

export default Sidebar;
