// src/pages/auth/RecruiterSignup.jsx
import React, { useState } from 'react';
import { Button, Col, Container, Form, InputGroup, Row, Carousel, Card } from 'react-bootstrap';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { toast } from 'react-toastify';
import AOS from 'aos';
import { useNavigate } from 'react-router-dom';

import slide1 from '../../assets/images/slide1.avif';
import slide2 from '../../assets/images/slide2.avif';
import slide3 from '../../assets/images/slide3.avif';

AOS.init();

const RecruiterSignup = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    companyName: '',
    designation: '',
    location: '',
    website: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { fullName, email, password, confirmPassword, companyName } = formData;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!fullName || !email || !password || !confirmPassword || !companyName) {
      toast.error('Please fill in all required fields.');
      return;
    }

    if (!emailRegex.test(email)) {
      toast.error('Invalid email format.');
      return;
    }

    if (password !== confirmPassword) {
      toast.error('Passwords do not match.');
      return;
    }

    toast.success('Recruiter signup successful (frontend only)');
    navigate('/login');
  };

  return (
    <Container fluid className="min-vh-100 d-flex align-items-center justify-content-center bg-white">
      <Row className="w-100">
        {/* Left Column */}
        <Col
          md={6}
          className="d-none d-md-flex flex-column align-items-center justify-content-center p-4 text-center"
          style={{
            background: 'linear-gradient(135deg, #FDEBED 0%, #FFF4F9 100%)',
            borderRadius: '20px 0 0 20px',
          }}
          data-aos="fade-right"
        >
          <div className="mb-4">
            <h2 style={{ color: '#2D2F4A', fontWeight: 'bold', letterSpacing: '1px' }}>
              Career<span style={{ color: '#D96BA0' }}>Forge</span>
            </h2>
            <p className="text-muted" style={{ fontSize: '0.9rem' }}>
              Find the Right Talent for Your Team
            </p>
          </div>

          <Carousel style={{ width: '90%' }} interval={2500} fade>
            <Carousel.Item>
              <img src={slide1} className="d-block w-100 rounded" alt="Slide 1" style={{ maxHeight: 400, objectFit: 'cover' }} />
            </Carousel.Item>
            <Carousel.Item>
              <img src={slide2} className="d-block w-100 rounded" alt="Slide 2" style={{ maxHeight: 400, objectFit: 'cover' }} />
            </Carousel.Item>
            <Carousel.Item>
              <img src={slide3} className="d-block w-100 rounded" alt="Slide 3" style={{ maxHeight: 400, objectFit: 'cover' }} />
            </Carousel.Item>
          </Carousel>
        </Col>

        {/* Right Column */}
        <Col md={6} className="d-flex align-items-center justify-content-center p-4" data-aos="fade-left">
          <Card className="w-100 shadow p-4" style={{ borderRadius: '20px' }}>
            <h3 className="text-center mb-4" style={{ color: '#2D2F4A' }}>Recruiter Sign Up</h3>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  style={{ backgroundColor: '#F5F5F5', border: 'none' }}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Company Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter company email"
                  style={{ backgroundColor: '#F5F5F5', border: 'none' }}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <InputGroup>
                  <Form.Control
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter password"
                    style={{ backgroundColor: '#F5F5F5', border: 'none' }}
                  />
                  <Button variant="light" onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </Button>
                </InputGroup>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm password"
                  style={{ backgroundColor: '#F5F5F5', border: 'none' }}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Company Name</Form.Label>
                <Form.Control
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="Enter your company name"
                  style={{ backgroundColor: '#F5F5F5', border: 'none' }}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Designation</Form.Label>
                <Form.Control
                  name="designation"
                  value={formData.designation}
                  onChange={handleChange}
                  placeholder="Your role in the company"
                  style={{ backgroundColor: '#F5F5F5', border: 'none' }}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Company Location</Form.Label>
                <Form.Control
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="e.g., Bangalore, Mumbai"
                  style={{ backgroundColor: '#F5F5F5', border: 'none' }}
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label>Company Website (optional)</Form.Label>
                <Form.Control
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  placeholder="https://yourcompany.com"
                  style={{ backgroundColor: '#F5F5F5', border: 'none' }}
                />
              </Form.Group>

              <Button
                type="submit"
                className="w-100 py-2"
                style={{ backgroundColor: '#2D2F4A', borderColor: '#2D2F4A' }}
              >
                Sign Up
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default RecruiterSignup;
