import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'react-toastify/dist/ReactToastify.css';
import './index.css'
import App from './App.jsx'
import './lib/fontAwesome'; 

// // Add Bootstrap CDN
const bootstrapCSS = document.createElement('link');
bootstrapCSS.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css';
bootstrapCSS.rel = 'stylesheet';
bootstrapCSS.integrity = 'sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM';
bootstrapCSS.crossOrigin = 'anonymous';
document.head.appendChild(bootstrapCSS);

const bootstrapJS = document.createElement('script');
bootstrapJS.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js';
bootstrapJS.integrity = 'sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz';
bootstrapJS.crossOrigin = 'anonymous';
document.head.appendChild(bootstrapJS);


// Add Google Fonts
const googleFonts = document.createElement('link');
googleFonts.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap';
googleFonts.rel = 'stylesheet';
document.head.appendChild(googleFonts);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
