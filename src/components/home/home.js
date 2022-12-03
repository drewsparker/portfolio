import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeAvatar from "../../assets/home-ava.png";
import Tilt from "react-parallax-tilt";
import myImg from "../../assets/home-pg.png";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function home() {
  return (
    <section className="home-section">
      <Container fluid  id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                My name is
                <strong className="blue"> Drew Parker</strong>
              </h1>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeAvatar}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
    
        <Container fluid  id="about">
          <Container>
            <Row>
              <Col md={6} className="home-about-description">
                <h1 style={{ fontSize: "2.6em" }}>
                  ABOUT <b className="blue">ME</b>
                </h1>
                <p className="home-about-body">
                  I am an ambitious software engineer located in Austin, TX looking for opportunities!
                  <br />
                  <br />I am fluent in languages such as
                  <i>
                    <b className="blue"> CSS3, Javascript, Bootstrap, Express.js, React.js, Node.js and more! </b>
                  </i>
                  <br />
                  <br />
                  I have a deep passion for solving complex problems and creating sustainable solutions. 
                </p>
              </Col>
              <Col md={6} className="network">
                  <img src={myImg} className="img-fluid" alt="coding" /> 
              </Col>
            </Row>
            <Row>
              <Col md={12} className="home-about-social">
                <h1>FIND ME ON</h1>
                <p>
                  Connect with me!
                </p>
                <ul className="home-about-social-links">
                  <li className="social-icons">
                    <a
                      href="https://github.com/drewsparker"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://twitter.com/drewsparker"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                    >
                      <AiOutlineTwitter />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://www.linkedin.com/in/drew-parker-05740684/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://www.instagram.com/drewsparker"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                    >
                      <AiFillInstagram />
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </Container>
        </section>
  );
}

export default home;