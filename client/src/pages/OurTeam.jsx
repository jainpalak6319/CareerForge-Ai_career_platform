// src/pages/OurTeam.jsx
import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";

import palakImg from "../assets/team/palak.jpg";
import riyaImg from "../assets/team/riya.jpg";
import arshitImg from "../assets/team/arshit.jpg";
// import aishaImg from "../assets/team/aisha.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

import "../styles/OurTeam.css"; // ✅ import CSS file

// ✅ Team Members
const teamMembers = [
  {
    name: "Palak Jain",
    role: "Founder & CEO",
    image: palakImg,
    linkedin: "https://linkedin.com/in/example",
    email: "contact@careerforge.com",
  },
  {
    name: "Riya Kumari",
    role: "Tech Lead",
    image: riyaImg,
    linkedin: "https://linkedin.com/in/example",
    email: "contact@careerforge.com",
  },
  {
    name: "Arshit Raj",
    role: "Product Designer",
    image: arshitImg,
    linkedin: "https://linkedin.com/in/example",
    email: "contact@careerforge.com",
  },
];

const OurTeam = () => {
  const [show, setShow] = useState(false);
  const [activeMember, setActiveMember] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleShow = (member) => {
    setActiveMember(member);
    setShow(true);
  };
  const handleClose = () => setShow(false);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? teamMembers.length - 1 : prev - 1
    );
  };

  return (
    <div className="ourteam-section">
      <div className="container-fluid py-5">
        <div className="row align-items-center">
          {/* Left Section */}
          <div className="col-md-4 px-5">
            <h1 className="ourteam-title">
              MEET <span className="ourteam-highlight">OUR</span> TEAM
            </h1>
            <h4 className="ourteam-typed">
              <ReactTyped
                strings={["Innovators", "Leaders", "Builders"]}
                typeSpeed={70}
                backSpeed={40}
                loop
              />
            </h4>
            <p className="ourteam-desc">
              Behind CareerForge’s success is a team of passionate minds
              dedicated to shaping the future of careers. We combine expertise,
              innovation, and creativity to build solutions that empower job
              seekers and recruiters alike.
            </p>
          </div>

          {/* Right Section - Carousel */}
          <div className="col-md-8 text-center position-relative">
            <div className="d-flex justify-content-center align-items-center position-relative">
              {teamMembers.map((member, index) => {
                const isActive = index === currentIndex;
                const offset =
                  (index - currentIndex + teamMembers.length) %
                  teamMembers.length;

                return (
                  <motion.div
                    key={index}
                    className="ourteam-card-wrapper"
                    style={{
                      zIndex: isActive ? 3 : 1,
                      filter: isActive ? "none" : "blur(4px) brightness(0.8)",
                      transform: isActive
                        ? "scale(1)"
                        : offset === 1
                        ? "translateX(250px) scale(0.9)"
                        : "translateX(-250px) scale(0.9)",
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    onClick={() => handleShow(member)}
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="ourteam-card-img"
                    />
                    <div className="ourteam-card-body">
                      <h5>{member.name}</h5>
                      <p>{member.role}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Custom Controls Below */}
            <div className="ourteam-controls">
              <button onClick={handlePrev}>
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
              <button onClick={handleNext}>
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Popup */}
      <Modal
        show={show}
        onHide={handleClose}
        centered
        size="lg"
        dialogClassName="team-modal"
        contentClassName="border-0 rounded-4 shadow-lg"
      >
        {activeMember && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="row g-0">
              {/* Left Side - Image */}
              <div className="col-md-5">
                <img
                  src={activeMember.image}
                  alt={activeMember.name}
                  className="img-fluid h-100 w-100"
                  style={{
                    objectFit: "cover",
                    borderTopLeftRadius: "12px",
                    borderBottomLeftRadius: "12px",
                  }}
                />
              </div>

              {/* Right Side - Info */}
              <div className="col-md-7 d-flex flex-column justify-content-center p-4">
                <h2 className="ourteam-modal-title">{activeMember.name}</h2>
                <h5 className="ourteam-modal-role">{activeMember.role}</h5>
                <p className="ourteam-modal-text">
                  {activeMember.name} is a key part of CareerForge, contributing
                  with their expertise and passion to shape the future of
                  careers. With innovative thinking and leadership, they help us
                  empower job seekers and recruiters alike.
                </p>

                {/* Contact Section */}
                <div className="mt-4">
                  <h6 className="fw-bold" style={{ color: "#2D2F4A" }}>
                    Contact Me
                  </h6>
                  <div className="d-flex gap-3 mt-2">
                    <a
                      href={activeMember.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      style={{ color: "#0A66C2", fontSize: "1.5rem" }}
                    >
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a
                      href={`mailto:${activeMember.email}`}
                      style={{ color: "#D96BA0", fontSize: "1.5rem" }}
                    >
                      <i className="fas fa-envelope"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </Modal>

      {/* Gradient Background Animation */}
      <style>
        {`
          @keyframes gradientBG {
            0% {background-position: 0% 50%;}
            50% {background-position: 100% 50%;}
            100% {background-position: 0% 50%;}
          }
        `}
      </style>
    </div>
  );
};

export default OurTeam;
