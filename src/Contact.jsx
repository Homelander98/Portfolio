import React from 'react';
import './App.css';

function Contact() {
  return (
    <div className="contact-page">
      <section className="hero-section">
        {/* Title */}
        <h1 className="hero-title">Get in Touch</h1>
        <p className="hero-description">
          I’m <span style={{ color: '#ff5e57' }}>Hashanul Bashar</span>. Feel free to reach out to me via email, phone, or connect on social platforms!
        </p>

        {/* Contact Details */}
        <div className="contact-details">
          <p>
            <strong>Name:</strong> Hashanul Bashar
          </p>
          <p>
            <strong>Email:</strong>{' '}
            <a href="mailto:theyseeemerollin@gmail.com" className="contact-link">
              theyseeemerollin@gmail.com
            </a>
          </p>
          <p>
            <strong>Phone:</strong> 01567953069
          </p>
        </div>

        {/* Social Links */}
        <div className="hero-buttons">
          <a
            href="https://www.linkedin.com/in/hashanul-bashar-siam-bb9874221/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-button"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Homelander98"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-button"
          >
            GitHub
          </a>
          <a
            href="https://x.com/Lunatic_Siam"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-button"
          >
            Twitter
          </a>
        </div>
      </section>
    </div>
  );
}

export default Contact;
