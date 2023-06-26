import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Greatings! I'm  <span className="purple">Kirtiraj Sardesai </span>an enthusiastic and driven individual currently pursuing a B.Tech degree in Electronic Engineering at <span className="purple">Sanjay Ghodawat University.</span>
            <br /> with a specific focus on electronic circuit design and embedded development. I am fascinated by the potential of these fields to innovate and create impactful solutions.
            <br />
            The intricate world of electronic circuit design and embedded development ignites my passion for exploring complex problems and creating efficient solutions. I am deeply interested in utilizing my skills in data-driven problem-solving to uncover patterns and develop intelligent algorithms for enhanced decision-making.
            <br />
            <br />
            Apart from coding/electronic, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Astrophotography 
            </li>
            <li className="about-activity">
              <ImPointRight /> Fpv Racing
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
