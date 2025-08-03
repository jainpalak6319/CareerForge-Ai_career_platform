import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const ModernTemplate = ({ data }) => {
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

  const containerStyle = {
    fontFamily: 'Poppins, sans-serif',
    lineHeight: 1.6,
    backgroundColor: isDark ? '#1e1e1e' : isProfessional ? '#F5F5F5' : '#FFFFFF',
    color: isDark ? '#f5f5f5' : isProfessional ? '#2D2F4A' : '#333',
    padding: '25px',
    minHeight: '100vh',
  };

  const sectionStyle = {
    marginTop: '1.5rem',
    borderBottom: isDark ? '1px solid #555' : '1px solid #ccc',
    paddingBottom: '0.5rem',
  };

  const labelStyle = {
  fontWeight: '600',
  color: isDark ? '#D96BA0' : '#D96BA0', // same color for light and professional
  fontSize: '1.1rem',
  borderLeft: `4px solid #D96BA0`,
  paddingLeft: '10px',
  marginBottom: '0.5rem',
  };

  const linkStyle = {
    color: isDark ? '#e0d9d9ff' : isProfessional ? '#1A237E' : '#2D2F4A',
    textDecoration: 'none',
    fontWeight: 500,
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
  const titleTextColor = isDark ? '#FFFFFF' : '#2D2F4A';

  return (
    <div style={containerStyle}>
      <header style={{ borderBottom: '2px solid #2D2F4A', paddingBottom: '0.5rem' }}>
        <h1 style={{ margin: 0, color: '#2D2F4A' }}>{formData.fullName}</h1>
        <p style={{ fontSize: '0.9rem', color: isDark ? '#ccc' : '#333' }}>
          {formData.email} | {formData.phone} | {formData.location} <br />
          {formData.linkedin && (
            <>
              <a
                href={formData.linkedin}
                style={linkStyle}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>{' '}
              |{' '}
            </>
          )}
          {formData.portfolio && (
            <a
              href={formData.portfolio}
              style={linkStyle}
              target="_blank"
              rel="noreferrer"
            >
              Portfolio
            </a>
          )}
        </p>
      </header>

      {summary && (
        <section style={sectionStyle}>
          <div style={labelStyle}>Professional Summary</div>
          <p>{summary}</p>
        </section>
      )}

      {skills.length > 0 && (
        <section style={sectionStyle}>
          <div style={labelStyle}>Skills</div>
          <p>{skills.join(' | ')}</p>
        </section>
      )}

      {experience.length > 0 && (
        <section style={sectionStyle}>
          <div style={labelStyle}>Experience</div>
          {experience.map((exp, i) => (
            <div key={i}>
              <strong style={{color: titleTextColor }}>{exp.jobTitle}</strong> at{' '}
              <em>{exp.company}</em> ({exp.duration})
              <p>{exp.description}</p>
            </div>
          ))}
        </section>
      )}

      {projects.length > 0 && (
        <section style={sectionStyle}>
          <div style={labelStyle}>Projects</div>
          {projects.map((proj, i) => (
            <div key={i}>
              <strong style={{color: titleTextColor }}>{proj.title}</strong>{' '}
              {proj.link && (
                <a
                  href={proj.link}
                  style={linkStyle}
                  target="_blank"
                  rel="noreferrer"
                >
                  (View)
                </a>
              )}
              <p>
                <em>Tools:</em> {proj.tech}
              </p>
              <p>{proj.description}</p>
            </div>
          ))}
        </section>
      )}

      {education.length > 0 && (
        <section style={sectionStyle}>
          <div style={labelStyle}>Education</div>
          <ul>
            {education.map((edu, i) => (
              <li key={i}>
                {edu.degree} from {edu.school} ({edu.year})
              </li>
            ))}
          </ul>
        </section>
      )}

      {certificates.some(cert => cert.name?.trim() !== '') && (
        <section style={sectionStyle}>
          <div style={labelStyle}>Certificates</div>
          <ul>
            {certificates.map((cert, i) =>
              cert.name?.trim() && (
                <li key={i}>
                  {cert.name}
                  {cert.issuer && ` by ${cert.issuer}`}
                  {cert.date && ` on ${cert.date}`}
                  {cert.link && ` - (${cert.link})`}
                </li>
              )
            )}
          </ul>
        </section>
      )}

      <div style={footerStyle}>
        Resume generated using <strong>CareerForge</strong>
      </div>
    </div>
  );
};

export default ModernTemplate;
