import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('header');
      if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.backdropFilter = 'blur(15px)';
      } else {
        header.style.background = 'var(--background)';
        header.style.backdropFilter = 'blur(10px)';
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header>
      <div className="logo-container">
        <div className="logo">CF</div>
        <div className="logo-text">Career<span>Forge</span></div>
      </div>
      
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li className="dropdown">
            <a href="#features">Features <i className="fas fa-chevron-down dropdown-arrow"></i></a>
            <div className="dropdown-content">
              <a href="/resume-builder">Resume Builder</a>
              <a href="#post-generator">Post Generator</a>
              <a href="#email-generator">Email Generator</a>
              <a href="#job-alerts">Job Alerts</a>
              <a href="#training-courses">Training Courses</a>
            </div>
          </li>
          <li><a href="#membership">Membership</a></li>
          <li><a href="#categories">Career Tips</a></li>
        </ul>
      </nav>
      
       <Link to="/login" className="login-btn">
  <i className="fa-solid fa-right-to-bracket"></i> Login
</Link>

      
      <button 
        className={`hamburger ${menuOpen ? 'active' : ''}`} 
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      
      <div className={`mobile-menu ${menuOpen ? 'active' : ''}`}>
        <ul>
          <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
          <li><a href="#features" onClick={() => setMenuOpen(false)}>Features</a></li>
          <li><a href="#membership" onClick={() => setMenuOpen(false)}>Membership</a></li>
          <li><a href="#categories" onClick={() => setMenuOpen(false)}>Explore Categories</a></li>
        </ul>
       <Link to="/login" className="login-btn" onClick={() => setMenuOpen(false)}>
       <i className="fa-solid fa-right-to-bracket"></i> Login
       </Link>
      </div>
    </header>
  );
};

export default Header;