import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import fpvquad from "../../Assets/Projects/fpvquad.png";
import sdr from "../../Assets/Projects/sdr.png";
import ccdsensor from "../../Assets/Projects/ccdsensor.png";
import clock from   "../../Assets/Projects/clock.png";
import eminem from  "../../Assets/Projects/eminem.png";
import zmpt101 from "../../Assets/Projects/zmpt101.png";
import cat9ecu from "../../Assets/Projects/cat9ecu.png";
import espdauther from "../../Assets/Projects/espdeauth.png";
import geigercounter from "../../Assets/Projects/geigercounter.png";
import weatherstatino from "../../Assets/Projects/weatherstation.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fpvquad}
              title="Fpv Quadcopter"
              description="FPV quad refers to a First Person View (FPV) quadcopter or drone. It is a remote-controlled aircraft equipped with a camera that streams live video footage to a wearable display or goggles worn by the pilot. "
              ghLink="https://github.com/404"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sdr}
              title="SDR"
              description="SDR stands for Software-Defined Radio. It refers to a radio communication system where traditional hardware components, such as mixers, filters, and amplifiers, are replaced or augmented with software algorithms running on a computer or a dedicated processor. "
              ghLink="https://github.com/404"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ccdsensor}
              isBlog={false}
              title="CCD driver"
              description="A CCD sensor driver is a component that controls and operates a Charge-Coupled Device (CCD) sensor. A CCD sensor is an image sensor technology used in digital cameras, scanners, and other imaging devices."
              ghLink="https://github.com/404"            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={clock}
              isBlog={false}
              title="Simple Web Clock"
              description="Simple clock designed using Html,Css and Js."
              ghLink="https://github.com/RefreshMyMind-I/clock.github.io"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eminem}
              isBlog={false}
              title="Fan Site"
              description="A fan site for Eminem using Html,Css and Js."
              ghLink="https://github.com/RefreshMyMind-I/Eminem"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={zmpt101}
              isBlog={false}
              title="Zmpt101_Library"
              description="he ZMPT101 library refers to a software library or code package designed to interface with the ZMPT101 voltage sensor module. The ZMPT101 is an AC voltage sensor module commonly used for measuring alternating current (AC) voltages in electronic projects."
              ghLink="https://github.com/RefreshMyMind-I/ZMPT101B"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cat9ecu}
              isBlog={false}
              title="CAT9 ECU Decoder"
              description="This project Decoder data from c9 engine Ecu and dislay it on HMI."
              ghLink="https://github.com/RefreshMyMind-I/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={espdauther}
              isBlog={false}
              title="ESP826 Deauther"
              description="This Project Mainly Focus on Deauthing Wifi Networks using ESP8266."
              ghLink="https://github.com/RefreshMyMind-I/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={geigercounter}
              isBlog={false}
              title="Geiger Counter"
              description="Insted of using Mullers tube this project uses PIN diode to detect radiation."
              ghLink="https://github.com/RefreshMyMind-I/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weatherstatino}
              isBlog={false}
              title="Weather Station With ESP32-S3"
              description="This project collect various Environmental parameters and send it to cloud, It has it's coustom pcb design which is easy to implement."
              ghLink="https://github.com/RefreshMyMind-I/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
