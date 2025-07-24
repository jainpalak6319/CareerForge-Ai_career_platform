// src/components/resume/PersonalForm.jsx
import React, { useState,useEffect,useContext} from 'react';
import { Form, Row, Col, Card } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { ResumeContext } from '../context/ResumeContext';
const PersonalForm = ({ onNext }) => {
  const { resumeData, setResumeData } = useContext(ResumeContext);

const [formData, setFormData] = useState(() => {
  return resumeData.formData && Object.keys(resumeData.formData).length > 0
    ? resumeData.formData
    : {
        fullName: '',
        email: '',
        phone: '',
        location: '',
        linkedin: '',
        portfolio: ''
      };
});

 useEffect(() => {
    setResumeData(prev => ({ ...prev, formData }));
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleNext = () => {
    if (!formData.fullName.trim() || !formData.email.trim()) {
      toast.error('Full Name and Email are required!');
      return;
    }
    if (!validateEmail(formData.email)) {
      toast.error('Please enter a valid email address!');
      return;
    }
    onNext();
  };

  return (
    <>
      <Card className="p-4 shadow rounded-4 border-0" style={{ background: '#FFFFFF' }}>
        <h4 className="mb-3 fw-bold" style={{ color: '#2D2F4A', fontFamily: 'Poppins, sans-serif', fontSize: '1.75rem', letterSpacing: '0.5px', textShadow: '0 1px 2px rgba(0, 0, 0, 0.05)' }}>👤 Personal Information</h4>
        <p className="text-muted" style={{ fontSize: '0.95rem', fontFamily: 'Poppins, sans-serif', marginBottom: '1.5rem' }}>This information will appear at the top of your resume.</p>
        <Form style={{ fontFamily: 'Poppins, sans-serif' }}>
          <Row className="mb-3">
            <Col md={6}>
              <Form.Label style={{ color: '#333333', fontWeight: '500' }}>Full Name *</Form.Label>
              <Form.Control
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="John Doe"
                required
                className="border border-1 rounded-3 shadow-sm"
              />
            </Col>
            <Col md={6}>
              <Form.Label style={{ color: '#333333', fontWeight: '500' }}>Email Address *</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john.doe@email.com"
                required
                className="border border-1 rounded-3 shadow-sm"
              />
            </Col>
          </Row>
          <Row className="mb-3">
            <Col md={6}>
              <Form.Label style={{ color: '#333333', fontWeight: '500' }}>Phone Number</Form.Label>
              <Form.Control
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 (555) 123-4567"
                className="border border-1 rounded-3 shadow-sm"
              />
            </Col>
            <Col md={6}>
              <Form.Label style={{ color: '#333333', fontWeight: '500' }}>Location</Form.Label>
              <Form.Control
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="New York, NY"
                className="border border-1 rounded-3 shadow-sm"
              />
            </Col>
          </Row>
          <Row className="mb-3">
            <Col md={6}>
              <Form.Label style={{ color: '#333333', fontWeight: '500' }}>LinkedIn Profile</Form.Label>
              <Form.Control
                name="linkedin"
                value={formData.linkedin}
                onChange={handleChange}
                placeholder="linkedin.com/in/johndoe"
                className="border border-1 rounded-3 shadow-sm"
              />
            </Col>
            <Col md={6}>
              <Form.Label style={{ color: '#333333', fontWeight: '500' }}>Portfolio/Website</Form.Label>
              <Form.Control
                name="portfolio"
                value={formData.portfolio}
                onChange={handleChange}
                placeholder="johndoe.com"
                className="border border-1 rounded-3 shadow-sm"
              />
            </Col>
          </Row>
        </Form>

        <Card className="mt-4 p-3 bg-light border-0 rounded-3">
          <h6 className="fw-semibold" style={{ color: '#2D2F4A', fontFamily: 'Poppins, sans-serif' }}>💡 Pro Tips:</h6>
          <ul className="text-dark small" style={{ fontFamily: 'Poppins, sans-serif' }}>
            <li>Use a professional email address</li>
            <li>Include your city and state for local opportunities</li>
            <li>Make sure your LinkedIn profile is up to date</li>
            <li>Portfolio links help showcase your work</li>
          </ul>
        </Card>

        <div className="text-end mt-4">
          <button
            className="btn px-4 py-2 rounded-3 fw-semibold shadow-sm"
            style={{ backgroundColor: '#D96BA0', color: '#fff', fontFamily: 'Poppins, sans-serif' }}
            onClick={handleNext}
          >
            Next: Education
          </button>
        </div>
      </Card>
    </>
  );
};

export default PersonalForm;
