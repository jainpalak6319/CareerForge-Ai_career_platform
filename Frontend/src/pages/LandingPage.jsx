import React, { useEffect } from 'react';
import { Container, Row, Col, Button, Card, Navbar, Nav } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './LandingPage.css';
import companyLogos from '../assets/companyLogos'; // ⬅ Import here

const LandingPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      {/* Navbar */}
      <Navbar expand="lg" className="shadow-sm landing-navbar">
        <Container>
          <Navbar.Brand href="/">
            <div className="text-logo">
              <h2>
                Career<span>Forge</span>
              </h2>
              <p>Unlock Opportunities, Shape Your Career</p>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#companies">Companies</Nav.Link>
              <Button href="/login" className="ms-3 btn-accent">Login</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section */}
      <section className="hero-section d-flex align-items-center text-center text-white">
        <Container>
          <h1 data-aos="fade-up">Welcome to <span className="highlight">CareerForge</span></h1>
          <p data-aos="fade-up" data-aos-delay="200">
            Your personalized platform to connect job seekers with opportunities
          </p>
          <Button href="/signup/role" className="btn-accent mt-3" data-aos="zoom-in" data-aos-delay="400">
            Get Started
          </Button>
        </Container>
      </section>

      {/* Features */}
      <section id="features" className="features-section py-5 bg-light">
        <Container>
          <h2 className="section-title text-center mb-5">Our Features</h2>
          <Row>
            {[
              {
                title: 'Smart Matching',
                desc: 'AI-powered recommendations based on user profile and preferences'
              },
              {
                title: 'Role-Based Dashboard',
                desc: 'Separate interfaces and workflows for Job Seekers and Recruiters'
              },
              {
                title: 'Track Your Progress',
                desc: 'Manage applications, interviews, and feedback easily'
              }
            ].map((feature, i) => (
              <Col md={4} key={i} data-aos="fade-up" data-aos-delay={i * 150}>
                <Card className="feature-card shadow-sm mb-4">
                  <Card.Body>
                    <Card.Title className="fw-bold">{feature.title}</Card.Title>
                    <Card.Text>{feature.desc}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
       <section id="companies" className="logos-section py-5">
       <Container>
       <h2 className="text-center mb-4">Trusted by Top Companies</h2>
       <div className="logo-scroller">
      <div className="logo-track">
        {companyLogos.map((logo, idx) => (
          <div className="logo-item" key={idx}>
            <img src={logo} alt={`Company ${idx}`} />
          </div>
        ))}
       </div>
       </div>
       </Container>
      </section>
      {/* Footer */}
      <footer className="footer-section text-center py-4 text-white">
        <Container>
          <p className="m-0">© {new Date().getFullYear()} CareerForge. All rights reserved.</p>
        </Container>
      </footer>
    </>
  );
};

export default LandingPage;
