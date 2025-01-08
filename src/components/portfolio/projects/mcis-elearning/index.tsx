import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Carousel, Col } from "react-bootstrap";
import MCISEL1 from "../../../../assets/imgs/mcis-elearning/1.jpg";
import MCISEL2 from "../../../../assets/imgs/mcis-elearning/2.jpg";
import MCISEL3 from "../../../../assets/imgs/mcis-elearning/3.jpg";
import MCISEL4 from "../../../../assets/imgs/mcis-elearning/4.jpg";
import MCISEL5 from "../../../../assets/imgs/mcis-elearning/5.jpg";
import MCISEL6 from "../../../../assets/imgs/mcis-elearning/6.jpg";

const MCISELearning = () => {
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
              src={MCISEL1}
              alt="MCISEL1"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="img-in-carousel d-block w-100"
              src={MCISEL2}
              alt="MCISEL2"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="img-in-carousel d-block w-100"
              src={MCISEL3}
              alt="MCISEL3"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="img-in-carousel d-block w-100"
              src={MCISEL4}
              alt="MCISEL4"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="img-in-carousel d-block w-100"
              src={MCISEL5}
              alt="MCISEL5"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="img-in-carousel d-block w-100"
              src={MCISEL6}
              alt="MCISEL6"
            />
          </Carousel.Item>
        </Carousel>
      </Col>
      <Col md={5}>
        <div className="project-title m-0">
          <h2 className="mt-3 mb-0">MCIS ELearning</h2>
          <p className="mb-3">Three Enix Consulting Sdn Bhd</p>
        </div>
        <div className="project-content mb-3">
          <p>
            {"> "} I am one of the developers of this project. MCIS eLearning
            system is to facilitate the management, delivery, and tracking of
            training programs including attendance and Training room booking. It
            serves as a centralized hub for organizing and administering
            learning materials, training programs, assessments, and
            communication.
          </p>
          <p>
            {"> "} Developed Frontend UIs: <b>Login/Register</b>, <b>Courses</b>
            , <b>Catalog</b>, <b>Lectures Management</b>, <b>Edit Profile</b>.
          </p>

          <p>
            {"> "} Tech Stack used: <b>Java</b>, <b>Apache Velocity</b>,{" "}
            <b>MSSQL</b>, <b>HTML</b>, <b>CSS/SASS</b>, <b>JavaScript</b>.
          </p>
          <div className="mt-5 text-end visit-website-block">
            <a
              className="btn-visit-website"
              href="https://lms-uat.mcis.my/dmz/"
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

export default MCISELearning;
