import { useState, useEffect } from 'react';
import Sidebar from '../components/job-alert/Sidebar';
import ResumeUpload from '../components/job-alert/ResumeUpload';
import AIAnalysis from '../components/job-alert/AIAnalysis.jsx';
import CompanySuggestions from '../components/job-alert/CompanySuggestions';
import JobListings from '../components/job-alert/JobListings';

import './JobAlert.css';

function JobAlert() {
  const [uploadedResume, setUploadedResume] = useState(null);
  const [savedJobs, setSavedJobs] = useState([]);
  const [showAIAnalysis, setShowAIAnalysis] = useState(false);
  const [showCompanySuggestions, setShowCompanySuggestions] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sidebarActive, setSidebarActive] = useState(false);
  const [filters, setFilters] = useState({
     jobRoles: [],
    locations: [],
    experienceLevels: [],
    companyTypes: [],
    salary: 15
  });
   // Handle filter changes
  const handleFilterChange = (filterType, value, checked) => {
    setFilters(prev => {
      const newFilterValues = checked
        ? [...prev[filterType], value]
        : prev[filterType].filter(item => item !== value);
      
      return { ...prev, [filterType]: newFilterValues };
    });
  };
 // New state for file input reset
  const [fileInputKey, setFileInputKey] = useState(Date.now());

  // Enhanced remove file function
  const removeFile = () => {
    setUploadedResume(null);
    setShowAIAnalysis(false);
    setShowCompanySuggestions(false);
    // Reset the file input by changing its key
    setFileInputKey(Date.now());
     setLoading(false); 
  };
  // Sample data
  const jobsData = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "TechCorp Solutions",
      location: "Bangalore, India",
      type: "Full-time",
      experience: "3-5 years",
      salary: "₹12-18 LPA",
      posted: "2 days ago",
      description: "We are looking for an experienced Frontend Developer to join our dynamic team. You will be responsible for building user-facing web applications using modern JavaScript frameworks.",
      skills: ["React", "TypeScript", "Node.js", "CSS3", "HTML5", "Redux"],
      matchScore: 92,
      logo: "TC"
    },
           {
                id: 2,
                title: "Full Stack Developer",
                company: "InnovateLab",
                location: "Remote",
                type: "Full-time",
                experience: "2-4 years",
                salary: "₹8-15 LPA",
                posted: "1 day ago",
                description: "Join our startup as a Full Stack Developer and work on cutting-edge projects. We're building the next generation of web applications that will impact millions of users.",
                skills: ["Python", "Django", "React", "PostgreSQL", "AWS", "Docker"],
                matchScore: 88,
                logo: "IL"
            },
            {
                id: 3,
                title: "UI/UX Designer",
                company: "DesignStudio Pro",
                location: "Mumbai, India",
                type: "Full-time",
                experience: "2-3 years",
                salary: "₹6-12 LPA",
                posted: "3 days ago",
                description: "We're seeking a creative UI/UX Designer to create amazing user experiences. You will work closely with our product and development teams.",
                skills: ["Figma", "Sketch", "Adobe XD", "Prototyping", "User Research", "Wireframing"],
                matchScore: 75,
                logo: "DS"
            },
            {
                id: 4,
                title: "Backend Developer",
                company: "DataDrive Systems",
                location: "Pune, India",
                type: "Full-time",
                experience: "4-6 years",
                salary: "₹15-22 LPA",
                posted: "4 days ago",
                description: "Looking for a skilled Backend Developer to build scalable server-side applications. You'll work with microservices architecture and cloud technologies.",
                skills: ["Java", "Spring Boot", "Microservices", "Kubernetes", "MySQL", "Redis"],
                matchScore: 85,
                logo: "DD"
            },
            {
                id: 5,
                title: "Data Scientist",
                company: "AI Innovations",
                location: "Delhi NCR, India",
                type: "Full-time",
                experience: "3-5 years",
                salary: "₹18-25 LPA",
                posted: "5 days ago",
                description: "Join our AI team as a Data Scientist and work on machine learning models that power our intelligent systems. Experience with deep learning is a plus.",
                skills: ["Python", "Machine Learning", "TensorFlow", "Pandas", "SQL", "Statistics"],
                matchScore: 70,
                logo: "AI"
            }
  ];

  const companyData = [
    {
      name: "TechCorp Solutions",
      logo: "TC",
      match: "95% Profile Match",
      openings: 12,
      description: "Leading technology solutions provider"
    },
              {
                name: "InnovateLab",
                logo: "IL",
                match: "90% Profile Match",
                openings: 8,
                description: "Fast-growing startup in fintech"
            },
            {
                name: "DataDrive Systems",
                logo: "DD",
                match: "87% Profile Match",
                openings: 15,
                description: "Enterprise data solutions company"
            },
            {
                name: "AI Innovations",
                logo: "AI",
                match: "82% Profile Match",
                openings: 6,
                description: "Cutting-edge AI research company"
            }
  ];

  const handleFileUpload = (file) => {
    if (file) {
      setUploadedResume(file);
      setLoading(true);
      
      // Simulate AI analysis
      setTimeout(() => {
        setShowAIAnalysis(true);
        setShowCompanySuggestions(true);
        setLoading(false);
      }, 3000);
    }
  };



  const toggleSaveJob = (jobId) => {
    setSavedJobs(prev => 
      prev.includes(jobId) 
        ? prev.filter(id => id !== jobId) 
        : [...prev, jobId]
    );
  };

 // Clear all filters
  const clearAllFilters = () => {
    setFilters({
      jobRoles: [],
      locations: [],
      experienceLevels: [],
      companyTypes: [],
      salary: 15
    });
  };

  // Update salary filter
  const updateSalary = (value) => {
    setFilters(prev => ({ ...prev, salary: value }));
  };
  const toggleSidebar = () => {
    setSidebarActive(!sidebarActive);
  };

  return (
    <div className="app">
      
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        <i className="fas fa-filter"></i>
      </button>

      <div className="main-layout">
        <Sidebar 
          active={sidebarActive} 
          filters={filters} 
          updateSalary={updateSalary}
          clearAllFilters={clearAllFilters}
           onFilterChange={handleFilterChange}
        />
        
        <main className="main-content">
         <ResumeUpload 
          key={fileInputKey} // Reset file input when key changes
          onFileUpload={handleFileUpload} 
          uploadedResume={uploadedResume} 
          onRemoveFile={removeFile}
        />
          
          {loading && (
            <div className="loading show">
              <div className="spinner"></div>
              <p>Analyzing your resume and finding perfect matches...</p>
            </div>
          )}
          
          {showAIAnalysis && <AIAnalysis />}
          {showCompanySuggestions && <CompanySuggestions companies={companyData} />}
          
          <JobListings 
            jobs={jobsData} 
            savedJobs={savedJobs} 
            uploadedResume={uploadedResume}
            onSaveJob={toggleSaveJob}
          />
        </main>
      </div>
      
     
    </div>
  );
}

export default JobAlert;