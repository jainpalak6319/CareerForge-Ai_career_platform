// src/components/resume/SkillsForm.jsx
import React, { useState } from 'react';
import { Card, Form, Button, Badge } from 'react-bootstrap';

const SkillsForm = ({ onNext }) => {
  const [skills, setSkills] = useState([]);
  const [input, setInput] = useState('');

  const addSkill = () => {
    if (input.trim()) {
      setSkills([...skills, input.trim()]);
      setInput('');
    }
  };

  const removeSkill = (index) => {
    setSkills(skills.filter((_, i) => i !== index));
  };

  return (
    <Card className="p-4 shadow rounded-4 border-0" style={{ backgroundColor: '#F5F5F5' }}>
      <h4 className="mb-3 fw-bold" style={{ color: '#2D2F4A', fontFamily: 'Poppins' }}>🛠️ Skills</h4>
      <p className="text-muted mb-3">Add your relevant technical and soft skills below.</p>

      <Form className="d-flex mb-4">
        <Form.Control
          type="text"
          value={input}
          placeholder="e.g., JavaScript, Team Leadership"
          className="rounded-start"
          onChange={(e) => setInput(e.target.value)}
        />
        <Button
          className="rounded-end"
          style={{
            backgroundColor: '#D96BA0',
            border: 'none',
            transition: '0.3s',
          }}
          onClick={addSkill}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#c0558e')}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#D96BA0')}
        >
          Add
        </Button>
      </Form>

      <div className="mb-4">
        {skills.map((skill, index) => (
          <Badge
            key={index}
            pill
            bg="secondary"
            className="me-2 mb-2 px-3 py-2"
            style={{ backgroundColor: '#2D2F4A', fontSize: '0.9rem', fontWeight: '500' }}
          >
            {skill}{' '}
            <span
              style={{ cursor: 'pointer', marginLeft: '6px', fontWeight: 'bold' }}
              onClick={() => removeSkill(index)}
            >
              ×
            </span>
          </Badge>
        ))}
      </div>

      <Card className="mt-4 p-3 rounded-3" style={{ backgroundColor: '#ffffff' }}>
        <h6 className="fw-semibold mb-2" style={{ color: '#2D2F4A' }}>💡 Pro Tips:</h6>
        <ul className="mb-0 ps-3 text-muted" style={{ fontSize: '0.95rem' }}>
          <li>Focus on skills listed in job descriptions you're targeting</li>
          <li>Include both technical and interpersonal skills</li>
          <li>Use keywords that ATS systems recognize</li>
        </ul>
      </Card>

      <div className="d-flex justify-content-end mt-4">
        <Button
          className="px-4 py-2 rounded-3 fw-semibold"
          style={{
            backgroundColor: '#D96BA0',
            color: '#fff',
            border: 'none',
            fontFamily: 'Poppins, sans-serif',
            transition: '0.3s',
          }}
          onClick={onNext}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#D96BA0')}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#D96BA0')}
        >
          Save & Next
        </Button>
      </div>
    </Card>
  );
};

export default SkillsForm;
