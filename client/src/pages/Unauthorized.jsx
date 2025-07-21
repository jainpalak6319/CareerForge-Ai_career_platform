// src/pages/Unauthorized.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';

const Unauthorized = () => {
  return (
    <Container className="text-center mt-5">
      <h1 className="display-4 text-danger">403 - Unauthorized</h1>
      <p className="lead">You do not have permission to access this page.</p>
      <Button as={Link} to="/login" variant="primary">
        Go to Login
      </Button>
    </Container>
  );
};

export default Unauthorized;
