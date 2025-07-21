// src/pages/auth/ForgotPassword.jsx
import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import { toast } from 'react-toastify';
import AOS from 'aos';
import { useNavigate } from 'react-router-dom';

AOS.init();

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [validated, setValidated] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setValidated(true);

    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!isValidEmail) {
      toast.error('Please enter a valid email address');
      return;
    }

    toast.success('Reset link sent to your email (mock)');
    setEmail('');
    setValidated(false);
    navigate('/login');
  };

  return (
    <Container fluid className="min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <Row className="w-100 justify-content-center">
        <Col md={6} lg={5} data-aos="fade-down">
          <Card className="shadow p-4 rounded" style={{ borderColor: '#FDEBED' }}>
            <h3 className="mb-4 text-center" style={{ color: '#2D2F4A' }}>
              Forgot Password
            </h3>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Group controlId="formEmail" className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your registered email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  isInvalid={validated && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)}
                  style={{ backgroundColor: '#F5F5F5', border: 'none' }}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please enter a valid email.
                </Form.Control.Feedback>
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                className="w-100"
                style={{ backgroundColor: '#2D2F4A', borderColor: '#2D2F4A' }}
              >
                Send Reset Link
              </Button>

              <div className="text-center mt-3">
                <a href="/login" style={{ color: '#D96BA0', fontSize: '0.9rem' }}>
                  Back to Login
                </a>
              </div>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ForgotPassword;
