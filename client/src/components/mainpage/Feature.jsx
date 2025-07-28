import React from 'react';
import { useNavigate } from 'react-router-dom';

const Feature = ({ id, icon, image, title, description, buttonText }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    switch(id) {
      case 'resume-builder':
        navigate('/resume-builder');
        break;
      case 'post-generator':
        navigate('/post-generator');
        break;
      case 'email-generator':
        navigate('/email-generator');
        break;
      case 'job-alerts':
        navigate('/job-alerts');
        break;
      case 'training-courses':
        alert('Training Courses launching soon!');
        break;
      default:
        alert('Feature launching soon!');
    }
  };

  return (
    <div className="feature" id={id}>
      <div className="feature-icon">
        <i className={icon}></i>
      </div>
      <div className="feature-image">
        <img src={image} alt={title} />
      </div>
      <div className="feature-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <button className="feature-btn" onClick={handleClick}>
          {buttonText} <i className="fas fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Feature;
