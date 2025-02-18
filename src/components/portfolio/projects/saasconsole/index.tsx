import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Carousel, Col } from "react-bootstrap";
import SaaSConsoleActs from "../../../../assets/imgs/saasconsole/saas-acts.png";
import SaaSConsoleDepts from "../../../../assets/imgs/saasconsole/saas-depts.png";
import SaaSConsoleGroups from "../../../../assets/imgs/saasconsole/saas-groups.png";
import SaaSConsoleIntegs from "../../../../assets/imgs/saasconsole/saas-integs.png";
import SaaSConsolePeople from "../../../../assets/imgs/saasconsole/saas-people.png";
import SaaSConsoleRBAC from "../../../../assets/imgs/saasconsole/saas-rbac.png";
import SaaSConsoleDashboard from "../../../../assets/imgs/saasconsole/saas-dashboard.png";

const SaaSConsole = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <div className="projects-content d-md-flex align-items-center">
      <Col md={7} className="mr-md-3">
        <Carousel
          className="carousel"
          interval={3000}
          fade
          variant="dark"
          indicators={false}
          controls={isHovered}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Carousel.Item>
            <img className="img-in-carousel d-block w-100" src={SaaSConsoleDashboard} alt="Dashboard" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="img-in-carousel d-block w-100" src={SaaSConsolePeople} alt="Peoples" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="img-in-carousel d-block w-100" src={SaaSConsoleGroups} alt="Groups" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="img-in-carousel d-block w-100" src={SaaSConsoleDepts} alt="Departments" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="img-in-carousel d-block w-100" src={SaaSConsoleActs} alt="Activities" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="img-in-carousel d-block w-100" src={SaaSConsoleIntegs} alt="Integrations" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="img-in-carousel d-block w-100" src={SaaSConsoleRBAC} alt="RBAC" />
          </Carousel.Item>
        </Carousel>
      </Col>
      <Col md={5}>
        <div className="project-title m-0">
          <h2 className="mt-3 mb-0">SaaSConsole</h2>
          <p className="mb-3">Hooli Software Inc.</p>
        </div>
        <div className="project-content mb-3">
          <p>
            {"> "} I am one of the developers of this project that offers{" "}
            <b>fast & easy SaaS management and manages groups of users</b>.
          </p>
          <p>
            {"> "} Integrated SaaS applications such as: <b>Google Cloud</b>, <b>Slack</b>, <b>Asana</b>,{" "}
            <b>Hootsuite</b>, and <b>Bitbucket</b>.
          </p>

          <p>
            {"> "} Tech Stack used: <b>React.js</b>, <b>TypeScript</b>, <b>Redux</b>, <b>Bootstrap</b>, <b>Golang</b>,{" "}
            <b>AWS DynamoDB</b>.
          </p>
          <div className="mt-5 text-end visit-website-block">
            <a className="btn-visit-website" href="https://saasconsole.com" target="_blank">
              <FontAwesomeIcon icon={faGlobe} /> Visit Website
            </a>
          </div>
        </div>
      </Col>
    </div>
  );
};

export default SaaSConsole;
