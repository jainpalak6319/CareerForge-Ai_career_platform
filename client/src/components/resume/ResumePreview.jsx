// src/components/resume/ResumePreview.jsx
import React, { useContext, useRef } from 'react';
import { ResumeContext } from '../context/ResumeContext';
import { Button } from 'react-bootstrap';
import html2pdf from 'html2pdf.js';

const ResumePreview = ({ onBack }) => {
  const { resumeData } = useContext(ResumeContext);
  const resumeRef = useRef();

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

  return (
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
        }}
      >
        {Object.keys(formData).length > 0 && (
          <>
            <h2 style={{ color: '#2D2F4A', marginBottom: '0' }}>{formData.fullName}</h2>
            <p style={{ marginTop: '0.5rem', fontSize: '0.95rem' }}>
              {formData.email && `${formData.email} | `}
              {formData.phone && `${formData.phone} | `}
              {formData.location && `${formData.location} `}
              {formData.linkedin && `| `}<a href={formData.linkedin} target="_blank" rel="noopener noreferrer">{formData.linkedin && 'LinkedIn'}</a>
              {formData.portfolio && ` | `}<a href={formData.portfolio} target="_blank" rel="noopener noreferrer">{formData.portfolio && 'Portfolio'}</a>
            </p>
            <hr />
          </>
        )}

        {summary && (
          <>
            <h4 style={sectionHeaderStyle}>Professional Summary</h4>
            <p>{summary}</p>
            <hr />
          </>
        )}

        {education.length > 0 && (
          <>
            <h4 style={sectionHeaderStyle}>Education</h4>
            <ul>
              {education.map((edu, i) => (
                <li key={i}>
                  {edu.degree} from {edu.school} ({edu.year})
                </li>
              ))}
            </ul>
            <hr />
          </>
        )}

        {skills.length > 0 && (
          <>
            <h4 style={sectionHeaderStyle}>Skills</h4>
            <p>{skills.join(', ')}</p>
            <hr />
          </>
        )}

        {experience.length > 0 && (
          <>
            <h4 style={sectionHeaderStyle}>Experience</h4>
            {experience.map((exp, i) => (
              <div key={i}>
                <strong>{exp.jobTitle}</strong> at {exp.company} ({exp.duration})
                <p>{exp.description}</p>
              </div>
            ))}
            <hr />
          </>
        )}

        {projects.length > 0 && (
          <>
            <h4 style={sectionHeaderStyle}>Projects</h4>
            {projects.map((proj, i) => (
              <div key={i}>
                <strong>{proj.title}</strong> - {proj.link && <a href={proj.link}>View</a>}
                <p>Tools Used - {proj.tech}</p>
                <p>{proj.description}</p>
              </div>
            ))}
            <hr />
          </>
        )}

        {certificates.some(cert => cert.name?.trim() !== '') && (
          <>
            <h4 style={sectionHeaderStyle}>Certificates</h4>
            <ul>
              {certificates.map((cert, i) => (
                cert.name?.trim() && (
                  <li key={i}>
                    {cert.name}
                    {cert.issuer && ` by ${cert.issuer}`}
                    {cert.date && ` on ${cert.date}`}
                    {cert.link && ` - (${cert.link})`}
                  </li>
                )
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

// Reusable section header style
const sectionHeaderStyle = {
  color: '#2D2F4A',
  borderLeft: '4px solid #2D2F4A',
  paddingLeft: '10px',
  marginTop: '1.5rem',
};

export default ResumePreview;
