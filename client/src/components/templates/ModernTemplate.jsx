import React from 'react';

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

  const sectionStyle = {
    marginTop: '1.5rem',
    borderBottom: '1px solid #e0e0e0',
    paddingBottom: '0.75rem',
    backgroundColor: '#ffffff',
    padding: '1rem',
    borderRadius: '6px',
    boxShadow: '0 0 4px rgba(0, 0, 0, 0.05)',
  };

  const labelStyle = {
    fontWeight: '600',
    color: '#2D2F4A', // Deeper purple for headers
    fontSize: '1.15rem',
    borderLeft: '4px solid #4DB6AC', // Soft teal accent for left border
    paddingLeft: '10px',
    marginBottom: '0.5rem',
    backgroundColor: '#F4F6F8',
    paddingTop: '4px',
    paddingBottom: '4px',
  };

  const linkStyle = {
    color: '#1A237E', // Navy for links (ATS-safe)
    textDecoration: 'none',
    fontWeight: 500,
  };

  return (
    <div style={{ fontFamily: 'Poppins, sans-serif', lineHeight: 1.6, color: '#212121' }}>
      <header style={{ borderBottom: '2px solid #2D2F4A', paddingBottom: '0.5rem', marginBottom: '1rem' }}>
        <h1 style={{ margin: 0, color: '#2D2F4A', fontSize: '2rem', fontWeight: 700 }}>
          {formData.fullName}
        </h1>
        <p style={{ fontSize: '0.95rem', marginTop: '4px' }}>
          {formData.email} | {formData.phone} | {formData.location} <br />
          {formData.linkedin && (
            <>
              <a href={formData.linkedin} style={linkStyle} target="_blank" rel="noreferrer">
                LinkedIn
              </a>{' '}
              |{' '}
            </>
          )}
          {formData.portfolio && (
            <a href={formData.portfolio} style={linkStyle} target="_blank" rel="noreferrer">
              Portfolio
            </a>
          )}
        </p>
      </header>

      {summary && (
        <section style={sectionStyle}>
          <div style={labelStyle}>Professional Summary</div>
          <p style={{ margin: 0 }}>{summary}</p>
        </section>
      )}

      {skills.length > 0 && (
        <section style={sectionStyle}>
          <div style={labelStyle}>Skills</div>
          <p style={{ margin: 0 }}>{skills.join(' | ')}</p>
        </section>
      )}

      {experience.length > 0 && (
        <section style={sectionStyle}>
          <div style={labelStyle}>Experience</div>
          {experience.map((exp, i) => (
            <div key={i} style={{ marginBottom: '0.75rem' }}>
              <strong style={{ color: '#2D2F4A' }}>{exp.jobTitle}</strong> at{' '}
              <em>{exp.company}</em> ({exp.duration})
              <p style={{ margin: '0.25rem 0 0' }}>{exp.description}</p>
            </div>
          ))}
        </section>
      )}

      {projects.length > 0 && (
        <section style={sectionStyle}>
          <div style={labelStyle}>Projects</div>
          {projects.map((proj, i) => (
            <div key={i} style={{ marginBottom: '0.75rem' }}>
              <strong style={{ color: '#2D2F4A' }}>{proj.title}</strong>{' '}
              {proj.link && (
                <a href={proj.link} style={linkStyle} target="_blank" rel="noreferrer">
                  (View)
                </a>
              )}
              <p style={{ margin: '0.25rem 0 0' }}>
                <em>Tools:</em> {proj.tech}
              </p>
              <p style={{ margin: '0.25rem 0 0' }}>{proj.description}</p>
            </div>
          ))}
        </section>
      )}

      {education.length > 0 && (
        <section style={sectionStyle}>
          <div style={labelStyle}>Education</div>
          <ul style={{ paddingLeft: '1.2rem', margin: 0 }}>
            {education.map((edu, i) => (
              <li key={i} style={{ marginBottom: '0.4rem' }}>
                {edu.degree} from {edu.school} ({edu.year})
              </li>
            ))}
          </ul>
        </section>
      )}

      {certificates.some(cert => cert.name?.trim() !== '') && (
        <section style={sectionStyle}>
          <div style={labelStyle}>Certificates</div>
          <ul style={{ paddingLeft: '1.2rem', margin: 0 }}>
            {certificates.map((cert, i) =>
              cert.name?.trim() && (
                <li key={i} style={{ marginBottom: '0.4rem' }}>
                  {cert.name}
                  {cert.issuer && ` by ${cert.issuer}`}
                  {cert.date && ` on ${cert.date}`}
                  {cert.link && (
                    <>
                      {' '}
                      -{' '}
                      <a href={cert.link} style={linkStyle} target="_blank" rel="noreferrer">
                        {cert.link}
                      </a>
                    </>
                  )}
                </li>
              )
            )}
          </ul>
        </section>
      )}
    </div>
  );
};

export default ModernTemplate;
