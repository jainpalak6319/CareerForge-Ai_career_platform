import React from 'react';

const TwoColumnTemplate = ({ data }) => {
  const {
    formData,
    education,
    skills,
    experience,
    projects,
    summary,
    certificates,
  } = data;

  return (
    <div style={{ display: 'flex', fontFamily: 'Poppins, sans-serif', gap: '2rem' }}>
      {/* Left Column */}
      <div style={{ width: '35%', borderRight: '1px solid #ccc', paddingRight: '1rem' }}>
        <h2 style={{ color: '#2D2F4A' }}>{formData.fullName}</h2>
        <p style={{ fontSize: '0.9rem' }}>
          {formData.email} <br />
          {formData.phone} <br />
          {formData.location} <br />
          {formData.linkedin && <a href={formData.linkedin}>LinkedIn</a>} <br />
          {formData.portfolio && <a href={formData.portfolio}>Portfolio</a>}
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
            <ul>
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
            <ul>
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
      <div style={{ width: '65%' }}>
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
                <strong>{exp.jobTitle}</strong> at <em>{exp.company}</em> ({exp.duration})
                <p>{exp.description}</p>
              </div>
            ))}
          </div>
        )}

        {projects.length > 0 && (
          <div>
            <h4 style={sectionTitle}>Projects</h4>
            {projects.map((proj, i) => (
              <div key={i}>
                <strong>{proj.title}</strong>{' '}
                {proj.link && <a href={proj.link}>[Link]</a>}
                <p><em>Tools:</em> {proj.tech}</p>
                <p>{proj.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const sectionTitle = {
  color: '#D96BA0',
  borderBottom: '1px solid #D96BA0',
  paddingBottom: '0.25rem',
  marginBottom: '0.5rem',
};

export default TwoColumnTemplate;
