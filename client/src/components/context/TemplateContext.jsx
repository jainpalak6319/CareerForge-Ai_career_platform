// src/context/TemplateContext.jsx
import React, { createContext, useState } from 'react';

export const TemplateContext = createContext();

export const TemplateProvider = ({ children }) => {
  const [template, setTemplate] = useState('modern'); // 'classic' | 'modern' | 'two-column'

  return (
    <TemplateContext.Provider value={{ template, setTemplate }}>
      {children}
    </TemplateContext.Provider>
  );
};
