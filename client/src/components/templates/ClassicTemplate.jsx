import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const ClassicTemplate = ({ data }) => {
  const {
    formData,
    education,
    skills,
    experience,
    projects,
    summary,
    certificates,
  } = data;

  const { theme } = useContext(ThemeContext);
  const isDark = theme === 'dark';
  const isProfessional = theme === 'professional';

  // Dynamic styles based on theme
  const containerStyle = {
    fontFamily: `'Georgia', 'Times New Roman', serif`,
    backgroundColor: isDark ? '#1e1e1e' : isProfessional ? '#F5F5F5' : '#FFFFFF',
    color: isDark ? '#f5f5f5' : isProfessional ? '#2D2F4A' : '#333333',
    padding: '25px',
    lineHeight: 1.6,
    fontSize: '1rem',
    borderRadius: '6px',
    minHeight: '100vh',
  };

  const headingStyle = {
    fontFamily: `'Poppins', sans-serif`,
    color: '#2D2F4A',
    fontSize: '2.2rem',
    fontWeight: 'bold',
    marginBottom: '0.3rem',
  };

  const contactStyle = {
    fontSize: '0.95rem',
    color: isDark ? '#ccc' : isProfessional ? '#2D2F4A' : '#444',
    marginBottom: '1rem',
  };

  const sectionTitleStyle = {
    color: '#D96BA0',
    fontWeight: '600',
    fontSize: '1.15rem',
    borderBottom: '2px solid #D96BA0',
    marginTop: '1.8rem',
    marginBottom: '0.5rem',
    paddingBottom: '0.2rem',
    fontFamily: `'Poppins', sans-serif`,
  };

  const linkStyle = {
    color: isDark ? '#F5F5F5' : isProfessional ? '#1A237E' : '#2D2F4A',
    fontWeight: '500',
    textDecoration: 'none',
  };

  const listItemStyle = {
    marginBottom: '0.4rem',
  };

  const footerStyle = {
    marginTop: '2rem',
    fontSize: '0.85rem',
    textAlign: 'center',
    color: isDark ? '#888' : isProfessional ? '#666' : '#999',
    borderTop: `1px solid ${isDark ? '#444' : '#eee'}`,
    paddingTop: '1rem',
    fontFamily: `'Poppins', sans-serif`,
    letterSpacing: '0.3px',
  };

  return (
    <div style={containerStyle}>
      {Object.keys(formData).length > 0 && (
        <>
          <h1 style={headingStyle}>{formData.fullName}</h1>
          <p style={contactStyle}>
            {formData.email && `${formData.email} | `}
            {formData.phone && `${formData.phone} | `}
            {formData.location}
            {formData.linkedin && (
              <>
                {' | '}
                <a
                  href={formData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={linkStyle}
                >
                  LinkedIn
                </a>
              </>
            )}
            {formData.portfolio && (
              <>
                {' | '}
                <a
                  href={formData.portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={linkStyle}
                >
                  Portfolio
                </a>
              </>
            )}
          </p>
        </>
      )}

      {summary && (
        <>
          <div style={sectionTitleStyle}>Professional Summary</div>
          <p>{summary}</p>
        </>
      )}

      {education.length > 0 && (
        <>
          <div style={sectionTitleStyle}>Education</div>
          <ul>
            {education.map((edu, i) => (
              <li key={i} style={listItemStyle}>
                <em>{edu.degree}</em>, {edu.school} ({edu.year})
              </li>
            ))}
          </ul>
        </>
      )}

      {skills.length > 0 && (
        <>
          <div style={sectionTitleStyle}>Skills</div>
          <p>{skills.join(', ')}</p>
        </>
      )}

      {experience.length > 0 && (
        <>
          <div style={sectionTitleStyle}>Experience</div>
          {experience.map((exp, i) => (
            <div key={i} style={{ marginBottom: '0.7rem' }}>
              <strong>{exp.jobTitle}</strong>, {exp.company} ({exp.duration})<br />
              <span>{exp.description}</span>
            </div>
          ))}
        </>
      )}

      {projects.length > 0 && (
        <>
          <div style={sectionTitleStyle}>Projects</div>
          {projects.map((proj, i) => (
            <div key={i} style={{ marginBottom: '0.7rem' }}>
              <strong>{proj.title}</strong>{' '}
              {proj.link && (
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={linkStyle}
                >
                  (View)
                </a>
              )}
              <br />
              <em>Tools:</em> {proj.tech}
              <br />
              <span>{proj.description}</span>
            </div>
          ))}
        </>
      )}

      {certificates.some(cert => cert.name?.trim() !== '') && (
        <>
          <div style={sectionTitleStyle}>Certificates</div>
          <ul>
            {certificates.map((cert, i) =>
              cert.name?.trim() && (
                <li key={i} style={listItemStyle}>
                  {cert.name}
                  {cert.issuer && ` by ${cert.issuer}`}
                  {cert.date && ` on ${cert.date}`}
                  {cert.link && (
                    <>
                      {' – '}
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={linkStyle}
                      >
                        {cert.link.replace(/^https?:\/\//, '')}
                      </a>
                    </>
                  )}
                </li>
              )
            )}
          </ul>
        </>
      )}

      <div style={footerStyle}>
        Resume generated using <strong>CareerForge</strong>
      </div>
    </div>
  );
};

export default ClassicTemplate;
