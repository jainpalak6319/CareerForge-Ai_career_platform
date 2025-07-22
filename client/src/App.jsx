import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import '@fortawesome/fontawesome-free/css/all.min.css';
import ScrollToTop from './components/ScrollToTop';
// Pages
import MainPage from './pages/MainPage';
import Login from './pages/auth/Login';
import SignupRole from './pages/auth/SignupRole';
import JobSeekerSignup from './pages/auth/JobSeekerSignup';
import RecruiterSignup from './pages/auth/RecruiterSignup';
import ForgotPassword from './pages/auth/ForgotPassword';
import ResumeBuilder from './pages/ResumeBuilder';
import OAuthSuccess from './pages/auth/OAuthSuccess';
import Unauthorized from './pages/Unauthorized';

// Dashboards
import JobSeekerDashboard from './pages/dashboard/JobSeekerDashboard';
import RecruiterDashboard from './pages/dashboard/RecruiterDashboard';

// Routes
import PrivateRoute from './routes/PrivateRoute';


const App = () => {
  return (
    <>
      <Router>
         <ScrollToTop /> {/* Placed here to trigger on route changes */}
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup/role" element={<SignupRole />} />
          <Route path="/signup/jobseeker" element={<JobSeekerSignup />} />
          <Route path="/signup/recruiter" element={<RecruiterSignup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/resume-builder" element={<ResumeBuilder />} />
          <Route path="/oauth-success" element={<OAuthSuccess />} />
          <Route path="/unauthorized" element={<Unauthorized />} />

          {/* Protected Routes */}
          <Route
            path="/dashboard/jobseeker"
            element={
              <PrivateRoute allowedRoles={['jobseeker']}>
                <JobSeekerDashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard/recruiter"
            element={
              <PrivateRoute allowedRoles={['recruiter']}>
                <RecruiterDashboard />
              </PrivateRoute>
            }
          />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>

      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
};

export default App;
