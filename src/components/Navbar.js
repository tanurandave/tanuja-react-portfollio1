import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Styles/Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <h1 className="logo">PORTFOLIO</h1>

      {/* Hamburger Icon */}
      <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        ☰
      </div>

      <ul className={`nav-links ${isMenuOpen ? 'show' : ''}`}>
        <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
        <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link></li>
        <li><Link to="/projects" onClick={() => setIsMenuOpen(false)}>Projects</Link></li>
        <li><Link to="/certification" onClick={() => setIsMenuOpen(false)}>Certification</Link></li>
        <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
    

      <a
        className={`github-button ${isMenuOpen ? 'show-btn' : ''}`}
        href="https://github.com/tanurandave"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github Profile
      </a>
        </ul>
    </nav>
  );
};

export default Navbar;
