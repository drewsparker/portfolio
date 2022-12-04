
import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "left" }}>
            Hi Everyone, I am <span className="blue">Drew Parker </span>
            from <span className="blue"> Austin, Texas.</span>
            <br />
            <br />
            I am a graduate of UT Austin Full Stack Coding Bootcamp and have a BBA from Texas A&M.
            <br />
            <br />
            Other than coding, some other activities that I love to do:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Wakesurfing on Lake Travis
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling as often as possible
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing with my 2 dogs
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;