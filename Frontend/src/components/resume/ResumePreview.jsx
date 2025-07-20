// src/components/resume/ResumePreview.jsx
import React, { forwardRef } from 'react';

const ResumePreview = forwardRef(({ formData }, ref) => {
  return (
    <div ref={ref} style={{ padding: '30px', fontFamily: 'Arial' }}>
      <h2 style={{ color: '#2D2F4A' }}>{formData.fullName}</h2>
      <p><strong>Email:</strong> {formData.email}</p>
      <p><strong>Phone:</strong> {formData.phone}</p>
      <p><strong>Location:</strong> {formData.location}</p>
      <p><strong>LinkedIn:</strong> {formData.linkedin}</p>
      <p><strong>Portfolio:</strong> {formData.portfolio}</p>

      <hr />

      <h3>Summary</h3>
      <p>{formData.summary}</p>

      <h3>Skills</h3>
      <ul>{formData.skills.map((skill, i) => <li key={i}>{skill}</li>)}</ul>

      <h3>Education</h3>
      {formData.education.map((edu, i) => (
        <div key={i}>
          <strong>{edu.degree}</strong> at {edu.school} ({edu.year})
        </div>
      ))}

      <h3>Experience</h3>
      {formData.experience.map((exp, i) => (
        <div key={i}>
          <strong>{exp.jobTitle}</strong> at {exp.company} ({exp.duration})  
          <p>{exp.description}</p>
        </div>
      ))}

      <h3>Projects</h3>
      {formData.projects.map((proj, i) => (
        <div key={i}>
          <strong>{proj.title}</strong> – {proj.tech}  
          <p>{proj.description}</p>
          <a href={proj.link} target="_blank" rel="noopener noreferrer">{proj.link}</a>
        </div>
      ))}
    </div>
  );
});

export default ResumePreview;
