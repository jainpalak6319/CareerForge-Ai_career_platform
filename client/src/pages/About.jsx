import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import Typed from "typed.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/About.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const typed = new Typed(".about-page-typed-text", {
      strings: [
        "Empowering Careers.",
        "Optimizing Resumes.",
        "Accelerating Opportunities.",
      ],
      typeSpeed: 60,
      backSpeed: 40,
      loop: true,
      showCursor: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  // Scroll handler for smooth scroll
  const scrollToContent = () => {
    const element = document.getElementById("about-page-content");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="about-page-wrapper">
      {/* ====== HERO SECTION ====== */}
      <section className="about-page-hero text-center text-white d-flex flex-column justify-content-center align-items-center">
        <img
          src="/brand-logo-img.png"
          alt="CareerForge Logo"
          className="about-page-hero-logo mb-3"
        />
        <h1 className="display-5 fw-bold mb-3">
          Welcome to <span className="about-page-brand">CareerForge</span>
        </h1>
        <h2 className="about-page-typed-text"></h2>
        <p className="mt-3 w-75 mx-auto">
          CareerForge is your one-stop AI-powered career companion that simplifies your job search,
          enhances your profile, and helps you grow through skill development and automation tools.
        </p>

        {/* Scroll to Explore Button */}
        <div className="about-page-scroll-indicator" onClick={scrollToContent}>
          <span className="about-page-scroll-text">Scroll to Explore</span>
          <div className="about-page-scroll-arrow"></div>
        </div>
      </section>

      {/* ====== PRODUCT WALKTHROUGH ====== */}
      <div className="container mt-5" id="about-page-content">
        {/* Resume Builder & ATS Optimizer */}
        <motion.div
          className="row align-items-center my-5 about-page-feature"
          data-aos="fade-right"
        >
          <div className="col-md-6">
            <img
              src="/assets/about/resume-builder.png"
              alt="Resume Builder"
              className="about-page-feature-img img-fluid rounded shadow-lg"
            />
          </div>
          <div className="col-md-6">
            <h3 className="about-page-feature-title">
              AI Resume Builder & ATS Optimizer
            </h3>
            <p>
              Build professional, ATS-friendly resumes effortlessly. Our intelligent system guides you
              through crafting impactful resumes that get noticed by recruiters and pass ATS scans with ease.
            </p>
          </div>
        </motion.div>

        {/* Smart Job Alerts */}
        <motion.div
          className="row align-items-center my-5 about-page-feature flex-row-reverse"
          data-aos="fade-left"
        >
          <div className="col-md-6">
            <img
              src="/assets/about/job-alerts.png"
              alt="Smart Job Alerts"
              className="about-page-feature-img img-fluid rounded shadow-lg"
            />
          </div>
          <div className="col-md-6">
            <h3 className="about-page-feature-title">Smart Job Alerts</h3>
            <p>
              Receive real-time job updates tailored to your skills and preferences. CareerForge’s
              AI system filters the noise and delivers curated job recommendations directly to your dashboard.
            </p>
          </div>
        </motion.div>

        {/* Email Generator */}
        <motion.div
          className="row align-items-center my-5 about-page-feature"
          data-aos="fade-right"
        >
          <div className="col-md-6">
            <img
              src="/assets/about/email-generator.png"
              alt="Email Generator"
              className="about-page-feature-img img-fluid rounded shadow-lg"
            />
          </div>
          <div className="col-md-6">
            <h3 className="about-page-feature-title">AI Email Generator</h3>
            <p>
              Simplify your professional communication. CareerForge’s AI Email Generator helps you craft
              perfectly worded professional emails — from job applications to follow-ups — with a single click.
            </p>
          </div>
        </motion.div>

        {/* Post Generator */}
        <motion.div
          className="row align-items-center my-5 about-page-feature flex-row-reverse"
          data-aos="fade-left"
        >
          <div className="col-md-6">
            <img
              src="/assets/about/post-generator.png"
              alt="Post Generator"
              className="about-page-feature-img img-fluid rounded shadow-lg"
            />
          </div>
          <div className="col-md-6">
            <h3 className="about-page-feature-title">AI Post Generator</h3>
            <p>
              Boost your online presence effortlessly. Generate professional LinkedIn or social media posts 
              tailored to your industry and audience — helping you stay visible, credible, and consistent online.
            </p>
          </div>
        </motion.div>

        {/* Training Courses */}
        <motion.div
          className="row align-items-center my-5 about-page-feature"
          data-aos="fade-right"
        >
          <div className="col-md-6">
            <img
              src="/assets/about/training-courses.jpeg"
              alt="Training Courses"
              className="about-page-feature-img img-fluid rounded shadow-lg"
            />
          </div>
          <div className="col-md-6">
            <h3 className="about-page-feature-title">Career-Oriented Training Courses</h3>
            <p>
              Upskill yourself with our curated training programs. Whether it’s technical skills,
              interview preparation, or industry insights — CareerForge helps you stay ahead in your career journey.
            </p>
          </div>
        </motion.div>

        {/* Impact Section */}
        <motion.div
          className="about-page-impact text-center mt-5"
          data-aos="fade-up"
        >
          <h2 className="fw-bold mb-3">Our Impact</h2>
          <p className="mb-4">
            CareerForge has empowered thousands of job seekers to create standout resumes,
            land interviews faster, and grow their professional network.
          </p>
          <div className="row">
            <div className="col-md-4">
              <h3 className="about-page-impact-number">10K+</h3>
              <p>Resumes Built</p>
            </div>
            <div className="col-md-4">
              <h3 className="about-page-impact-number">5K+</h3>
              <p>Successful Placements</p>
            </div>
            <div className="col-md-4">
              <h3 className="about-page-impact-number">1K+</h3>
              <p>Training Sessions Completed</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
