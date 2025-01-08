import { faFileDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Container, Image } from "react-bootstrap";
import myImage from "../../../assets/imgs/me.png";
import myCV from "../../../assets/pdfs/CV_Sherwin_Romero.pdf";
import "./styles.scss";

const HeroSection = () => {
  return (
    <section id="about-me" className="hero-section pt-5 mb-5">
      <Container className="d-md-flex align-items-center">
        {/* CONTENT LEFT */}
        <Col md={6}>
          <div className="intro-block">
            <h1 className="intro">Hi! I'm Sherwin Romero 👋</h1>
            <p className="summary">
              An experienced software developer specializing in web development,
              where I've honed my skills through hands-on experience.
            </p>
          </div>

          <div className="download-cv-block mb-5">
            <a className="btn-download" href={myCV} target="_blank">
              Download CV <FontAwesomeIcon icon={faFileDownload} />
            </a>
          </div>
        </Col>

        {/* CONTENT RIGHT */}
        <Col md={6}>
          <div>
            <Image src={myImage} style={{ width: "100%" }} className="" />
          </div>
        </Col>
      </Container>
    </section>
  );
};

export default HeroSection;
