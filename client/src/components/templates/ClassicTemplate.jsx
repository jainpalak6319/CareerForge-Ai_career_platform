import React from 'react';

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

  const containerStyle = {
    fontFamily: `'Georgia', 'Times New Roman', serif`,
    color: '#000',
    padding: '20px',
    lineHeight: 1.5,
    fontSize: '0.98rem',
  };

  const headingStyle = {
    fontFamily: `'Poppins', sans-serif`,
    color: '#2D2F4A',
    fontSize: '2rem',
    marginBottom: '0.2rem',
  };

  const subHeaderStyle = {
    fontSize: '1.05rem',
    fontWeight: 'bold',
    textDecoration: 'underline',
    marginTop: '1.2rem',
    marginBottom: '0.4rem',
  };

  const contactStyle = {
    fontSize: '0.9rem',
    marginBottom: '1rem',
  };

  const linkStyle = {
    color: '#1A237E',
    textDecoration: 'none',
    fontWeight: '500',
  };

  return (
    <div style={containerStyle}>
      {Object.keys(formData).length > 0 && (
        <>
          <h1 style={headingStyle}>{formData.fullName}</h1>
          <p style={contactStyle}>
            {formData.email && `${formData.email} | `}
            {formData.phone && `${formData.phone} | `}
            {formData.location && `${formData.location}`}
            {formData.linkedin && ` | `}
            {formData.linkedin && (
              <a href={formData.linkedin} target="_blank" rel="noopener noreferrer" style={linkStyle}>
                LinkedIn
              </a>
            )}
            {formData.portfolio && ` | `}
            {formData.portfolio && (
              <a href={formData.portfolio} target="_blank" rel="noopener noreferrer" style={linkStyle}>
                Portfolio
              </a>
            )}
          </p>
        </>
      )}

      {summary && (
        <>
          <div style={subHeaderStyle}>Professional Summary</div>
          <p>{summary}</p>
        </>
      )}

      {education.length > 0 && (
        <>
          <div style={subHeaderStyle}>Education</div>
          <ul>
            {education.map((edu, i) => (
              <li key={i}>
                <em>{edu.degree}</em>, {edu.school} ({edu.year})
              </li>
            ))}
          </ul>
        </>
      )}

      {skills.length > 0 && (
        <>
          <div style={subHeaderStyle}>Skills</div>
          <p>{skills.join(', ')}</p>
        </>
      )}

      {experience.length > 0 && (
        <>
          <div style={subHeaderStyle}>Experience</div>
          {experience.map((exp, i) => (
            <div key={i} style={{ marginBottom: '0.6rem' }}>
              <strong>{exp.jobTitle}</strong>, {exp.company} ({exp.duration})<br />
              <span>{exp.description}</span>
            </div>
          ))}
        </>
      )}

      {projects.length > 0 && (
        <>
          <div style={subHeaderStyle}>Projects</div>
          {projects.map((proj, i) => (
            <div key={i} style={{ marginBottom: '0.6rem' }}>
              <strong>{proj.title}</strong>{' '}
              {proj.link && (
                <a href={proj.link} target="_blank" rel="noopener noreferrer" style={linkStyle}>
                  (View)
                </a>
              )}
              <br />
              <em>Tools Used:</em> {proj.tech}
              <br />
              <span>{proj.description}</span>
            </div>
          ))}
        </>
      )}

      {certificates.some(cert => cert.name?.trim() !== '') && (
        <>
          <div style={subHeaderStyle}>Certificates</div>
          <ul>
            {certificates.map((cert, i) =>
              cert.name?.trim() && (
                <li key={i}>
                  {cert.name}
                  {cert.issuer && ` by ${cert.issuer}`}
                  {cert.date && ` on ${cert.date}`}
                  {cert.link && (
                    <>
                      {' '}
                      -{' '}
                      <a href={cert.link} target="_blank" rel="noopener noreferrer" style={linkStyle}>
                        {cert.link}
                      </a>
                    </>
                  )}
                </li>
              )
            )}
          </ul>
        </>
      )}
    </div>
  );
};

export default ClassicTemplate;
