// src/pages/ResumeBuilder.jsx
import React, { useState, useRef } from 'react';
import ResumeTabs from '../components/resume/ResumeTabs';
import ATSChecker from '../components/resume/ATSChecker';
import { Container, Card } from 'react-bootstrap';

const ResumeBuilder = () => {
  const [summary, setSummary] = useState("");

  return (
    <div style={{ backgroundColor: '#F5F5F5', minHeight: '100vh', paddingTop: '40px' }}>
      <Container>
        <Card className="shadow p-4 border-0" style={{ backgroundColor: '#FFFFFF', borderRadius: '20px' }}>
          <h2 className="text-center mb-3 fw-bold" style={{ color: '#2D2F4A' }}>
            Build Your <span style={{ color: '#D96BA0' }}>ATS-Optimized</span> Resume
          </h2>
          <p className="text-center text-muted mb-4" style={{ fontSize: '1rem' }}>
            Create a professional resume to impress recruiters and beat the bots 🚀
          </p>

          <ResumeTabs summary={summary} setSummary={setSummary} />

          {/* OR Line */}
       {/* OR Line */}
<div className="text-center my-5">
  <hr style={{ borderTop: '2px solid #ccc' }} />
  <span style={{
    backgroundColor: '#FFFFFF',
    padding: '0 15px',
    color: '#999',
    position: 'relative',
    top: '-20px',
    fontWeight: '500'
  }}>
    OR
  </span>
</div>

{/* Friendly instructional text + ATS Checker */}
<div className="text-center mb-4">
  <h5 style={{ color: '#2D2F4A', fontWeight: '600' }}>
    Already have a resume? <span style={{ color: '#D96BA0' }}>Check its ATS compatibility below!</span>
  </h5>
</div>

<div className="mt-3">
  <ATSChecker />
</div>

        </Card>
      </Container>
    </div>
  );
};

export default ResumeBuilder;
