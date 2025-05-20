import { faFacebookSquare, faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Container, Nav } from "react-bootstrap";
import "./styles.scss";

const ContactSection = () => {
  const iconColor: string = "#565959";
  return (
    <section id="contact" className="contact-section mb-0 py-3">
      <Container className="d-md-flex align-items-center">
        <Col md={6} className="contact-title">
          <h1>Let's Connect!</h1>
          {/* <p>
            <FontAwesomeIcon icon={faMobilePhone} size="lg" />{" "}
            {"+63 (936) 227-8056"}
          </p> */}
          <p className="d-md-flex" style={{ gap: "5px" }}>
            <Nav.Link href="mailto:it.sherwinromero@gmail.com" target="_blank">
              <FontAwesomeIcon icon={faEnvelope} size="lg" />
            </Nav.Link>
            {"it.sherwinromero@gmail.com"}
          </p>
          <div className="socials d-flex">
            <Nav.Link href="https://linkedin.com/in/sherwin-romero" target="_blank">
              <FontAwesomeIcon className="social-icons" color={iconColor} icon={faLinkedin} size="lg" />
            </Nav.Link>
            <Nav.Link href="https://facebook.com/qet.hooked" target="_blank">
              <FontAwesomeIcon className="social-icons" color={iconColor} icon={faFacebookSquare} size="lg" />
            </Nav.Link>
            <Nav.Link href="https://instagram.com/2oofine" target="_blank">
              <FontAwesomeIcon className="social-icons" color={iconColor} icon={faInstagram} size="lg" />
            </Nav.Link>
            <Nav.Link href="https://github.com/2oofine" target="_blank">
              <FontAwesomeIcon className="social-icons" color={iconColor} icon={faGithub} size="lg" />
            </Nav.Link>
          </div>
        </Col>
        <Col md={6} className="contact-details d-flex justify-content-center align-items-start">
          <ul className="footer-nav-links p-0 mt-3">
            <li className="footer-link">
              <a href="#about-me">ABOUT ME</a>
            </li>
            <li className="footer-link">
              <a href="#tech-stack">TECH STACK</a>
            </li>
            <li className="footer-link">
              <a href="#projects">PROJECTS</a>
            </li>
            <li className="footer-link">
              <a href="#contact">CONTACT</a>
            </li>
          </ul>
        </Col>
      </Container>
    </section>
  );
};

export default ContactSection;
