import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
  DiGit,
  DiJava,
  DiCss3,
  DiHtml5,
  DiLinux,
  DiRasberryPi,
  DiPhotoshop,
  DiTerminal,
  DiVim,
  DiUbuntu,
  DiDebian,
  DiDocker,
  DiWindows,
} from "react-icons/di";


function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiRasberryPi />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiPhotoshop />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiTerminal />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiVim />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiUbuntu />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDebian />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDocker />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiWindows />
      </Col>
    </Row>
  );
}

export default Techstack;
