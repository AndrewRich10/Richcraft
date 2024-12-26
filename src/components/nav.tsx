import React, { useState } from 'react';
import './nav.css';

const Nav: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    };

    return (
    <div className='unselectable'>    
        <button className="menu-toggle" onClick={toggleMenu}>
            ☰  
        </button>
        <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
            <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </div>
    );
};

export default Nav;