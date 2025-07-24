// src/components/forms/SummaryForm.jsx
import React, { useState, useEffect, useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import { ResumeContext } from '../context/ResumeContext';

const MAX_CHARACTERS = 500;

const SummaryForm = ({ goToNextStep }) => {
  const { resumeData, setResumeData } = useContext(ResumeContext);

  // ✅ Local state initialized from context
  const [summary, setSummary] = useState(resumeData.summary || '');

  useEffect(() => {
    setResumeData(prev => ({ ...prev, summary }));
  }, [summary]);

  const handleChange = (e) => {
    if (e.target.value.length <= MAX_CHARACTERS) {
      setSummary(e.target.value);
    }
  };

  const handleSaveAndNext = () => {
    goToNextStep();
  };

  return (
    <Form
      className="p-4 rounded shadow"
      style={{ background: '#F5F5F5', border: '1px solid #ddd' }}
    >
      <h4 className="mb-3 text-dark">Professional Summary</h4>

      <Form.Group controlId="summary">
        <Form.Label className="fw-semibold">
          Summary (Max {MAX_CHARACTERS} characters)
        </Form.Label>
        <Form.Control
          as="textarea"
          rows={5}
          value={summary}
          onChange={handleChange}
          placeholder="Write a short professional summary..."
          maxLength={MAX_CHARACTERS}
          className="rounded"
          style={{
            resize: 'none',
            backgroundColor: '#ffffff',
            borderColor: '#ccc',
          }}
        />
        <div className="text-muted mt-1 text-end">
          {summary.length}/{MAX_CHARACTERS} characters
        </div>
      </Form.Group>

      <div className="d-flex justify-content-end mt-4">
        <Button
          variant="primary"
          style={{
            border: 'none',
            backgroundColor: '#D96BA0',
            color: '#fff',
            fontFamily: 'Poppins, sans-serif',
          }}
          onClick={handleSaveAndNext}
        >
          Save & Next
        </Button>
      </div>
    </Form>
  );
};

export default SummaryForm;
