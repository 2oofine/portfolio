import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Carousel, Col } from "react-bootstrap";
import Easi1 from "../../../../assets/imgs/easi/1.jpg";
import Easi10 from "../../../../assets/imgs/easi/10.jpg";
import Easi2 from "../../../../assets/imgs/easi/2.jpg";
import Easi3 from "../../../../assets/imgs/easi/3.jpg";
import Easi4 from "../../../../assets/imgs/easi/4.jpg";
import Easi5 from "../../../../assets/imgs/easi/5.jpg";
import Easi6 from "../../../../assets/imgs/easi/6.jpg";
import Easi7 from "../../../../assets/imgs/easi/7.jpg";
import Easi8 from "../../../../assets/imgs/easi/8.jpg";
import Easi9 from "../../../../assets/imgs/easi/9.jpg";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const EASI = () => {
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
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                maxWidth: "40%",
                margin: "auto",
              }}
            >
              <img
                className="img-in-carousel d-block"
                src={Easi1}
                alt="Easi1"
                style={{
                  position: "relative",
                  left: "50%",
                  transform: "translateX(-50%)",
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                maxWidth: "40%",
                margin: "auto",
              }}
            >
              <img
                className="img-in-carousel d-block"
                src={Easi2}
                alt="Easi2"
                style={{
                  position: "relative",
                  left: "50%",
                  transform: "translateX(-50%)",
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                maxWidth: "40%",
                margin: "auto",
              }}
            >
              <img
                className="img-in-carousel d-block"
                src={Easi3}
                alt="Easi3"
                style={{
                  position: "relative",
                  left: "50%",
                  transform: "translateX(-50%)",
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                maxWidth: "40%",
                margin: "auto",
              }}
            >
              <img
                className="img-in-carousel d-block"
                src={Easi4}
                alt="Easi4"
                style={{
                  position: "relative",
                  left: "50%",
                  transform: "translateX(-50%)",
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                maxWidth: "40%",
                margin: "auto",
              }}
            >
              <img
                className="img-in-carousel d-block"
                src={Easi5}
                alt="Easi5"
                style={{
                  position: "relative",
                  left: "50%",
                  transform: "translateX(-50%)",
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                maxWidth: "40%",
                margin: "auto",
              }}
            >
              <img
                className="img-in-carousel d-block"
                src={Easi6}
                alt="Easi6"
                style={{
                  position: "relative",
                  left: "50%",
                  transform: "translateX(-50%)",
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                maxWidth: "40%",
                margin: "auto",
              }}
            >
              <img
                className="img-in-carousel d-block"
                src={Easi7}
                alt="Easi7"
                style={{
                  position: "relative",
                  left: "50%",
                  transform: "translateX(-50%)",
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                maxWidth: "40%",
                margin: "auto",
              }}
            >
              <img
                className="img-in-carousel d-block"
                src={Easi8}
                alt="Easi8"
                style={{
                  position: "relative",
                  left: "50%",
                  transform: "translateX(-50%)",
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                maxWidth: "40%",
                margin: "auto",
              }}
            >
              <img
                className="img-in-carousel d-block"
                src={Easi9}
                alt="Easi9"
                style={{
                  position: "relative",
                  left: "50%",
                  transform: "translateX(-50%)",
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                maxWidth: "40%",
                margin: "auto",
              }}
            >
              <img
                className="img-in-carousel d-block"
                src={Easi10}
                alt="Easi10"
                style={{
                  position: "relative",
                  left: "50%",
                  transform: "translateX(-50%)",
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </div>
          </Carousel.Item>
        </Carousel>
      </Col>
      <Col md={5}>
        <div className="project-title m-0">
          <h2 className="mt-3 mb-0">EASI - Easy Access Smart Inventory</h2>
          <p className="mb-3">Don Honorio Ventura State University</p>
        </div>
        <div className="project-content mb-3">
          <p>
            {"> "} I am the main developer of this thesis project during
            college.{" "}
            <b>
              It keeps track of your inventory and it acts as a POS system too.
            </b>
          </p>
          <p>
            {"> "} Features included: <b>Notifications</b>, <b>Google-SSO</b>,{" "}
            <b>Forecasting</b>, <b>POS</b>, <b>Barcode Scanning</b>, and{" "}
            <b>Generate Reports</b>.
          </p>
          <p>
            {"> "} Tech Stack used: <b>Flutter</b>, <b>Dart</b>, <b>Firebase</b>
            .
          </p>
          <p></p>
          <div className="mt-5 mb-4 text-end visit-website-block">
            <a
              className="btn-visit-website"
              href="https://github.com/winyann21/easi_app"
              target="_blank"
            >
              <FontAwesomeIcon icon={faGithub} /> Visit Repository
            </a>
          </div>
          <div className="text-end visit-website-block">
            <a
              className="btn-visit-website"
              href="https://drive.google.com/file/d/1sKXobrqjJB965Lkc1xrr-_aROrY8i4Nv/view?usp=sharing"
              target="_blank"
            >
              <FontAwesomeIcon icon={faDownload} /> Download APK
            </a>
          </div>
        </div>
      </Col>
    </div>
  );
};

export default EASI;
