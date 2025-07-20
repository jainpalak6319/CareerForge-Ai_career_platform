// src/components/resume/CertificatesForm.jsx
import React, { useState } from 'react';
import { Button, Form, Row, Col, Alert } from 'react-bootstrap';

const CertificatesForm = () => {
  const [certificates, setCertificates] = useState([
    { name: '', issuer: '', date: '', link: '' }
  ]);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (index, field, value) => {
    const updated = [...certificates];
    updated[index][field] = value;
    setCertificates(updated);
  };

  const addCertificate = () => {
    setCertificates([...certificates, { name: '', issuer: '', date: '', link: '' }]);
  };

  const removeCertificate = (index) => {
    const updated = certificates.filter((_, i) => i !== index);
    setCertificates(updated);
  };

  const handleSave = () => {
    console.log('Certificates Data:', certificates);
    setShowSuccess(true);
  };

  const handlePreview = () => {
    // Logic to open preview section or modal
    alert('Preview feature triggered. Implement preview logic.');
  };

  const handleDownload = () => {
    // Logic to download resume PDF
    alert('Download feature triggered. Implement PDF generation logic.');
  };

  return (
    <Form>
      {certificates.map((cert, index) => (
        <div key={index} className="mb-4 p-3 border rounded bg-light">
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group controlId={`certName${index}`}>
                <Form.Label>Certificate Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter certificate name"
                  value={cert.name}
                  onChange={(e) => handleChange(index, 'name', e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId={`issuer${index}`}>
                <Form.Label>Issued By</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter issuer name"
                  value={cert.issuer}
                  onChange={(e) => handleChange(index, 'issuer', e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={6}>
              <Form.Group controlId={`date${index}`}>
                <Form.Label>Date</Form.Label>
                <Form.Control
                  type="date"
                  value={cert.date}
                  onChange={(e) => handleChange(index, 'date', e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId={`link${index}`}>
                <Form.Label>Certificate Link (optional)</Form.Label>
                <Form.Control
                  type="url"
                  placeholder="Enter certificate URL"
                  value={cert.link}
                  onChange={(e) => handleChange(index, 'link', e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>

          {certificates.length > 1 && (
            <Button variant="outline-danger" onClick={() => removeCertificate(index)}>
              Remove
            </Button>
          )}
        </div>
      ))}

      <div className="d-flex justify-content-between align-items-center mb-3">
        <Button variant="secondary" onClick={addCertificate}>
          + Add Another
        </Button>

        <Button
          onClick={handleSave}
          style={{
            backgroundColor: '#D96BA0',
            color: '#fff',
            fontFamily: 'Poppins, sans-serif',
            border: 'none'
          }}
        >
          Save
        </Button>
      </div>

      {showSuccess && (
        <>
          <Alert variant="success" className="text-center">
            🎉 Your resume is ready for preview and download!
          </Alert>
          <div className="d-flex justify-content-center gap-3">
            <Button
              variant="outline-primary"
              onClick={handlePreview}
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Preview Resume
            </Button>
            <Button
              variant="success"
              onClick={handleDownload}
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Download PDF
            </Button>
          </div>
        </>
      )}
    </Form>
  );
};

export default CertificatesForm;
