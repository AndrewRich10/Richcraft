import React from 'react';
import './index.css';
import Box from '@mui/material/Box';
import Sawblade from './sawblade.tsx';
import Logo from "./assets/Richcraft.svg";

const App: React.FC = () => {
  return (
    <div className="app">
      <header className="header">
        <img src={Logo} alt="Richcraft Logo" className="logo" />
        <nav>
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
          <Box component="section" className="box"  >
            <h2>About Richcraft</h2>
            <p>Richcraft specializes in woodworking projects, creating timeless and bespoke pieces that bring warmth and elegance to any space.</p>
          </Box>
        </section>
        <footer className="footer">
          © 2024 Richcraft. All rights reserved.
        </footer>
      </main>
    </div>
  );
};

export default App;