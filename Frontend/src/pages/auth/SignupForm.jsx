// src/pages/auth/Login.jsx
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, InputGroup, Carousel } from 'react-bootstrap';
import { FaGoogle, FaLinkedin, FaEye, FaEyeSlash } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.stopPropagation();
      toast.error('Please fill in all fields correctly');
    } else {
      toast.success('Login successful');
      navigate('/dashboard');
    }

    setValidated(true);
  };

  return (
    <Container fluid className="min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <Row className="w-100" style={{ maxWidth: '1200px' }}>
        {/* Carousel Section */}
        <Col
          md={6}
          className="d-none d-md-flex align-items-center justify-content-center p-4"
          style={{ backgroundColor: '#FDEBED', borderRadius: '20px 0 0 20px' }}
          data-aos="fade-right"
        >
          <Carousel style={{ maxWidth: '90%' }}>
            <Carousel.Item>
              <img
                src="https://cdn.unstop.com/uploads/images/homepage/mentor-banner-v2.webp"
                className="d-block w-100 rounded"
                alt="Slide 1"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="https://cdn.unstop.com/uploads/images/homepage/opportunities-v2.webp"
                className="d-block w-100 rounded"
                alt="Slide 2"
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
            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Email Id</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ backgroundColor: '#F5F5F5', border: 'none' }}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please enter a valid email.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formPassword" className="mb-3">
              <Form.Label>Password</Form.Label>
              <InputGroup>
                <Form.Control
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{ backgroundColor: '#F5F5F5', border: 'none' }}
                  required
                />
                <Button
                  variant="light"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </Button>
                <Form.Control.Feedback type="invalid">
                  Password is required
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>

            <div className="d-flex justify-content-end mb-3">
              <a href="/forgot-password" style={{ color: '#D96BA0', fontSize: '0.9rem' }}>Forgot password?</a>
            </div>

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
