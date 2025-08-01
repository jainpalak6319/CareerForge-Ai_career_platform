// src/components/resume/ResumePreview.jsx
import React, { useContext, useRef } from 'react';
import { ResumeContext } from '../context/ResumeContext';
import { Button } from 'react-bootstrap';
import html2pdf from 'html2pdf.js';
import { ThemeContext } from '../context/ThemeContext';
import { TemplateContext } from '../context/TemplateContext';
import ThemeTemplateSwitcher from './ThemeTemplateSwitcher';
import ClassicTemplate from '../templates/ClassicTemplate';
import ModernTemplate from '../templates/ModernTemplate';
import TwoColumnTemplate from '../templates/TwoColumnTemplate';

// Reusable section header style
const sectionHeaderStyle = {
  color: '#2D2F4A',
  borderLeft: '4px solid #2D2F4A',
  paddingLeft: '10px',
  marginTop: '1.5rem',
};

const ResumePreview = ({ onBack }) => {
  const { resumeData } = useContext(ResumeContext);
  const resumeRef = useRef();
  const { theme } = useContext(ThemeContext);
  const { template } = useContext(TemplateContext);
  // Define theme styles
const themeStyles = {
  light: { background: '#fff', color: '#333' },
  dark: { background: '#1e1e1e', color: '#f5f5f5' },
  professional: { background: '#f4f4f4', color: '#2D2F4A' },
};
  const appliedThemeStyle = themeStyles[theme] || themeStyles.light;
  const handleDownloadPDF = () => {
    const element = resumeRef.current;

    const opt = {
      margin: 0.5,
      filename: 'ATS_Optimized_Resume.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
    };

    html2pdf().set(opt).from(element).save();
  };

  const {
    formData,
    education,
    skills,
    experience,
    projects,
    summary,
    certificates,
  } = resumeData;
 // 🟢 Select correct template component
  let RenderedTemplate = null;
  if (template === 'classic') RenderedTemplate = <ClassicTemplate data={resumeData} />;
  else if (template === 'modern') RenderedTemplate = <ModernTemplate data={resumeData} />;
  else if (template === 'two-column') RenderedTemplate = <TwoColumnTemplate data={resumeData} />;
  return (
    <>
    <ThemeTemplateSwitcher/>
    <div style={{ position: 'relative', padding: '1rem', fontFamily: 'Poppins, sans-serif' }}>
      {/* Back to Edit button */}
      <Button
        variant="outline-secondary"
        size="sm"
        style={{ position: 'absolute', top: '10px', right: '10px', zIndex: 1000 }}
        onClick={onBack}
      >
        ⬅ Back to Edit
      </Button>

      {/* Download button */}
      <div className="text-center my-3">
        <Button variant="success" onClick={handleDownloadPDF}>
          Download Resume (PDF)
        </Button>
      </div>

      {/* Resume Content */}
      <div
        ref={resumeRef}
        style={{
          fontFamily: 'Poppins, sans-serif',
          padding: '20px',
          background: '#fff',
          color: '#333',
          ...appliedThemeStyle
        }}
      >
         {RenderedTemplate}
      </div>
    </div>
    </>
  );
  
};

export default ResumePreview;
