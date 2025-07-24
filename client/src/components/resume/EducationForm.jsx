// src/components/resume/EducationForm.jsx
import React, { useState,useEffect,useContext} from 'react';
import { Card, Form, Button, Row, Col } from 'react-bootstrap';
import { ResumeContext } from '../context/ResumeContext';
const EducationForm = ({ onNext }) => {
const { resumeData, setResumeData } = useContext(ResumeContext);

const [education, setEducation] = useState(() => {
  return resumeData.education?.length
    ? resumeData.education
    : [{ degree: '', school: '', year: '' }];
});

  const [isValid, setIsValid] = useState(false);


  useEffect(() => {
    setResumeData(prev => ({ ...prev, education }));
  }, [education]);

  useEffect(() => {
    const valid = education.every(
      (edu) => edu.degree.trim() !== '' && edu.school.trim() !== '' && edu.year.trim() !== ''
    );
    setIsValid(valid);
  }, [education]);

  const handleChange = (i, field, value) => {
    const updated = [...education];
    updated[i][field] = value;
    setEducation(updated);
  };

  const addEntry = () => {
    setEducation([...education, { degree: '', school: '', year: '' }]);
  };

  const handleSaveAndNext = () => {
    if (!isValid) {
      alert('Please fill out all the education fields before proceeding.');
      return;
    }
    console.log('Education Info Saved:', education);
    onNext(); // Move to Experience tab
  };

  return (
    <Card className="p-4 shadow-sm" style={{ backgroundColor: '#ffffff', borderRadius: '12px' }}>
      <h4 className="mb-3" style={{ color: '#2D2F4A', fontWeight: '600' }}>🎓 Education</h4>
      <p style={{ color: '#333', marginBottom: '1.5rem' }}>
        Mention your highest qualifications, university, and passing year.
      </p>

      {education.map((edu, i) => (
        <Form key={i} className="mb-4">
          <Row className="mb-3">
            <Col md={6}>
              <Form.Label style={{ fontWeight: '500', color: '#2D2F4A' }}>Degree</Form.Label>
              <Form.Control
                value={edu.degree}
                placeholder="e.g., BCA, B.Tech, MBA"
                onChange={(e) => handleChange(i, 'degree', e.target.value)}
              />
            </Col>
            <Col md={6}>
              <Form.Label style={{ fontWeight: '500', color: '#2D2F4A' }}>School / University</Form.Label>
              <Form.Control
                value={edu.school}
                placeholder="e.g., Delhi University"
                onChange={(e) => handleChange(i, 'school', e.target.value)}
              />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Form.Label style={{ fontWeight: '500', color: '#2D2F4A' }}>Passing Year</Form.Label>
              <Form.Control type='number'
                value={edu.year}
                placeholder="e.g., 2024"
                onChange={(e) => handleChange(i, 'year', e.target.value)}
              />
            </Col>
          </Row>
          <hr />
        </Form>
      ))}

      <div className="d-flex justify-content-between align-items-center mt-2">
        <Button
          onClick={addEntry}
          className="btn-sm"
          style={{ backgroundColor: '#D96BA0', border: 'none' }}
        >
          + Add More
        </Button>

        <Button disabled={!isValid}
          onClick={handleSaveAndNext}
          className="btn btn-primary"
          style={{
            backgroundColor: '#D96BA0',
            color: '#fff',
            fontFamily: 'Poppins, sans-serif',
            border: 'none'
          }}
        >
          Save & Next
        </Button>

      </div>
    </Card>
  );
};

export default EducationForm;
