// src/pages/auth/JobSeekerSignup.jsx
import React, { useState } from 'react';
import { Button, Col, Container, Form, InputGroup, Row, Carousel, Card } from 'react-bootstrap';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { toast } from 'react-toastify';
import AOS from 'aos';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import slide1 from '../../assets/images/slide1.avif';
import slide2 from '../../assets/images/slide2.avif';
import slide3 from '../../assets/images/slide3.avif';

AOS.init();

const JobSeekerSignup = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    location: '',
    education: '',
    skills: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { fullName, email, password, confirmPassword, skills} = formData;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!fullName || !email || !password || !confirmPassword) {
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
   // 👉 Convert skills string → array
  const skillsArray = formData.skills
  .split(',')
  .map((s) => s.trim())
  .filter((s) => s.length > 0);

    // ✅ Backend integration begins here
    try {
      const { data } = await axios.post("http://localhost:5000/api/auth/signup", {
        name: formData.fullName,
        email: formData.email,
        password: formData.password,
        role: 'jobseeker', // or 'jobseeker' if your backend expects that
        location: formData.location,
        education: formData.education,
        skills: skillsArray,
        }, {
    withCredentials: true
      });

      localStorage.setItem('token', data.token);
      localStorage.setItem('role', data.user.role);
      localStorage.setItem('careerforge-user', JSON.stringify(data.user)); // 👈 save full user
      toast.success('Job seeker signup successful!');
      navigate('/login');
    } catch (err) {
      console.error(err);
      const errorMsg = err.response?.data?.message || 'Signup failed';
      toast.error(errorMsg);
    }
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
              Your Career Journey Starts Here
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
            <h3 className="text-center mb-4" style={{ color: '#2D2F4A' }}>Job Seeker Sign Up</h3>
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
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
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
                <Form.Label>Location</Form.Label>
                <Form.Control
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Enter your location"
                  style={{ backgroundColor: '#F5F5F5', border: 'none' }}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Education</Form.Label>
                <Form.Control
                  name="education"
                  value={formData.education}
                  onChange={handleChange}
                  placeholder="e.g., BCA, BTech"
                  style={{ backgroundColor: '#F5F5F5', border: 'none' }}
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label>Skills</Form.Label>
                <Form.Control
                  name="skills"
                  value={formData.skills}
                  onChange={handleChange}
                  placeholder="e.g., JavaScript, React"
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

export default JobSeekerSignup;
