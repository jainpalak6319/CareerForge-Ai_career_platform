import React from 'react';
import './ProfileSidebar.css';
  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    navigate('/login');
  };
const ProfileSidebar = ({ user, onClose }) => {
  return (
    <div className="profile-sidebar-overlay" onClick={onClose}>
      <div className="profile-sidebar slide-in" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>×</button>

        {/* Profile Header */}
        <div className="profile-header">
          <img
            src={user.image || '/default-user.png'}
            alt="User"
            className="profile-img"
          />
          <div className="profile-details">
            <h3>{user.name}</h3>
            <p className="user-role">{user.role}</p>
            <p className="user-location">📍 {user.location}</p>
            <p className="user-education">🎓 {user.education}</p>
          </div>
        </div>

        {/* Profile Info */}
        <div className="profile-info">
          <p><strong>Email:</strong> {user.email}</p>
        </div>

        {/* Quick Stats */}
        <h4 className="section-title">Quick Stats</h4>
        <div className="quick-stats">
          <div className="stat-card">
            <strong>{user.appliedJobs || 12}</strong>
            <span>Applied Jobs</span>
          </div>
          <div className="stat-card">
            <strong>{user.savedJobs || 5}</strong>
            <span>Saved Jobs</span>
          </div>
        </div>

        {/* Skills Section */}
        <h4 className="section-title">Skills</h4>
        <div className="skills-tags">
          {user.skills && user.skills.length > 0 ? (
            user.skills.map((skill, i) => (
              <span key={i} className="skill-tag">{skill}</span>
            ))
          ) : (
            <p className="empty-text">No skills added yet</p>
          )}
        </div>

        {/* Navigation Links */}
        <h4 className="section-title">Navigation</h4>
        <div className="sidebar-nav">
          <a href="/applications" className="sidebar-link">📄 My Applications</a>
          <a href="/watchlist" className="sidebar-link">⭐ Watchlist</a>
          <a href="/resume" className="sidebar-link">📑 My Resume</a>
          <a href="/help" className="sidebar-link">❓ Help Center</a>
          <a href="/logout" className="sidebar-link logout" onClick={() => { handleLogout()}}>🚪 Logout</a>
        </div>
      </div>
    </div>
  );
};

export default ProfileSidebar;
