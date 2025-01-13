import { Container } from "react-bootstrap";
import { ReactSVG } from "react-svg";
import techStacks from "../../../resources/tech-stacks/tech-stacks.json";
import "./styles.scss";

interface TechStackInterface {
  name: string;
  icon: string;
}

const TechStackSection = () => {
  return (
    <section id="tech-stack" className="tech-stack-section mb-5 py-5">
      <Container>
        <div className="tech-stack-title w-100 text-center mb-5">
          <h1>My Tech Stack</h1>
          <p>Technologies I've Worked With</p>
        </div>
        <div className="tech-stacks">
          {techStacks.map((techStack: TechStackInterface, idx) => {
            const techStackIcon = `/${techStack.icon}`;

            return (
              <div key={idx} className="tech-stack-item">
                <ReactSVG src={techStackIcon} />
                <p className="mt-5">{techStack.name}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default TechStackSection;
