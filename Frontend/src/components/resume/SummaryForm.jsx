// src/components/forms/SummaryForm.jsx
import React from 'react';
import { Form, Button } from 'react-bootstrap';

const MAX_CHARACTERS = 500;

const SummaryForm = ({ summary, setSummary, goToNextStep }) => {
  const handleChange = (e) => {
  console.log("Text changed:", e.target.value);  // Debug log
  if (e.target.value.length <= MAX_CHARACTERS) {
    setSummary(e.target.value);
  }
};


  const handleSaveAndNext = () => {
    // Optional save logic
    goToNextStep(); // Navigate to next step
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
          value={summary || ""}
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
          {summary?.length || 0}/{MAX_CHARACTERS} characters
        </div>
      </Form.Group>

      <div className="d-flex justify-content-end mt-4">
        <Button
          variant="primary"
          style={{ border: 'none', backgroundColor: '#D96BA0',
            color: '#fff',
            fontFamily: 'Poppins, sans-serif'}}
          onClick={handleSaveAndNext}
        >
          Save & Next
        </Button>
      </div>
    </Form>
  );
};

export default SummaryForm;
