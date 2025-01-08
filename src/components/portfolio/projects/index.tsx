import { Container } from "react-bootstrap";

import EASI from "./easi";
import SaaSConsole from "./saasconsole";
import "./styles.scss";
import MCISELearning from "./mcis-elearning";

const ProjectsSection = () => {
  return (
    <section id="projects" className="projects-section mb-5">
      <Container>
        <div className="projects-title text-center mb-5">
          <h1>Recent Projects</h1>
          <p>Projects I've worked on</p>
        </div>
        <div className="projects">
          <SaaSConsole />
          <MCISELearning />
          <EASI />
        </div>
        <div className="more-projects-to-come text-center mt-5">
          <p style={{ fontSize: "18px" }}>Future projects coming soon...</p>
        </div>
      </Container>
    </section>
  );
};

export default ProjectsSection;
