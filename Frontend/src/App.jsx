import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/auth/Login';
import SignupRole from './pages/auth/SignupRole';
import SignupForm from './pages/auth/SignupForm';
// import ForgotPassword from './pages/auth/ForgotPassword';
import { ToastContainer } from 'react-toastify';


const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup/role" element={<SignupRole />} />
        <Route path="/signup/details" element={<SignupForm />} />
        {/* <Route path="/forgot-password" element={<ForgotPassword />} /> */}
        {/* Future protected dashboard route can go here */}
        <Route path="/dashboard" element={<h2 className="text-center mt-5">Welcome to Dashboard 🎉</h2>} />
      </Routes>
    </Router>
    <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
};

export default App;


