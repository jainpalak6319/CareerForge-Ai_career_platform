// src/components/resume/ProjectsForm.jsx
import React, { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';

const ProjectsForm = ({ onNext }) => {
  const [projects, setProjects] = useState([
    { title: '', tech: '', link: '', description: '' },
  ]);

  const handleChange = (i, field, value) => {
    const updated = [...projects];
    updated[i][field] = value;
    setProjects(updated);
  };

  const addProject = () => {
    setProjects([
      ...projects,
      { title: '', tech: '', link: '', description: '' },
    ]);
  };

  return (
    <Card className="p-4 shadow-sm">
      <h4 className="mb-3" style={{ color: '#2D2F4A', fontWeight: '600' }}>🧪 Projects</h4>
      {projects.map((project, i) => (
        <Form key={i} className="mb-4">
          <Form.Group className="mb-2">
            <Form.Label>Project Title</Form.Label>
            <Form.Control
              value={project.title}
              placeholder="e.g., CareerForge"
              onChange={(e) => handleChange(i, 'title', e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Technology / Tools / Domain</Form.Label>
            <Form.Control
              value={project.tech}
              placeholder="e.g., React / Financial Modeling"
              onChange={(e) => handleChange(i, 'tech', e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Live Link / GitHub</Form.Label>
            <Form.Control
              value={project.link}
              placeholder="e.g., github.com/yourname/project"
              onChange={(e) => handleChange(i, 'link', e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={2}
              value={project.description}
              placeholder="What does it do? How did you build it?"
              onChange={(e) => handleChange(i, 'description', e.target.value)}
            />
          </Form.Group>
          <hr />
        </Form>
      ))}

      <div className="d-flex flex-column flex-md-row justify-content-between align-items-start mt-3">
        <Button
          variant="outline-primary"
          className="mb-3 mb-md-0"
          onClick={addProject}
        >
          + Add Project
        </Button>
        <Button
          style={{
            backgroundColor: '#D96BA0',
            color: '#fff',
            fontFamily: 'Poppins, sans-serif',
            border:'none'
          }}
          onClick={onNext}
        >
          Save & Next
        </Button>
      </div>
    </Card>
  );
};

export default ProjectsForm;
