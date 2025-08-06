import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ProfileSidebar from '../ProfileSidebar';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileFeaturesDropdownOpen, setMobileFeaturesDropdownOpen] = useState(false);
  const [mobileProfileDropdownOpen, setMobileProfileDropdownOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [showSidebar, setShowSidebar] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const loadUser = () => {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      } else {
        setUser(null);
      }
    };

    loadUser();
    window.addEventListener('userLoggedIn', loadUser);

    return () => {
      window.removeEventListener('userLoggedIn', loadUser);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    navigate('/login');
  };

  const handleScroll = () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
      header.style.background = 'rgba(255, 255, 255, 0.95)';
      header.style.backdropFilter = 'blur(15px)';
    } else {
      header.style.background = 'var(--background)';
      header.style.backdropFilter = 'blur(10px)';
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMobileFeaturesClick = (e) => {
    e.preventDefault();
    setMobileFeaturesDropdownOpen((prev) => !prev);
    setMobileProfileDropdownOpen(false); // close other dropdown
  };

  const handleMobileProfileClick = (e) => {
    e.stopPropagation();
    setMobileProfileDropdownOpen((prev) => !prev);
    setMobileFeaturesDropdownOpen(false); // close other dropdown
  };

  const handleMobileMenuClose = () => {
    setMenuOpen(false);
    setMobileFeaturesDropdownOpen(false);
    setMobileProfileDropdownOpen(false);
  };

  return (
    <>
      <header>
        <div className="logo-container">
          <div className="logo">CF</div>
          <div className="logo-text">Career<span>Forge</span></div>
        </div>

        <nav>
          <ul>
            <li><a href="/mainpage">Home</a></li>
            <li className="dropdown">
              <a href="#features">Features <i className="fas fa-chevron-down dropdown-arrow"></i></a>
              <div className="dropdown-content">
                <a href="/resume-builder">Resume Builder</a>
                <a href="/post-generator">Post Generator</a>
                <a href="/email-generator">Email Generator</a>
                <a href="/job-alerts">Job Alerts</a>
                <a href="#training-courses">Training Courses</a>
              </div>
            </li>
            <li><a href="#membership">Membership</a></li>
            <li><a href="#categories">Career Tips</a></li>
          </ul>
        </nav>
        <div className="user-info">
        {/* Desktop Profile/Login */}
        {user ? (
          <div className="dropdown">
            <button
              className="login-btn dropdown-toggle d-flex align-items-center gap-2"
              data-bs-toggle="dropdown"
              style={{
                background: '#fff',
                border: '1px solid #ddd',
                borderRadius: '30px',
                padding: '6px 12px',
                fontWeight: 500,
                boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                color: '#333',
                maxWidth: '180px',
                overflow: 'hidden',
                whiteSpace: 'nowrap'
              }}
            >
              <img
                src={user.image || '/default-user.png'}
                alt="profile"
                style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  objectFit: 'cover'
                }}
              />
              <span style={{ fontSize: '14px', fontWeight: '500' }}>
                {user.name?.split(' ')[0] || 'Profile'}
              </span>
            </button>

            <ul className="dropdown-menu dropdown-menu-end mt-2" style={{ minWidth: '160px', borderRadius: '10px', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)' }}>
              <li>
                <button className="dropdown-item" onClick={() => setShowSidebar(true)} style={{ padding: '10px 16px' }}>
                  <i className="fas fa-user-circle me-2"></i> My Profile
                </button>
              </li>
              <li>
                <button className="dropdown-item text-danger" onClick={handleLogout} style={{ padding: '10px 16px' }}>
                  <i className="fas fa-sign-out-alt me-2"></i> Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link to="/login" className="login-btn">
            <i className="fa-solid fa-right-to-bracket"></i> Login
          </Link>
        )}
       </div>
        <button className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
          <span></span><span></span><span></span>
        </button>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${menuOpen ? 'active' : ''}`}>
          <ul>
            <li><a href="/mainpage" onClick={handleMobileMenuClose}>Home</a></li>
            <li>
              <a
                href="#features"
                className={`mobile-features-toggle ${mobileFeaturesDropdownOpen ? 'active' : ''}`}
                onClick={handleMobileFeaturesClick}
              >
                Features <i className="fas fa-chevron-down dropdown-arrow"></i>
              </a>
              <div className={`mobile-dropdown-content ${mobileFeaturesDropdownOpen ? 'active' : ''}`}>
                <Link to="/resume-builder" onClick={handleMobileMenuClose}>Resume Builder</Link>
                <Link to="/post-generator" onClick={handleMobileMenuClose}>Post Generator</Link>
                <Link to="/email-generator" onClick={handleMobileMenuClose}>Email Generator</Link>
                <Link to="/job-alerts" onClick={handleMobileMenuClose}>Job Alerts</Link>
                <Link to="/training-courses" onClick={handleMobileMenuClose}>Training Courses</Link>
              </div>
            </li>
            <li><a href="#membership" onClick={handleMobileMenuClose}>Membership</a></li>
            <li><a href="#categories" onClick={handleMobileMenuClose}>Explore Categories</a></li>
          </ul>

          {/* Mobile Profile/Login Switch */}
          {user ? (
            <div className="mobile-profile-container px-3 mt-3" style={{ borderRadius: '12px', background: '#fff', boxShadow: '0 3px 8px rgba(0,0,0,0.1)', margin: '0 1rem' }}>
              <button
                className="w-100 d-flex align-items-center justify-content-between px-2 py-2"
                onClick={handleMobileProfileClick}
                style={{
                  background: 'none',
                  border: 'none',
                  fontWeight: '600',
                  color: '#333',
                  width: '100%',
                }}
              >
                <div className="d-flex align-items-center gap-2">
                  <img
                    src={user.image || '/default-user.png'}
                    alt="User"
                    style={{ width: '34px', height: '34px', borderRadius: '50%', objectFit: 'cover' }}
                  />
                  <span style={{ fontSize: '15px' }}>{user.name?.split(' ')[0] || 'Profile'}</span>
                </div>
                <i className={`fas fa-chevron-${mobileProfileDropdownOpen ? 'up' : 'down'}`}></i>
              </button>

              {mobileProfileDropdownOpen && (
                <div className="d-flex flex-column mt-2" style={{ borderTop: '1px solid #eee', paddingTop: '8px', paddingBottom: '8px' }}>
                  <button className="btn btn-link text-start" onClick={() => { setShowSidebar(true); setMobileProfileDropdownOpen(false); setMenuOpen(false); }} style={{ padding: '8px 12px', textDecoration: 'none', fontSize: '14px', color: '#333' }}>
                    <i className="fas fa-user-circle me-2"></i> My Profile
                  </button>
                  <button className="btn btn-link text-start text-danger" onClick={() => { handleLogout(); handleMobileMenuClose(); }} style={{ padding: '8px 12px', textDecoration: 'none', fontSize: '14px' }}>
                    <i className="fas fa-sign-out-alt me-2"></i> Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link to="/login" className="login-btn w-auto w-sm-100 text-center mt-3" onClick={handleMobileMenuClose}>
              <i className="fa-solid fa-right-to-bracket me-1"></i> Login
            </Link>
          )}
        </div>
      </header>

      {showSidebar && (
        <ProfileSidebar user={user} onClose={() => setShowSidebar(false)} />
      )}
    </>
  );
};

export default Header;
