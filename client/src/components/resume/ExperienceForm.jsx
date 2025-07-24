// src/components/resume/ExperienceForm.jsx
import React, { useState,useEffect,useContext } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import { ResumeContext } from '../context/ResumeContext';
const ExperienceForm = ({ onNext }) => {
  const { resumeData, setResumeData } = useContext(ResumeContext);
  const [experience, setExperience] = useState(() => {
  return resumeData.experience?.length
    ? resumeData.experience
    : [{ jobTitle: '', company: '', duration: '', description: '' }];
});

useEffect(() => {
    setResumeData(prev => ({ ...prev, experience}));
  }, [experience]);

  const handleChange = (i, field, value) => {
    const updated = [...experience];
    updated[i][field] = value;
    setExperience(updated);
  };

  const addExperience = () => {
    setExperience([...experience, { jobTitle: '', company: '', duration: '', description: '' }]);
  };

  const handleSaveNext = () => {
    // Optionally validate/save to state/localStorage before next
    if (onNext) onNext();
  };

  return (
    <Card className="p-4 shadow-sm" style={{ backgroundColor: '#ffffff', borderRadius: '12px' }}>
      <h4 className="mb-3" style={{ color: '#2D2F4A', fontWeight: '600' }}>💼 Experience</h4>
      <p style={{ color: '#333', marginBottom: '1.5rem' }}>
        List your past work experience with roles and achievements.
      </p>

      {experience.map((exp, i) => (
        <Form key={i} className="mb-4">
          <Form.Group className="mb-2">
            <Form.Label style={{ fontWeight: '500', color: '#2D2F4A' }}>Job Title</Form.Label>
            <Form.Control
              value={exp.jobTitle}
              placeholder="e.g., Frontend Developer"
              onChange={(e) => handleChange(i, 'jobTitle', e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Label style={{ fontWeight: '500', color: '#2D2F4A' }}>Company Name</Form.Label>
            <Form.Control
              value={exp.company}
              placeholder="e.g., Google"
              onChange={(e) => handleChange(i, 'company', e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Label style={{ fontWeight: '500', color: '#2D2F4A' }}>Duration</Form.Label>
            <Form.Control
              value={exp.duration}
              placeholder="e.g., Jan 2023 – Present"
              onChange={(e) => handleChange(i, 'duration', e.target.value)}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label style={{ fontWeight: '500', color: '#2D2F4A' }}>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={2}
              value={exp.description}
              placeholder="Describe your responsibilities and achievements"
              onChange={(e) => handleChange(i, 'description', e.target.value)}
            />
          </Form.Group>
          <hr />
        </Form>
      ))}

      <div className="d-flex justify-content-between align-items-center mt-2">
        <Button onClick={addExperience} className="btn-sm" style={{ backgroundColor: '#D96BA0', border: 'none' }}>
          + Add Experience
        </Button>

        <Button
          onClick={handleSaveNext}
          className="btn btn-primary"
          style={{ backgroundColor: '#D96BA0', color: '#fff', fontFamily: 'Poppins, sans-serif', border: 'none' }}
        >
          Save and Next
        </Button>
      </div>
    </Card>
  );
};

export default ExperienceForm;
