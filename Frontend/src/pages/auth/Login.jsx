// src/pages/auth/Login.jsx
import React from 'react';
import slide1 from '../../assets/images/slide1.avif';
import slide2 from '../../assets/images/slide2.avif';
import slide3 from '../../assets/images/slide3.avif';
import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';
import { FaGoogle, FaLinkedin, FaEye, FaEyeSlash } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Carousel } from 'react-bootstrap';
AOS.init();

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [validated, setValidated] = useState(false);


  useEffect(() => {
    AOS.refresh();
  }, []);

 const handleLogin = (e) => {
  e.preventDefault();
  setValidated(true);

 const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isPasswordValid = password.trim() !== '';

  if (!isEmailValid) {
    toast.error('Please enter a valid email address');
    return;
  }

  if (!isPasswordValid) {
    toast.error('Password is required');
    return;
  }

  // All valid
  toast.success('Login successful!');
  navigate('/dashboard'); // or wherever
};


  return (
    <Container fluid className="min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <Row className="w-100" style={{ maxWidth: '1200px' }}>
        {/* Carousel Section */}
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

        {/* Login Form Section */}
        <Col
          md={6}
          className="bg-white p-5 shadow-sm rounded-end"
          data-aos="fade-left"
        >
          <h3 className="mb-4" style={{ color: '#2D2F4A' }}>Log in</h3>

          <div className="mb-3 d-grid gap-2">
            <Button variant="light" className="border d-flex align-items-center justify-content-center">
              <FaGoogle className="me-2" /> Continue with Google
            </Button>
            <Button variant="outline-primary" className="d-flex align-items-center justify-content-center">
              <FaLinkedin className="me-2" /> Login with LinkedIn
            </Button>
          </div>

          <div className="text-center my-3 text-muted">Or login with email</div>

          <Form noValidate validated={validated} onSubmit={handleLogin}>
  {/* EMAIL FIELD */}
  <Form.Group controlId="formEmail" className="mb-3">
    <Form.Label>Email Id</Form.Label>
    <Form.Control
  type="email"
  placeholder="Enter email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  isInvalid={validated && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)}
  required
  style={{ backgroundColor: '#F5F5F5', border: 'none' }}
/>
    <Form.Control.Feedback type="invalid">
      Please enter a valid email address.
    </Form.Control.Feedback>
  </Form.Group>

  {/* PASSWORD FIELD */}
  <Form.Group controlId="formPassword" className="mb-3">
    <Form.Label>Password</Form.Label>
    <InputGroup>
      <Form.Control
        type={showPassword ? 'text' : 'password'}
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        isInvalid={validated && !password}
        style={{ backgroundColor: '#F5F5F5', border: 'none' }}
        required
      />
      <Button variant="light" onClick={() => setShowPassword(!showPassword)}>
        {showPassword ? <FaEyeSlash /> : <FaEye />}
      </Button>
      <Form.Control.Feedback type="invalid">
        Password is required.
      </Form.Control.Feedback>
    </InputGroup>
  </Form.Group>

  {/* FORGOT PASSWORD LINK */}
  <div className="d-flex justify-content-end mb-3">
    <a href="/forgot-password" style={{ color: '#D96BA0', fontSize: '0.9rem' }}>
      Forgot password?
    </a>
  </div>

  {/* SUBMIT BUTTON */}
  <Button
    type="submit"
    className="w-100 py-2"
    style={{ backgroundColor: '#2D2F4A', borderColor: '#2D2F4A' }}
  >
    Login
  </Button>
</Form>


          <div className="text-center mt-4">
            Don’t have an account?{' '}
            <a href="/signup/role" style={{ color: '#D96BA0', fontWeight: 'bold' }}>Sign up</a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
