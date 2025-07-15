// src/pages/auth/SignupRole.jsx
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const SignupRole = () => {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState(null);

  useEffect(() => {
    AOS.init();
  }, []);

  const handleSelect = (role) => {
    setSelectedRole(role);
  };

  const handleNext = () => {
    if (!selectedRole) {
      alert('Please select a role to continue.');
      return;
    }
    localStorage.setItem('careerforge-role', selectedRole);
    navigate('/signup/details');
  };

  return (
    <Container fluid className="min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <Row className="w-100" style={{ maxWidth: '1200px' }}>
        {/* Left Panel */}
        <Col
          md={6}
          className="d-none d-md-flex align-items-center justify-content-center p-4"
          style={{ backgroundColor: '#FDEBED', borderRadius: '20px 0 0 20px' }}
          data-aos="fade-right"
        >
          <img
            src="https://cdn.unstop.com/uploads/images/homepage/job-types.webp"
            alt="Job Types"
            className="img-fluid rounded"
            style={{ maxHeight: '500px' }}
          />
        </Col>

        {/* Right Panel */}
        <Col
          md={6}
          className="bg-white p-5 shadow-sm rounded-end"
          data-aos="fade-left"
        >
          <h3 className="mb-4" style={{ color: '#2D2F4A' }}>Create a new account</h3>
          <p className="text-muted mb-4">Join CareerForge and find your dream job or recruit top talent</p>

          <Row>
            <Col md={12} className="mb-3">
              <Card
                onClick={() => handleSelect('jobseeker')}
                className={`p-3 cursor-pointer border ${selectedRole === 'jobseeker' ? 'border-3 border-success' : ''}`}
                style={{ cursor: 'pointer', backgroundColor: selectedRole === 'jobseeker' ? '#FFF9F9' : '#F5F5F5' }}
              >
                <h5 className="mb-1">👤 Sign up as a Candidate</h5>
                <p className="text-muted mb-0">Compete, learn, and apply for jobs and internships</p>
              </Card>
            </Col>

            <Col md={12}>
              <Card
                onClick={() => handleSelect('recruiter')}
                className={`p-3 cursor-pointer border ${selectedRole === 'recruiter' ? 'border-3 border-success' : ''}`}
                style={{ cursor: 'pointer', backgroundColor: selectedRole === 'recruiter' ? '#FFF9F9' : '#F5F5F5' }}
              >
                <h5 className="mb-1">🏢 Sign up as a Recruiter</h5>
                <p className="text-muted mb-0">Hire talent, post jobs, and manage opportunities</p>
              </Card>
            </Col>
          </Row>

          <div className="d-flex justify-content-between align-items-center mt-4">
            <a href="/login" style={{ color: '#2D2F4A' }}>Already have an account? Login</a>
            <Button
              onClick={handleNext}
              style={{ backgroundColor: '#2D2F4A', borderColor: '#2D2F4A' }}
            >
              Next
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SignupRole;
