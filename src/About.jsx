import React from 'react';
import './App.css';

function About() {
  return (
    <div className="about-page">
      <section className="hero-section">
        <h1 className="hero-title">About Me</h1>
        <p className="hero-description">
          I’m <span style={{ color: '#ff5e57' }}>Hashanul Bashar</span>, a 4th-year CSE student passionate about technology and learning.
          I’m exploring web development and have gained knowledge in Python and C++.
        </p>
        <p className="hero-description">
          Currently, I’m working on my thesis paper titled{' '}
          <span style={{ color: '#ff5e57' }}>'Deepfake Image Detection'</span>, addressing a significant challenge in the AI industry.
        </p>
        <div className="hero-buttons">
          <a href="https://www.linkedin.com/in/hashanul-bashar-siam-bb9874221/" target="_blank" rel="noopener noreferrer">
            Connect on LinkedIn
          </a>
          <a href="https://github.com/Homelander98" target="_blank" rel="noopener noreferrer">
            Check My GitHub
          </a>
        </div>
      </section>
    </div>
  );
}

export default About;
