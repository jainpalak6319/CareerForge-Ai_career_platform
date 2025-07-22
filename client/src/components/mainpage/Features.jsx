import React from 'react';
import Feature from './Feature';
import { useScrollAnimation } from '../hooks/useAnimation';

const Features = () => {
  useScrollAnimation('.feature');

  const features = [
    {
      id: "resume-builder",
      icon: "fas fa-file-alt",
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      title: "AI Resume Builder",
      description: "Create professional, ATS-friendly resumes in minutes with our advanced AI technology...",
      buttonText: "Build Your Resume"
    },
      {
      id: "post-generator",
      icon: "fas fa-share-alt",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1174&q=80",
      title: "Social Post Generator",
      description: "Boost your professional presence on LinkedIn and other platforms with engaging content that showcases your expertise. Our AI helps you maintain a consistent, professional brand while attracting valuable career opportunities.",
      buttonText: "Create Posts"
    },
    {
      id: "email-generator",
      icon: "fas fa-envelope",
      image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1174&q=80",
      title: "Professional Email Generator",
      description: "Never struggle with professional communication again. Generate perfectly crafted cover letters, follow-up emails, and networking messages in seconds. Our AI understands context and maintains your professional tone across all communications.",
      buttonText: "Compose Emails"
    },
    {
      id: "job-alerts",
      icon: "fas fa-bell",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      title: "Smart Job Alerts",
      description: "Get notified about job opportunities that match your skills and career goals. Our intelligent matching system learns from your preferences and delivers personalized job recommendations directly to your inbox, saving you hours of searching.",
      buttonText: "Set Up Alerts"
    },
    {
      id: "training-courses",
      icon: "fas fa-graduation-cap",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      title: "Training Courses",
      description: "Upgrade your skills with our comprehensive training programs designed by industry experts. From technical skills to leadership development, our courses help you stay competitive in today's rapidly evolving job market.",
      buttonText: "Browse Courses"
    }

  ];

  return (
    <section className="features" id="features">
      <h2 className="section-title">Our <span>Powerful Tools</span></h2>
      {features.map((feature, i) => (
        <Feature key={i} {...feature} />
      ))}
    </section>
  );
};

export default Features;