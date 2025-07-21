// src/pages/dashboard/JobSeekerDashboard.jsx
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const JobSeekerDashboard = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('careerforge-user'));

  return (
    <Container className="mt-5">
      <h2 className="mb-4 text-center" style={{ color: '#2D2F4A' }}>Welcome, {user?.name || 'Job Seeker'}</h2>
      <Row className="g-4">
        <Col md={6}>
          <Card className="shadow rounded-4 border-0">
            <Card.Body>
              <Card.Title style={{ color: '#D96BA0' }}>Build Your Resume</Card.Title>
              <Card.Text>
                Use our ATS-optimized resume builder to create your professional profile.
              </Card.Text>
              <Button variant="dark" onClick={() => navigate('/resume-builder')}>Start Building</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="shadow rounded-4 border-0">
            <Card.Body>
              <Card.Title style={{ color: '#D96BA0' }}>Check ATS Score</Card.Title>
              <Card.Text>
                Upload your resume and see how well it performs with Applicant Tracking Systems.
              </Card.Text>
              <Button variant="dark" onClick={() => navigate('/resume-builder#ats-check')}>Check ATS</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default JobSeekerDashboard;
