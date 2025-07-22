import { useEffect, useRef } from 'react';

export const useScrollAnimation = (selector, options = {}) => {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
      ...options
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, [selector, options]);
};

export const useRippleEffect = () => {
  useEffect(() => {
    const buttons = document.querySelectorAll('button');
    
    const handleClick = (e) => {
      const btn = e.currentTarget;
      const rect = btn.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;
      
      const ripple = document.createElement('span');
      ripple.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        pointer-events: none;
        animation: ripple 0.6s ease-out;
      `;
      
      btn.style.position = 'relative';
      btn.style.overflow = 'hidden';
      btn.appendChild(ripple);
      
      setTimeout(() => ripple.remove(), 600);
    };

    buttons.forEach(btn => btn.addEventListener('click', handleClick));
    
    // Add ripple animation to CSS
    const style = document.createElement('style');
    style.textContent = `
      @keyframes ripple {
        0% { transform: scale(0); opacity: 1; }
        100% { transform: scale(1); opacity: 0; }
      }
    `;
    document.head.appendChild(style);

    return () => {
      buttons.forEach(btn => btn.removeEventListener('click', handleClick));
      document.head.removeChild(style);
    };
  }, []);
};