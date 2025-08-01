import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);


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
   const handleMobileFeaturesClick = (e) => {
    e.preventDefault();
    setMobileDropdownOpen(!mobileDropdownOpen);
  };

  const handleMobileMenuClose = () => {
    setMenuOpen(false);
    setMobileDropdownOpen(false);
  };


return (
  <>
    <header>
      <div className="logo-container">
        <div className="logo">CF</div>
        <div className="logo-text">Career<span>Forge</span></div>
      </div>
      
      <nav>
        <ul>
          <li><a href="/mainpage">Home</a></li>
          <li className="dropdown">
            <a href="#features">Features <i className="fas fa-chevron-down dropdown-arrow"></i></a>
            <div className="dropdown-content">
              <a href="/resume-builder">Resume Builder</a>
              <a href="/post-generator">Post Generator</a>
              <a href="/email-generator">Email Generator</a>
              <a href="/job-alerts">Job Alerts</a>
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
          <li><a href="/mainpage" onClick={() => setMenuOpen(false)}>Home</a></li>
          <li>
            <a
              href="#features"
              className={`mobile-features-toggle ${mobileDropdownOpen ? 'active' : ''}`}
              onClick={handleMobileFeaturesClick}
            >
              Features <i className="fas fa-chevron-down dropdown-arrow"></i>
            </a>
            <div className={`mobile-dropdown-content ${mobileDropdownOpen ? 'active' : ''}`}>
          <Link to="/resume-builder" onClick={handleMobileMenuClose}>Resume Builder</Link>
          <Link to="/post-generator" onClick={handleMobileMenuClose}>Post Generator</Link>
          <Link to="/email-generator" onClick={handleMobileMenuClose}>Email Generator</Link>
          <Link to="/job-alerts" onClick={handleMobileMenuClose}>Job Alerts</Link>
          <Link to="/training-courses" onClick={handleMobileMenuClose}>Training Courses</Link>
          </div>

          </li>
          <li><a href="#membership" onClick={() => setMenuOpen(false)}>Membership</a></li>
          <li><a href="#categories" onClick={() => setMenuOpen(false)}>Explore Categories</a></li>
        </ul>
        <Link to="/login" className="login-btn" onClick={() => setMenuOpen(false)}>
          <i className="fa-solid fa-right-to-bracket"></i> Login
        </Link>
      </div>
    </header>
  </>
);
};

export default Header;