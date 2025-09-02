import React from 'react';

// Hooks
import { useRippleEffect } from "../components/hooks/useAnimation";


// Global Styles
import './MainPage.css';
import '../lib/fontAwesome'; // FontAwesome setup

// Components

import Hero from '../components/mainpage/Hero';
import Features from '../components/mainpage/Features';
import CategorySection from '../components/mainpage/CategorySection';
import TrustedCompanies from '../components/mainpage/TrustedCompanies';


function MainPage() {
  useRippleEffect(); // Remove this if not needed globally

  return (
    <div className="App">
      
      <Hero />
      <Features />
      <CategorySection />
      <TrustedCompanies />
      
    </div>
  );
}

export default MainPage;
