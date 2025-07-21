import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const OAuthSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const token = query.get('token');
    const role = query.get('role');

    if (token && role) {
      localStorage.setItem('careerforge-token', token);
      localStorage.setItem('careerforge-user', JSON.stringify({ role }));
      toast.success('Login successful via OAuth!');
      navigate(role === 'recruiter' ? '/dashboard/recruiter' : '/dashboard/jobseeker');
    } else {
      toast.error('OAuth login failed');
      navigate('/login');
    }
  }, [navigate]);

  return null;
};

export default OAuthSuccess;
