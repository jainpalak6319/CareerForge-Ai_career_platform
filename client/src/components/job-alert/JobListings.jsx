const JobListings = ({ jobs, savedJobs, uploadedResume, onSaveJob }) => {
  const getMatchClass = (score) => {
    if (score >= 85) return 'high';
    if (score >= 70) return 'medium';
    return 'low';
  };

  return (
    <section className="job-listings">
      {jobs.map(job => (
        <div key={job.id} className="job-card">
          <div className="job-header">
            <div className="job-info">
              <h3 className="job-title">{job.title}</h3>
              <div className="company-name">{job.company}</div>
              <div className="job-location">
                <i className="fas fa-map-marker-alt"></i>
                {job.location}
              </div>
            </div>
            <div className="company-logo">{job.logo}</div>
          </div>
          
          <div className="job-meta">
            {/* Job meta items */}
          </div>
          
          <p className="job-description">{job.description}</p>
          
          <div className="job-skills">
            {job.skills.map((skill, index) => (
              <span 
                key={index} 
                className={`job-skill-tag ${uploadedResume ? 'matched' : ''}`}
              >
                {skill}
              </span>
            ))}
          </div>
          
          <div className="job-actions">
            <button className="apply-btn">
              <i className="fas fa-paper-plane"></i>
              Apply Now
            </button>
            <button 
              className={`save-btn ${savedJobs.includes(job.id) ? 'saved' : ''}`}
              onClick={() => onSaveJob(job.id)}
            >
              <i className="fas fa-heart"></i>
              {savedJobs.includes(job.id) ? 'Saved' : 'Save'}
            </button>
            {uploadedResume && (
              <div className={`match-score ${getMatchClass(job.matchScore)}`}>
                <i className="fas fa-star"></i>
                {job.matchScore}% Match
              </div>
            )}
          </div>
        </div>
      ))}
    </section>
  );
};

export default JobListings;