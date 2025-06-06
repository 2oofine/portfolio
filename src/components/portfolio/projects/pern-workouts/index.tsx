import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Carousel, Col } from "react-bootstrap";
import PERN1 from "../../../../assets/imgs/pern-workouts/1.jpg";
import PERN2 from "../../../../assets/imgs/pern-workouts/2.jpg";

const PERNWorkouts = () => {
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
            <img
              className="img-in-carousel d-block w-100"
              src={PERN1}
              alt="PERN1"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="img-in-carousel d-block w-100"
              src={PERN2}
              alt="PERN2"
            />
          </Carousel.Item>
        </Carousel>
      </Col>
      <Col md={5}>
        <div className="project-title m-0">
          <h2 className="mt-3 mb-0">PERN Workouts</h2>
          <p className="mb-3">Personal Project</p>
        </div>
        <div className="project-content mb-3">
          <p>
            {"> "} A simple application that keeps track of your todo workouts
            built with PERN stack. Insipired by a tutorial by{" "}
            <a
              style={{ color: "#007bff" }}
              href="https://www.youtube.com/playlist?list=PL4cUxeGkcC9iJ_KkrkBZWZRHVwnzLIoUE"
              target="_blank"
            >
              NetNinja
            </a>{" "}
            but built with PERN stack with TypeScript and Postgres.
          </p>

          <p>
            {"> "} Tech Stack used: <b>Postgres/Supabase</b>, <b>Express JS</b>,{" "}
            <b>React/TypeScript</b>, <b>Node JS</b>, <b>React Context</b>,{" "}
            <b>JWT Auth</b>, <b>Vercel</b>.
          </p>
          <div className="mt-5 mb-4 text-end visit-website-block">
            <a
              className="btn-visit-website"
              href="https://github.com/2oofine/pern-workouts"
              target="_blank"
            >
              <FontAwesomeIcon icon={faGithub} /> Visit Repository
            </a>
          </div>
          <div className="text-end visit-website-block">
            <a
              className="btn-visit-website"
              href="https://pern-workouts.vercel.app/"
              target="_blank"
            >
              <FontAwesomeIcon icon={faGlobe} /> Visit Website
            </a>
          </div>
        </div>
      </Col>
    </div>
  );
};

export default PERNWorkouts;
