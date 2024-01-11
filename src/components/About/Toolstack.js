import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiLinux,
  SiGithub,
  SiGimp,
  SiEagle,
  SiArduino,
  SiBlender,
  SiWireshark,
  SiStmicroelectronics,
  SiSpotify,
  SiAltiumdesigner,
  SiDiscord,
  SiTorbrowser,
  SiAnaconda,
  SiSiemens,
  SiKalilinux,
  SiApple,
  SiArm,
  SiGnome,
  SiNginx,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGimp />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiEagle />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiArduino />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBlender/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWireshark/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiStmicroelectronics/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSpotify/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAltiumdesigner/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDiscord/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTorbrowser/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAnaconda/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSiemens/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKalilinux/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiApple/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiArm/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGnome/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNginx/>
      </Col>
    </Row>
  );
}

export default Toolstack;
