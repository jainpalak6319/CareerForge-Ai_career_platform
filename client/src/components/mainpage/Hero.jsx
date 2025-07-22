import React, { useEffect } from 'react';

const Hero = () => {
  useEffect(() => {
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });

    // Hero button scroll
    const heroBtn = document.querySelector('.hero-btn');
    if (heroBtn) {
      heroBtn.addEventListener('click', () => {
        document.querySelector('#features').scrollIntoView({ behavior: 'smooth' });
      });
    }

    // Parallax effect
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const hero = document.querySelector('.hero');
      if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="hero" id="home">
      <h1>Forge Your Career Path</h1>
      <p>AI-powered tools to build resumes, generate professional content, and accelerate your career growth with cutting-edge technology</p>
      <button className="hero-btn">Get Started For Free</button>
    </section>
  );
};

export default Hero;