import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const TwoColumnTemplate = ({ data }) => {
  const { theme } = useContext(ThemeContext);

  const {
    formData,
    education,
    skills,
    experience,
    projects,
    summary,
    certificates,
  } = data;

  // Theme-based colors
  const colors = {
    light: {
      header: '#2D2F4A',
      section: '#D96BA0',
      text: '#333',
      title: '#000',
      bg: '#fff',
    },
    dark: {
      header: '#ffffff',
      section: '#ffffff',
      text: '#ddd',
      title: '#ffffff',
      bg: '#1e1e1e',
    },
    professional: {
      header: '#2D2F4A',
      section: '#2D2F4A',
      text: '#222',
      title: '#000',
      bg: '#fdfdfd',
    },
  };

  const themeColors = colors[theme] || colors.light;

  const containerStyle = {
    display: 'flex',
    fontFamily: 'Poppins, sans-serif',
    gap: '2rem',
    backgroundColor: themeColors.bg,
    color: themeColors.text,
    padding: '1.5rem',
    minHeight: '100vh',
    flexDirection: 'column',
  };

  const contentStyle = {
    display: 'flex',
    gap: '2rem',
    flex: 1,
  };

  const leftColumn = {
    width: '35%',
    borderRight: `1px solid ${themeColors.section}`,
    paddingRight: '1rem',
  };

  const rightColumn = {
    width: '65%',
  };

  const sectionTitle = {
    color: themeColors.section,
    borderBottom: `1px solid ${themeColors.section}`,
    paddingBottom: '0.25rem',
    marginBottom: '0.5rem',
    fontWeight: 600,
  };

  const jobOrProjectTitle = {
    color: theme === 'dark' ? '#ffffff' : '#000000',
    fontWeight: 'bold',
  };

  const footerStyle = {
    marginTop: '2rem',
    fontSize: '0.85rem',
    textAlign: 'center',
    color: themeColors.text,
    borderTop: `1px solid ${themeColors.section}`,
    paddingTop: '1rem',
  };

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        {/* Left Column */}
        <div style={leftColumn}>
          <h2 style={{ color: themeColors.header }}>{formData.fullName}</h2>
          <p style={{ fontSize: '0.9rem' }}>
            {formData.email} <br />
            {formData.phone} <br />
            {formData.location} <br />
            {formData.linkedin && <a href={formData.linkedin} style={{ color: themeColors.section }}>LinkedIn</a>} <br />
            {formData.portfolio && <a href={formData.portfolio} style={{ color: themeColors.section }}>Portfolio</a>}
          </p>

          {skills.length > 0 && (
            <div style={{ marginTop: '1rem' }}>
              <h4 style={sectionTitle}>Skills</h4>
              <ul style={{ paddingLeft: '1rem' }}>
                {skills.map((skill, i) => <li key={i}>{skill}</li>)}
              </ul>
            </div>
          )}

          {education.length > 0 && (
            <div style={{ marginTop: '1rem' }}>
              <h4 style={sectionTitle}>Education</h4>
              <ul style={{ paddingLeft: '1rem' }}>
                {education.map((edu, i) => (
                  <li key={i}>
                    {edu.degree} <br />
                    <small>{edu.school}, {edu.year}</small>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {certificates.some(cert => cert.name?.trim() !== '') && (
            <div style={{ marginTop: '1rem' }}>
              <h4 style={sectionTitle}>Certificates</h4>
              <ul style={{ paddingLeft: '1rem' }}>
                {certificates.map((cert, i) =>
                  cert.name?.trim() && (
                    <li key={i}>
                      {cert.name}
                      {cert.issuer && ` by ${cert.issuer}`}
                      {cert.date && ` (${cert.date})`}
                    </li>
                  )
                )}
              </ul>
            </div>
          )}
        </div>

        {/* Right Column */}
        <div style={rightColumn}>
          {summary && (
            <div style={{ marginBottom: '1.5rem' }}>
              <h4 style={sectionTitle}>Professional Summary</h4>
              <p>{summary}</p>
            </div>
          )}

          {experience.length > 0 && (
            <div style={{ marginBottom: '1.5rem' }}>
              <h4 style={sectionTitle}>Experience</h4>
              {experience.map((exp, i) => (
                <div key={i} style={{ marginBottom: '0.8rem' }}>
                  <div style={jobOrProjectTitle}>{exp.jobTitle}</div>
                  <em>{exp.company}</em> ({exp.duration})
                  <p>{exp.description}</p>
                </div>
              ))}
            </div>
          )}

          {projects.length > 0 && (
            <div>
              <h4 style={sectionTitle}>Projects</h4>
              {projects.map((proj, i) => (
                <div key={i} style={{ marginBottom: '0.8rem' }}>
                  <div style={jobOrProjectTitle}>{proj.title}</div>{' '}
                  {proj.link && <a href={proj.link} style={{ color: themeColors.section }}>[Link]</a>}
                  <p><em>Tools:</em> {proj.tech}</p>
                  <p>{proj.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <div style={footerStyle}>
        Resume generated using <strong>CareerForge</strong>
      </div>
    </div>
  );
};

export default TwoColumnTemplate;
