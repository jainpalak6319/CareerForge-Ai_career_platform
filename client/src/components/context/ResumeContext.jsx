// src/context/ResumeContext.jsx
import React, { createContext, useState } from 'react';

export const ResumeContext = createContext();

export const ResumeProvider = ({ children }) => {
  const [resumeData, setResumeData] = useState({
    formData: {},
    education: [],
    skills: [],
    experience: [],
    projects: [],
    summary: '',
    certificates: [],
  });

  return (
    <ResumeContext.Provider value={{ resumeData, setResumeData }}>
      {children}
    </ResumeContext.Provider>
  );
};
