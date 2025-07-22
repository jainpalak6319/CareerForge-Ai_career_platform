import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-column">
          <h4>Career Forge</h4>
          <p>Empowering professionals worldwide with AI-powered career tools...</p>
          <div className="social-icons">
             <a href="#"><FontAwesomeIcon icon={['fab', 'facebook-f']} /></a>
        <a href="#"><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
        <a href="#"><FontAwesomeIcon icon={['fab', 'linkedin-in']} /></a>
        <a href="#"><FontAwesomeIcon icon={['fab', 'instagram']} /></a>
      </div>
        </div>
           <div className="footer-column">
          <h4>Tools</h4>
          <ul>
            <li><a href="#resume-builder">Resume Builder</a></li>
            <li><a href="#post-generator">Post Generator</a></li>
            <li><a href="#email-generator">Email Generator</a></li>
            <li><a href="#job-alerts">Job Alerts</a></li>
            <li><a href="#training-courses">Training Courses</a></li>
          </ul>
        </div>
        
        <div className="footer-column">
          <h4>Company</h4>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#team">Our Team</a></li>
            <li><a href="#careers">Careers</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#privacy">Privacy Policy</a></li>
          </ul>
        </div>
        
        <div className="footer-column">
          <h4>Support</h4>
          <ul>
            <li><a href="#help">Help Center</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#tutorials">Tutorials</a></li>
            <li><a href="#community">Community</a></li>
            <li><a href="#feedback">Feedback</a></li>
          </ul>
        </div>
        
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2024 Career Forge. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;