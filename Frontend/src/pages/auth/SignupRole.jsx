// src/pages/auth/SignupRole.jsx
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import slide1 from '../../assets/images/slide1.avif';
import slide2 from '../../assets/images/slide2.avif';
import slide3 from '../../assets/images/slide3.avif';
import { Carousel } from 'react-bootstrap';

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

  if (selectedRole === 'jobseeker') {
    navigate('/signup/jobseeker');
  } else if (selectedRole === 'recruiter') {
    navigate('/signup/recruiter');
  }
};


  return (
    <Container fluid className="min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <Row className="w-100" style={{ maxWidth: '1200px' }}>
        {/* Left Panel */}
        <Col
  md={6}
  className="d-none d-md-flex flex-column align-items-center justify-content-center p-4 text-center"
  style={{
    background: 'linear-gradient(135deg, #FDEBED 0%, #FFF4F9 100%)',
    borderRadius: '20px 0 0 20px',
  }}
  data-aos="fade-right"
>
  {/* Text-Based Logo */}
  <div className="mb-4">
    <h2 style={{ color: '#2D2F4A', fontWeight: 'bold', letterSpacing: '1px' }}>
      Career<span style={{ color: '#D96BA0' }}>Forge</span>
    </h2>
    <p className="text-muted" style={{ fontSize: '0.9rem' }}>
      Unlock Opportunities, Shape Your Career
    </p>
  </div>

  {/* Carousel */}
  <Carousel style={{ width: '90%' }} interval={2500} fade>
    <Carousel.Item>
      <img
        src={slide1}
        className="d-block w-100 rounded"
        style={{ maxHeight: '400px', objectFit: 'cover' }}
        alt="Slide 1"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        src={slide2}
        className="d-block w-100 rounded"
        style={{ maxHeight: '400px', objectFit: 'cover' }}
        alt="Slide 2"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        src={slide3}
        className="d-block w-100 rounded"
        style={{ maxHeight: '400px', objectFit: 'cover' }}
        alt="Slide 3"
      />
    </Carousel.Item>
  </Carousel>
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
  disabled={!selectedRole}
  style={{
    backgroundColor: '#2D2F4A',
    borderColor: '#2D2F4A',
    opacity: selectedRole ? 1 : 0.6,
    cursor: selectedRole ? 'pointer' : 'not-allowed'
  }}
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
