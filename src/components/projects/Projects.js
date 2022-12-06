import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCards from "./ProjectCard";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="blue">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on or contributed to.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCards
            //   imgPath={chatify}
              title="noSQL Social Network"
              description="API for a social network web application where users can share their thoughts, react to friends' thoughts and create a friend list."
              ghLink="https://github.com/drewsparker/noSQL-SocialNetwork"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
            //   imgPath={bitsOfCode}
              title="Employee Tracker"
              description="This app will be a content management systems (CMS). Using a command-line application to manage a company's employee database, using Node.js, Inquirer, and MySQL."
              ghLink="https://github.com/drewsparker/EmployeeTracker"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
            //   imgPath={editor}
              title="Team Profile Generator"
              description="This app uses Node.js command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person."
              ghLink="https://github.com/drewsparker/teamProfileGenerator"            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
            //   imgPath={leaf}
              title="Note Taker App"
              description="This note taking app utilizes Express.js back end and will save and show a list of generated notes from a JSON file."
              ghLink="https://github.com/drewsparker/noteTakerApp"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
            //   imgPath={suicide}
              title="README Generator"
              description="This app will efficiently build a README file for a developer using command line prompts with inquirer. The README.md file is created in the directory"
              ghLink="https://github.com/drewsparker/readmeGenerator"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
            //   imgPath={emotion}
              title="RegEx Tutorial"
              description="Regex is a sequence of characters that maps to a specific search pattern. For instance, regex can be used to find certain patterns of characters and find and replace a character in a string."
              ghLink="https://gist.github.com/drewsparker/4271e5cce17934c5fbb016ae9f4122a5"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;