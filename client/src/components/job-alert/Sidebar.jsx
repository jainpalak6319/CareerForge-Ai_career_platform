import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Sidebar = ({ active, filters, updateSalary, clearAllFilters, onFilterChange }) => {
  const [showMoreRoles, setShowMoreRoles] = useState(false);
  
  // Filter options data
  const jobRoles = [
    { id: 'frontend', label: 'Frontend Developer', count: 42 },
    { id: 'backend', label: 'Backend Developer', count: 38 },
    { id: 'fullstack', label: 'Full Stack Developer', count: 29 },
    { id: 'designer', label: 'UI/UX Designer', count: 24 },
    { id: 'data', label: 'Data Scientist', count: 18 },
    { id: 'mobile', label: 'Mobile Developer', count: 15 },
    { id: 'devops', label: 'DevOps Engineer', count: 12 },
    { id: 'qa', label: 'QA Engineer', count: 10 },
  ];

  const locations = [
    { id: 'remote', label: 'Remote', count: 87 },
    { id: 'bangalore', label: 'Bangalore', count: 65 },
    { id: 'mumbai', label: 'Mumbai', count: 52 },
    { id: 'delhi', label: 'Delhi NCR', count: 48 },
    { id: 'pune', label: 'Pune', count: 34 },
    { id: 'hyderabad', label: 'Hyderabad', count: 28 },
    { id: 'chennai', label: 'Chennai', count: 22 },
  ];

  const experienceLevels = [
    { id: 'entry', label: 'Entry Level (0-2 years)', count: 43 },
    { id: 'mid', label: 'Mid Level (3-5 years)', count: 67 },
    { id: 'senior', label: 'Senior Level (6+ years)', count: 41 },
  ];

  const companyTypes = [
    { id: 'startup', label: 'Startup', count: 76 },
    { id: 'mnc', label: 'MNC', count: 45 },
    { id: 'product', label: 'Product Based', count: 38 },
    { id: 'service', label: 'Service Based', count: 32 },
    { id: 'nonprofit', label: 'Non-Profit', count: 15 },
  ];

  // Toggle show more roles
  const toggleMoreRoles = () => {
    setShowMoreRoles(!showMoreRoles);
  };

  // Handle checkbox changes
  const handleCheckboxChange = (e, filterType) => {
    const { value, checked } = e.target;
    onFilterChange(filterType, value, checked);
  };

  return (
    <aside className={`sidebar ${active ? 'active' : ''}`} id="sidebar">
      <div className="sidebar-header">
        <h2 className="sidebar-title">
          <i className="fas fa-filter"></i>
          Job Filters
        </h2>
        <button className="clear-all-filters" onClick={clearAllFilters}>
          <i className="fas fa-times"></i> Clear All
        </button>
      </div>

      {/* Job Roles Filter */}
      <div className="filter-section">
        <h3 className="filter-section-title">
          <i className="fas fa-briefcase"></i>
          Job Roles
        </h3>
        <div className="filter-options">
          {jobRoles.slice(0, showMoreRoles ? jobRoles.length : 5).map((role) => (
            <div key={role.id} className="filter-option">
              <input 
                type="checkbox" 
                id={role.id} 
                value={role.id}
                checked={filters.jobRoles.includes(role.id)}
                onChange={(e) => handleCheckboxChange(e, 'jobRoles')}
              />
              <label htmlFor={role.id}>{role.label}</label>
              <span className="filter-count">{role.count}</span>
            </div>
          ))}
          <div className="see-more" onClick={toggleMoreRoles}>
            <i className={`fas fa-${showMoreRoles ? 'minus' : 'plus'}`}></i> 
            {showMoreRoles ? 'Show less' : 'See more roles'}
          </div>
        </div>
      </div>

      {/* Location Filter */}
      <div className="filter-section">
        <h3 className="filter-section-title">
          <i className="fas fa-map-marker-alt"></i>
          Location
        </h3>
        <div className="filter-options">
          {locations.slice(0, 5).map((location) => (
            <div key={location.id} className="filter-option">
              <input 
                type="checkbox" 
                id={location.id} 
                value={location.id}
                checked={filters.locations.includes(location.id)}
                onChange={(e) => handleCheckboxChange(e, 'locations')}
              />
              <label htmlFor={location.id}>{location.label}</label>
              <span className="filter-count">{location.count}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Experience Filter */}
      <div className="filter-section">
        <h3 className="filter-section-title">
          <i className="fas fa-user-tie"></i>
          Experience Level
        </h3>
        <div className="filter-options">
          {experienceLevels.map((level) => (
            <div key={level.id} className="filter-option">
              <input 
                type="checkbox" 
                id={level.id} 
                value={level.id}
                checked={filters.experienceLevels.includes(level.id)}
                onChange={(e) => handleCheckboxChange(e, 'experienceLevels')}
              />
              <label htmlFor={level.id}>{level.label}</label>
              <span className="filter-count">{level.count}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Company Type Filter */}
      <div className="filter-section">
        <h3 className="filter-section-title">
          <i className="fas fa-building"></i>
          Company Type
        </h3>
        <div className="filter-options">
          {companyTypes.map((type) => (
            <div key={type.id} className="filter-option">
              <input 
                type="checkbox" 
                id={type.id} 
                value={type.id}
                checked={filters.companyTypes.includes(type.id)}
                onChange={(e) => handleCheckboxChange(e, 'companyTypes')}
              />
              <label htmlFor={type.id}>{type.label}</label>
              <span className="filter-count">{type.count}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Salary Filter */}
      <div className="filter-section">
        <h3 className="filter-section-title">
          <i className="fas fa-rupee-sign"></i>
          Salary Range
        </h3>
        <div className="salary-range">
          <div className="salary-values">
            <span>₹3L</span>
            <span id="salaryValue">₹{filters.salary}L</span>
            <span>₹50L+</span>
          </div>
          <input 
            type="range" 
            className="salary-input" 
            id="salaryRange" 
            min="3" 
            max="50" 
            value={filters.salary} 
            onChange={(e) => updateSalary(e.target.value)}
          />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;