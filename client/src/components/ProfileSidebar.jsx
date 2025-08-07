import React from 'react';
import './ProfileSidebar.css';

const ProfileSidebar = ({ user, onClose }) => {
  return (
    <div className="profile-sidebar-overlay" onClick={onClose}>
      <div className="profile-sidebar slide-in" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>×</button>
        <div className="profile-header">
          <img
            src={user.image || '/default-user.png'}
            alt="User"
            className="profile-img"
          />
          <h3>{user.name}</h3>
          <p className="user-role">{user.role}</p>
        </div>
        <div className="profile-info">
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Role:</strong> {user.role}</p>
          {/* Add more fields like phone, bio, etc. if available */}
        </div>
      </div>
    </div>
  );
};

export default ProfileSidebar;
