import React from 'react';

// Hooks
import { useRippleEffect } from "../components/hooks/useAnimation";


// Global Styles
import './MainPage.css';
import '../lib/fontAwesome'; // FontAwesome setup

// Components
import Header from '../components/mainpage/Header';
import Hero from '../components/mainpage/Hero';
import Features from '../components/mainpage/Features';
import CategorySection from '../components/mainpage/CategorySection';
import TrustedCompanies from '../components/mainpage/TrustedCompanies';
import Footer from '../components/mainpage/Footer';

function MainPage() {
  useRippleEffect(); // Remove this if not needed globally

  return (
    <div className="App">
      <Header />
      <Hero />
      <Features />
      <CategorySection />
      <TrustedCompanies />
      <Footer />
    </div>
  );
}

export default MainPage;
