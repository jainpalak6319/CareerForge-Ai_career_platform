// src/context/TemplateContext.js
import { createContext, useState } from 'react';

export const TemplateContext = createContext();

export const TemplateProvider = ({ children }) => {
  const [template, setTemplate] = useState('classic'); // default
  return (
    <TemplateContext.Provider value={{ template, setTemplate }}>
      {children}
    </TemplateContext.Provider>
  );
};