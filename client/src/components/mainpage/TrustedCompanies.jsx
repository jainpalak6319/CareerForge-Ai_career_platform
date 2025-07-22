import React, { useEffect } from 'react';

const TrustedCompanies = () => {
  useEffect(() => {
    const logoSlide = document.querySelector('.logos-slide');
    const container = document.querySelector('.company-logos-container');
    
    if (!logoSlide || !container) return;
    
    const handleMouseEnter = () => logoSlide.style.animationPlayState = 'paused';
    const handleMouseLeave = () => logoSlide.style.animationPlayState = 'running';
    
    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);
    
    const adjustAnimationSpeed = () => {
      const containerWidth = container.offsetWidth;
      const logosWidth = (160 * 16) + (40 * 15);
      const baseDuration = 30;
      const adjustedDuration = baseDuration * (logosWidth / containerWidth);
      logoSlide.style.animationDuration = `${adjustedDuration}s`;
    };
    
    adjustAnimationSpeed();
    window.addEventListener('resize', adjustAnimationSpeed);
    
    return () => {
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', adjustAnimationSpeed);
    };
  }, []);

  const companies = [
    { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
      { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
    { name: "Apple", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
    { name: "Netflix", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" },
    { name: "Tesla", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png" },
    { name: "Spotify", logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg" },
    { name: "Uber", logo: "https://upload.wikimedia.org/wikipedia/commons/5/58/Uber_logo_2018.svg" },
    { name: "Airbnb", logo: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg" },
    { name: "IBM", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
    { name: "Oracle", logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg" }
  ];

  return (
    <section className="trusted-companies">
      <h2>Trusted by Professionals at Leading Companies</h2>
      <p>Join thousands of professionals who have advanced their careers with Career Forge</p>
      
      <div className="company-logos-container">
        <div className="logos-slide">
          {[...companies, ...companies].map((company, i) => (
            <div key={i} className="logo-item">
              <img src={company.logo} alt={company.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedCompanies;