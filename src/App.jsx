import React from 'react';
import { Link, Routes, Route, useLocation } from 'react-router-dom';
import Contact from './Contact';
import About from './About';
import Projects from './Projects';
import Footer from './Footer';
import './App.css';

function App() {
  const location = useLocation();

  return (
    <div className="app-container">
      {/* Navbar: Navigation links with conditional rendering for the Home button */}
      <nav className="navbar">
        {location.pathname !== '/' && (
          <Link to="/" className="home-button">Home</Link>
        )}
        <Link to="/contact">Contact</Link>
        <Link to="/resume">Resume</Link>
        <Link to="/about">About</Link>
        <Link to="/certificates">Certificate</Link>
        <Link to="/projects">Projects</Link>
      </nav>

      {/* Routes: Define paths and the corresponding components */}
      <div className="content">
        <Routes>
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />

          {/* Home Route: Hero section with personal introduction */}
          <Route
            path="/"
            element={
              <section className="hero-section">
                <div className="hero-image">
                  <img src="/images/profile.jpg" alt="Profile" />
                </div>
                <h1 className="hero-title">
                  Hey <br />
                  I’m <span style={{ color: '#ff5e57' }}>Hashanul Bashar</span>
                </h1>
                <h2 className="hero-subtitle">
                  Machine Learning <span style={{ color: '#ff5e57' }}>Engineer</span>
                </h2>
                <p className="hero-description">
                  I am a 4th-year Computer Science and Engineering (CSE) student with a passion for software development and technology. I am constantly exploring new tools, frameworks, and methodologies to improve my coding skills and problem-solving abilities. My projects span a range of areas including mobile app development, web development, and data science.

                  On my GitHub, you'll find a variety of personal and collaborative projects showcasing my work in Android, web technologies, and deep learning. Each project demonstrates my ability to apply theoretical knowledge to real-world applications. I am always eager to learn, collaborate, and contribute to innovative projects. Feel free to explore my repositories and connect with me!
                </p>
                <div className="hero-buttons">
                  <Link to="/about">Learn More</Link>
                  <Link to="/contact">Contact me</Link>
                </div>
              </section>
            }
          />
        </Routes>
      </div>

      {/* Footer: Always visible at the bottom of the page */}
      <Footer />
    </div>
  );
}

export default App;
