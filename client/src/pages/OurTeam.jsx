// src/pages/OurTeam.jsx
import React from "react";
import { Carousel, Container, Row, Col, Badge } from "react-bootstrap";

const teamMembers = [
  {
    name: "Palak Jain",
    role: "Frontend Developer",
    specialties: ["React", "UI/UX"],
    image: "/images/palak.jpg", // replace with actual image path
  },
  {
    name: "Rahul Sharma",
    role: "Backend Developer",
    specialties: ["Node.js", "MongoDB"],
    image: "/images/rahul.jpg",
  },
  {
    name: "Aditi Verma",
    role: "Product Designer",
    specialties: ["Figma", "Branding"],
    image: "/images/aditi.jpg",
  },
];

const OurTeam = () => {
  return (
    <Container className="py-5 text-center">
      <Row className="mb-4">
        <Col>
          <h2 className="fw-bold">
            MEET <span className="fst-italic text-muted">OUR</span> TEAM
          </h2>
          <p className="text-muted">
            We’re a passionate team at CareerForge, building solutions that
            empower careers.
          </p>
        </Col>
      </Row>

      <Carousel interval={null} indicators={false}>
        {teamMembers.map((member, index) => (
          <Carousel.Item key={index}>
            <Row className="justify-content-center">
              <Col md={6} lg={5}>
                <div className="d-flex flex-column align-items-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="rounded shadow"
                    style={{ width: "280px", height: "auto", objectFit: "cover" }}
                  />
                  <h5 className="mt-3 fw-bold">{member.name}</h5>
                  <p className="text-muted">{member.role}</p>
                  <div>
                    {member.specialties.map((tag, i) => (
                      <Badge
                        key={i}
                        bg="light"
                        text="dark"
                        className="me-2 border"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Col>
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default OurTeam;
