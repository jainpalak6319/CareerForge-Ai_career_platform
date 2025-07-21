// src/pages/dashboard/RecruiterDashboard.jsx
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const RecruiterDashboard = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('careerforge-user'));

  return (
    <Container className="mt-5">
      <h2 className="mb-4 text-center" style={{ color: '#2D2F4A' }}>Welcome, {user?.name || 'Recruiter'}</h2>
      <Row className="g-4">
        <Col md={6}>
          <Card className="shadow rounded-4 border-0">
            <Card.Body>
              <Card.Title style={{ color: '#D96BA0' }}>Post a Job</Card.Title>
              <Card.Text>
                Create new job openings and start attracting top talent.
              </Card.Text>
              <Button variant="dark" onClick={() => navigate('/post-job')}>Post Now</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="shadow rounded-4 border-0">
            <Card.Body>
              <Card.Title style={{ color: '#D96BA0' }}>Manage Applicants</Card.Title>
              <Card.Text>
                View applications and shortlist candidates based on ATS scores.
              </Card.Text>
              <Button variant="dark" onClick={() => navigate('/manage-applicants')}>View Applicants</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default RecruiterDashboard;
