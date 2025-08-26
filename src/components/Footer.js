import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaArrowCircleUp,
} from 'react-icons/fa';
import './Styles/Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/certification">Certification</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <div className="social-icons">
        <a href="https://github.com/tanurandave" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/tanuja-randave-b691292a3/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://www.instagram.com/tanuja.randave/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      
      </div>

      <p className="footer-copy">
        Copyright © 2025 Tanuja Randave | All rights reserved.
      </p>

      <div className="scroll-top-icon" onClick={scrollToTop}>
        <FaArrowCircleUp title="Go to Top" />
      </div>
    </footer>
  );
};

export default Footer;
