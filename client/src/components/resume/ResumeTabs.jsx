// src/components/resume/ResumeTabs.jsx
import React, { useState } from 'react';
import PersonalForm from './PersonalForm';
import EducationForm from './EducationForm';
import ExperienceForm from './ExperienceForm';
import SkillsForm from './SkillsForm';
import ProjectsForm from './ProjectsForm';
import SummaryForm from './SummaryForm';
import CertificatesForm from './CertificatesForm';
import ResumePreview from './ResumePreview';
import './ResumeTabs.css';

const ResumeTabs = () => {
  const [activeTab, setActiveTab] = useState('personal');
  const [showPreview, setShowPreview] = useState(false);

  const handlePreview = () => {
    setShowPreview(true);
  };

  const handleBackToEdit = () => {
    setShowPreview(false);
  };

  const handleNextTab = () => {
    const tabOrder = ['personal', 'education', 'experience', 'skills', 'projects', 'summary', 'certificates'];
    const currentIndex = tabOrder.indexOf(activeTab);
    if (currentIndex < tabOrder.length - 1) {
      setActiveTab(tabOrder[currentIndex + 1]);
    }
  };

  const renderTab = () => {
    switch (activeTab) {
      case 'personal':
        return <PersonalForm onNext={() => setActiveTab('education')} />;
      case 'education':
        return <EducationForm onNext={() => setActiveTab('experience')} />;
      case 'experience':
        return <ExperienceForm onNext={() => setActiveTab('skills')} />;
      case 'skills':
        return <SkillsForm onNext={() => setActiveTab('projects')} />;
      case 'projects':
        return <ProjectsForm onNext={() => setActiveTab('summary')} />;
      case 'summary':
        return <SummaryForm goToNextStep={handleNextTab} />;
      case 'certificates':
        return (
          <CertificatesForm
            onNext={() => console.log('Final tab reached')}
            onPreview={handlePreview} // ✅ Injected preview trigger
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="resume-tabs-wrapper">
      {showPreview ? (
        <ResumePreview onBack={handleBackToEdit} />
      ) : (
        <>
          <div className="d-flex flex-wrap justify-content-center gap-3 mb-4 tab-button-group">
            {[
              { key: 'personal', label: 'Personal' },
              { key: 'education', label: 'Education' },
              { key: 'experience', label: 'Experience' },
              { key: 'skills', label: 'Skills' },
              { key: 'projects', label: 'Projects' },
              { key: 'summary', label: 'Summary' },
              { key: 'certificates', label: 'Certificates' },
            ].map(tab => (
              <button
                key={tab.key}
                className={`tab-btn ${activeTab === tab.key ? 'active-tab' : ''}`}
                onClick={() => setActiveTab(tab.key)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="tab-content p-4 rounded-4 shadow-lg bg-white animate-fade">
            {renderTab()}
          </div>
        </>
      )}
    </div>
  );
};

export default ResumeTabs;
