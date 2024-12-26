import React, { useState } from 'react';
import './index.css';
import Box from '@mui/material/Box';
import Sawblade from './components/sawblade.tsx';
import Slider from './components/slider.tsx';
import Logo from "./assets/Richcraft.png";


const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (  
    <div className="app">
      <header className="header">
        <img src={Logo} alt="Richcraft logo" className="logo" />
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
      </header>
      <main>
        <section className="hero">
          <Box component="section" className="box">
            <h2>Crafting with <span className="wood">Wood</span></h2>
            <p>Beautiful, <span style={{ fontStyle: 'italic' }}>handcrafted</span> <span className="wood">wooden</span> pieces made with care and <span style={{ fontWeight: 100, textDecoration: 'underline' }}>precision</span>.</p>
            <Sawblade />
          </Box>
        </section>
        <section id="about" className="hero">
          <Box component="section" className="box">
            <h2>About Richcraft</h2>
            <p>Richcraft specializes in woodworking projects, creating timeless and bespoke pieces that bring warmth and elegance to any space.</p>
          </Box>
        </section>
        <section id="gallery" className="hero">
          <Box component="div" className="box">
            <h2>Gallery</h2>
            <p>Explore our collection of handcrafted wooden masterpieces. Each piece is designed with care, precision, and creativity, showcasing the timeless beauty of wood.</p>
          </Box>
          <Box component="div" className="slider-box">
            <Slider />
          </Box>
        </section>
      </main>
      <footer className="footer">
        © 2024 Richcraft. All rights reserved.
      </footer>
    </div>
  );
};

export default App;