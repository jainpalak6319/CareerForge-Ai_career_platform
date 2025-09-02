import React, { useState, useEffect } from 'react';
import './EmailGenerator.css';
import '../lib/fontAwesome'; // FontAwesome setup


// Step Indicator Component
const StepIndicator = ({ currentStep }) => {
  const steps = [
    { number: 1, label: 'Email Type' },
    { number: 2, label: 'Job Details' },
    { number: 3, label: 'Customize' },
    { number: 4, label: 'Preview' }
  ];

  return (
    <div className="step-indicator">
      {steps.map((step) => (
        <div 
          key={step.number}
          className={`step ${
            step.number === currentStep ? 'active' : 
            step.number < currentStep ? 'completed' : ''
          }`}
        >
          <div className="step-number">{step.number}</div>
          <span>{step.label}</span>
        </div>
      ))}
    </div>
  );
};

// Email Type Selection Component
const EmailTypeSelection = ({ selectedType, onSelect, onNext }) => {
  const emailTypes = [
    {
      type: 'cover-letter',
      icon: 'fas fa-file-text',
      title: 'Cover Letter',
      description: 'Professional cover letter for job applications with personalized content'
    },
    {
      type: 'recruiter-email',
      icon: 'fas fa-handshake',
      title: 'Recruiter Email',
      description: 'Direct outreach to recruiters with compelling messaging'
    },
    {
      type: 'follow-up',
      icon: 'fas fa-redo',
      title: 'Follow-Up Email',
      description: 'Professional follow-up after interviews or applications'
    },
    {
      type: 'networking',
      icon: 'fas fa-users',
      title: 'Networking Email',
      description: 'Connect with industry professionals and expand your network'
    },
    {
      type: 'thank-you',
      icon: 'fas fa-heart',
      title: 'Thank You Email',
      description: 'Express gratitude after interviews or networking events'
    },
    {
      type: 'cold-outreach',
      icon: 'fas fa-paper-plane',
      title: 'Cold Outreach',
      description: 'Reach out to companies and professionals for opportunities'
    }
  ];

  return (
    <div className="form-section active">
      <h3 className="mb-4">Select Email Type</h3>
      <div className="row">
        {emailTypes.map((email) => (
          <div key={email.type} className="col-md-6">
            <div 
              className={`template-option ${selectedType === email.type ? 'selected' : ''}`}
              onClick={() => onSelect(email.type)}
            >
              <h5 className="template-title">
                <i className={email.icon}></i> {email.title}
              </h5>
              <p className="template-description">
                {email.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-4">
        <button 
          className="login-btn" 
          onClick={onNext}
          disabled={!selectedType}
        >
          Next Step <i className="fas fa-arrow-right"></i>
        </button>
        
      </div>
    </div>
  );
};

// Job Details Component
const JobDetails = ({ formData, onChange, onNext, onPrevious }) => {
  const industries = [
    'technology', 'finance', 'healthcare', 'marketing', 'sales', 
    'education', 'retail', 'manufacturing', 'consulting', 
    'media', 'nonprofit', 'government', 'other'
  ];

  const experienceLevels = [
    { value: 'entry', label: 'Entry Level (0-2 years)' },
    { value: 'mid', label: 'Mid Level (3-5 years)' },
    { value: 'senior', label: 'Senior Level (6-10 years)' },
    { value: 'executive', label: 'Executive Level (10+ years)' }
  ];

  const isValid = formData.jobTitle && formData.companyName;

  return (
    <div className="form-section active">
      <h3 className="mb-4">Job & Company Details</h3>
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label className="form-label">Job Title *</label>
            <input 
              type="text" 
              className="form-control" 
              value={formData.jobTitle}
              onChange={(e) => onChange('jobTitle', e.target.value)}
              placeholder="e.g., Software Engineer, Marketing Manager"
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label className="form-label">Company Name *</label>
            <input 
              type="text" 
              className="form-control" 
              value={formData.companyName}
              onChange={(e) => onChange('companyName', e.target.value)}
              placeholder="e.g., Google, Microsoft"
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label className="form-label">Industry</label>
            <select 
              className="form-select" 
              value={formData.industry}
              onChange={(e) => onChange('industry', e.target.value)}
            >
              <option value="">Select Industry</option>
              {industries.map(industry => (
                <option key={industry} value={industry}>
                  {industry.charAt(0).toUpperCase() + industry.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label className="form-label">Recruiter/Hiring Manager Name</label>
            <input 
              type="text" 
              className="form-control" 
              value={formData.recruiterName}
              onChange={(e) => onChange('recruiterName', e.target.value)}
              placeholder="e.g., John Smith"
            />
          </div>
        </div>
        <div className="col-md-12">
          <div className="form-group">
            <label className="form-label">Job Description/Requirements</label>
            <textarea 
              className="form-control" 
              rows="4"
              value={formData.jobDescription}
              onChange={(e) => onChange('jobDescription', e.target.value)}
              placeholder="Paste job description or key requirements here..."
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label className="form-label">Experience Level</label>
            <select 
              className="form-select" 
              value={formData.experienceLevel}
              onChange={(e) => onChange('experienceLevel', e.target.value)}
            >
              <option value="">Select Experience Level</option>
              {experienceLevels.map(level => (
                <option key={level.value} value={level.value}>
                  {level.label}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label className="form-label">Location</label>
            <input 
              type="text" 
              className="form-control" 
              value={formData.location}
              onChange={(e) => onChange('location', e.target.value)}
              placeholder="e.g., New York, NY or Remote"
            />
          </div>
        </div>
      </div>
      <div className="text-center mt-4">
        <button className="btn btn-secondary" onClick={onPrevious}>
          <i className="fas fa-arrow-left"></i> Previous
        </button>
        <button 
          className="login-btn"
          onClick={onNext}
          disabled={!isValid}
        >
          Next Step <i className="fas fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

// Customize Component with validation
const Customize = ({ formData, onChange, onGenerate, onPrevious, errors, setErrors }) => {
  const tones = ['professional', 'friendly', 'enthusiastic', 'formal', 'conversational'];
 const lengths = [
    { value: 'short', label: 'Short (100-150 words)' },
    { value: 'medium', label: 'Medium (150-250 words)' },
    {value: 'long', label: 'Long (250+ words)' }
  ];

  const isValid = formData.yourName && formData.yourEmail && 
                 !errors.yourEmail && (!formData.yourPhone || !errors.yourPhone);

  // Format phone number for display
  const formatPhoneNumber = (phone) => {
    if (!phone) return '';
    const cleaned = phone.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);
    if (match) {
      return '(' + match[1] + (match[2] ? ') ' + match[2] : '') + (match[3] ? '-' + match[3] : '');
    }
    return phone;
  };

  const handlePhoneChange = (e) => {
    // Clean input and limit to 10 digits
    const input = e.target.value.replace(/\D/g, '').slice(0, 10);
    onChange('yourPhone', input);
    
    // Clear error if user starts typing
    if (errors.yourPhone) {
      setErrors(prev => ({...prev, yourPhone: ''}));
    }
  };

  const handleEmailChange = (e) => {
    onChange('yourEmail', e.target.value);
    // Clear error if user starts typing
    if (errors.yourEmail) {
      setErrors(prev => ({...prev, yourEmail: ''}));
    }
  };

  return (
    <div className="form-section active">
      <h3 className="mb-4">Customize Your Email</h3>
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label className="form-label">Your Name *</label>
            <input 
              type="text" 
              className={`form-control ${errors.yourName ? 'is-invalid' : ''}`}
              value={formData.yourName}
              onChange={(e) => onChange('yourName', e.target.value)}
              placeholder="e.g., Jane Doe"
            />
            {errors.yourName && <div className="invalid-feedback">{errors.yourName}</div>}
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label className="form-label">Your Email *</label>
            <input 
              type="email" 
              className={`form-control ${errors.yourEmail ? 'is-invalid' : ''}`}
              value={formData.yourEmail}
              onChange={handleEmailChange}
              onBlur={(e) => {
                const email = e.target.value;
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (email && !emailRegex.test(email)) {
                  setErrors(prev => ({...prev, yourEmail: 'Please enter a valid email address'}));
                }
              }}
              placeholder="e.g., jane.doe@email.com"
            />
            {errors.yourEmail && <div className="invalid-feedback">{errors.yourEmail}</div>}
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label className="form-label">Your Phone</label>
            <input 
              type="tel" 
              className={`form-control ${errors.yourPhone ? 'is-invalid' : ''}`}
              value={formatPhoneNumber(formData.yourPhone)}
              onChange={handlePhoneChange}
              onBlur={(e) => {
                const phone = e.target.value.replace(/\D/g, '');
                if (phone && phone.length !== 10) {
                  setErrors(prev => ({...prev, yourPhone: 'Phone number must be 10 digits'}));
                }
              }}
              placeholder="e.g., (555) 123-4567"
            />
            {errors.yourPhone && <div className="invalid-feedback">{errors.yourPhone}</div>}
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label className="form-label">LinkedIn Profile</label>
            <input 
              type="url" 
              className="form-control" 
              value={formData.linkedinProfile}
              onChange={(e) => onChange('linkedinProfile', e.target.value)}
              placeholder="e.g., https://linkedin.com/in/yourprofile"
            />
          </div>
        </div>
        <div className="col-md-12">
          <div className="form-group">
            <label className="form-label">Key Skills/Qualifications</label>
            <textarea 
              className="form-control" 
              rows="3"
              value={formData.keySkills}
              onChange={(e) => onChange('keySkills', e.target.value)}
              placeholder="List your relevant skills, certifications, and qualifications..."
            />
          </div>
        </div>
        <div className="col-md-12">
          <div className="form-group">
            <label className="form-label">Additional Information</label>
            <textarea 
              className="form-control" 
              rows="3"
              value={formData.additionalInfo}
              onChange={(e) => onChange('additionalInfo', e.target.value)}
              placeholder="Any specific achievements, projects, or additional context you want to include..."
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label className="form-label">Tone of Email</label>
            <select 
              className="form-select" 
              value={formData.emailTone}
              onChange={(e) => onChange('emailTone', e.target.value)}
            >
              {tones.map(tone => (
                <option key={tone} value={tone}>
                  {tone.charAt(0).toUpperCase() + tone.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label className="form-label">Email Length</label>
            <select 
              className="form-select" 
              value={formData.emailLength}
              onChange={(e) => onChange('emailLength', e.target.value)}
            >
              {lengths.map(length => (
                <option key={length.value} value={length.value}>
                  {length.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className="text-center mt-4">
        <button className="btn btn-secondary" onClick={onPrevious}>
          <i className="fas fa-arrow-left"></i> Previous
        </button>
        <button 
          className="login-btn"
          onClick={onGenerate}
          disabled={!isValid}
        >
          Generate Email <i className="fas fa-magic"></i>
        </button>
      </div>
    </div>
  );
};

// Improved Loading Spinner Component
const LoadingSpinner = () => {
  return (
    <div className="loading-overlay">
      <div className="loading-spinner-content">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="mt-3">Generating your professional email...</p>
      </div>
    </div>
  );
};

// Email Preview Component
const EmailPreview = ({ emailData, formData, onPrevious, onCopy, onDownload, onRegenerate }) => {
  const copyEmail = () => {
    const emailText = `Subject: ${emailData.subject}\n\n${emailData.body}`;
    navigator.clipboard.writeText(emailText).then(() => {
      alert('Email copied to clipboard!');
    });
  };

  const downloadEmail = () => {
    const emailText = `Subject: ${emailData.subject}\n\n${emailData.body}`;
    const blob = new Blob([emailText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `email_${Date.now()}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="form-section active">
      <h3 className="mb-4">Email Preview</h3>
      <div className="email-preview">
        <div className="email-header">
          <div className="email-subject">
            Subject: {emailData.subject}
          </div>
          <div className="email-meta">
            <strong>From:</strong> {formData.yourEmail}<br/>
            <strong>To:</strong> hr@{formData.companyName.toLowerCase().replace(/\s+/g, '')}.com
          </div>
        </div>
        <div className="email-body">
          {emailData.body.split('\n').map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
      </div>
      
      <div className="action-buttons">
        <button className="login-btn" onClick={onPrevious}>
          <i className="fas fa-arrow-left"></i> Edit Email
        </button>
        <button className="login-btn" onClick={copyEmail}>
          <i className="fas fa-copy"></i> Copy Email
        </button>
        <button className="login-btn" onClick={downloadEmail}>
          <i className="fas fa-download"></i> Download
        </button>
        <button className="login-btn" onClick={onRegenerate}>
          <i className="fas fa-refresh"></i> Regenerate
        </button>
      </div>
    </div>
  );
};


// Instead of calling generateEmailContent(selectedEmailType, formData), call the backend


  
// Main App Component with validation state
const EmailGenerator = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedEmailType, setSelectedEmailType] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [generatedEmail, setGeneratedEmail] = useState({ subject: '', body: '' });
  const [errors, setErrors] = useState({});
  
  const [formData, setFormData] = useState({
    jobTitle: '',
    companyName: '',
    industry: '',
    recruiterName: '',
    jobDescription: '',
    experienceLevel: '',
    location: '',
    yourName: '',
    yourEmail: '',
    yourPhone: '',
    linkedinProfile: '',
    keySkills: '',
    additionalInfo: '',
    emailTone: 'professional',
    emailLength: 'medium'
  });

  const handleFormChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Clear error when field changes
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleGenerate = async () => {
  if (!validateForm()) return;

  setIsLoading(true);

  try {
    const response = await fetch('http://localhost:5000/generate-email', { // update if deployed elsewhere
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        emailType: selectedEmailType,
        formData
      }),
    });

    if (response.ok) {
      const emailContent = await response.json();
      setGeneratedEmail(emailContent);
      setIsLoading(false);
      setCurrentStep(4);
    } else {
      alert('Failed to generate email. Please try again.');
      setIsLoading(false);
    }
  } catch {
    alert('Network error. Try again.');
    setIsLoading(false);
  }
};

const validateForm = () => {
    const newErrors = {};
    
    // Required fields
    if (!formData.yourName) {
      newErrors.yourName = 'Your name is required';
    }
    
    // Email validation
    if (!formData.yourEmail) {
      newErrors.yourEmail = 'Email is required';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.yourEmail)) {
        newErrors.yourEmail = 'Please enter a valid email address';
      }
    }
    
    // Phone validation (if provided)
    if (formData.yourPhone) {
      const phoneDigits = formData.yourPhone.replace(/\D/g, '');
      if (phoneDigits.length !== 10) {
        newErrors.yourPhone = 'Phone number must be 10 digits';
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleRegenerate = async () => {
  setIsLoading(true);

  try {
    const response = await fetch('http://localhost:5000/generate-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        emailType: selectedEmailType,
        formData
      }),
    });

    if (response.ok) {
      const emailContent = await response.json();
      setGeneratedEmail(emailContent);
      setIsLoading(false);
    } else {
      alert('Failed to regenerate email. Please try again.');
      setIsLoading(false);
    }
  } catch {
    alert('Network error. Try again.');
    setIsLoading(false);
  }
    // Simulate API call
    setTimeout(() => {
      const emailContent = generateEmailContent(selectedEmailType, formData);
      setGeneratedEmail(emailContent);
      setIsLoading(false);
    }, 2000);
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <EmailTypeSelection 
            selectedType={selectedEmailType}
            onSelect={setSelectedEmailType}
            onNext={handleNext}
          />
        );
      case 2:
        return (
          <JobDetails 
            formData={formData}
            onChange={handleFormChange}
            onNext={handleNext}
            onPrevious={handlePrevious}
          />
        );
      case 3:
        return (
          <Customize 
            formData={formData}
            onChange={handleFormChange}
            onGenerate={handleGenerate}
            onPrevious={handlePrevious}
            errors={errors}
            setErrors={setErrors}
          />
        );
      case 4:
        return (
          <EmailPreview 
            emailData={generatedEmail}
            formData={formData}
            onPrevious={handlePrevious}
            onCopy={() => {
              const emailText = `Subject: ${generatedEmail.subject}\n\n${generatedEmail.body}`;
              navigator.clipboard.writeText(emailText).then(() => {
                alert('Email copied to clipboard!');
              });
            }}
            onDownload={() => {
              const emailText = `Subject: ${generatedEmail.subject}\n\n${generatedEmail.body}`;
              const blob = new Blob([emailText], { type: 'text/plain' });
              const url = URL.createObjectURL(blob);
              const a = document.createElement('a');
              a.href = url;
              a.download = `email_${Date.now()}.txt`;
              a.click();
              URL.revokeObjectURL(url);
            }}
            onRegenerate={handleRegenerate}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      
     
      
      <main className="main-content">
        <div className="container">
          <h1 className="page-title">
            <i className="fas fa-envelope"></i> AI Email Generator
          </h1>
          <p className="page-subtitle">
            Create professional emails with AI-powered templates and recruiter-specific messaging
          </p>

          <div className="email-generator-container">
            <StepIndicator currentStep={currentStep} />
            {renderCurrentStep()}
            {isLoading && <LoadingSpinner />}
          </div>
        </div>
      </main>
      
   
    </div>
  );
};

export default EmailGenerator;