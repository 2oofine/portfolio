import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBars, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./styles.scss";

const HeaderSection = () => {
  const [expanded, setExpanded] = useState<boolean>(false);

  return (
    <header id="home">
      <Navbar expand="md" expanded={expanded} className="mb-4">
        <Container className="mt-3">
          <Navbar.Brand href="#home">
            <h1
              style={{
                fontFamily: "'Pixelify Sans', sans-serif",
                fontWeight: 700,
              }}
            >
              win
            </h1>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => setExpanded(!expanded)}
          >
            <FontAwesomeIcon icon={faBars} size="lg" />
          </Navbar.Toggle>
          <Navbar.Collapse className="justify-content-between">
            <Nav className="mr-auto">
              <Nav.Link href="#tech-stack">TECH STACK</Nav.Link>
              <Nav.Link href="#projects">PROJECTS</Nav.Link>
              <Nav.Link href="#contact">CONTACT</Nav.Link>
            </Nav>
            <Nav className="nav-links ml-auto flex-row">
              <Nav.Link
                href="https://linkedin.com/in/sherwin-romero"
                target="_blank"
              >
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </Nav.Link>
              <Nav.Link href="https://github.com/2oofine" target="_blank">
                <FontAwesomeIcon icon={faGithub} size="lg" />
              </Nav.Link>
              <Nav.Link href="mailto:it.sherwinromero@gmail.com">
                <FontAwesomeIcon icon={faEnvelope} size="lg" />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default HeaderSection;
