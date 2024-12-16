import React from 'react';
import { Link } from 'react-router-dom';
import './App.css'; // Ensure this file includes the updated styles

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Logo or Brand Name */}
        <div className="footer-logo">
          <h2>Hashanul Bashar</h2>
        </div>

        {/* Navigation Links */}
        <div className="footer-links">
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/resume">Resume</Link></li>
            <li><Link to="/certificates">Certificates</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="footer-social">
          <a href="https://github.com/Homelander98" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i> GitHub
          </a>
          <a href="https://www.linkedin.com/in/hashanul-bashar" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
        </div>

        {/* Copyright Section */}
        <div className="footer-copyright">
          <p>&copy; 2024 Hashanul Bashar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
