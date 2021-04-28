import React, { Component } from "react";
import "../styles/App-style.css";
import "../styles/Responsive.css";
import "../styles/Skills.css";
//bootstrap
import { Row, Col, Card, CardDeck } from "react-bootstrap";
//fontawesome
// import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import {
  faHtml5,
  faCss3Alt,
  faSass,
  faBootstrap,
  faJs,
  faReact,
  faGitAlt,
  faNpm,
  faYarn,
  faJira,
  faSlack,
} from "@fortawesome/free-brands-svg-icons";

import Chakra from "../../images/skills/logo-black.svg";
import Cypress from "../../images/skills/cypress-logo.webp";
import Jwt from "../../images/skills/jwt_logo.svg";
import Msw from "../../images/skills/msw-logo.svg";
import Storybook from "../../images/skills/storybook.svg";
import Swagger from "../../images/skills/swagger_logo.svg";

class Skills extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="body skills">
        <CardDeck>
          <Card>
            <Card.Body>
              <Card.Title>Web Development</Card.Title>
              <Card.Text>
                <Row>
                  <Col md={4} xs={6}>
                    <FontAwesomeIcon icon={faHtml5} className="skills_icon" />
                    <span className="skills_lang">HTML</span>
                  </Col>
                  <Col md={4} xs={6}>
                    <FontAwesomeIcon icon={faCss3Alt} className="skills_icon" />
                    <span className="skills_lang">CSS</span>
                  </Col>
                  <Col md={4} xs={12}>
                    <FontAwesomeIcon icon={faSass} className="skills_icon" />
                    <span className="skills_lang">Sass</span>
                  </Col>
                </Row>
                <Row>
                  <Col md={4} xs={6}>
                    <FontAwesomeIcon
                      icon={faBootstrap}
                      className="skills_icon"
                    />
                    <span className="skills_lang">Bootstrap</span>
                  </Col>
                  <Col md={4} xs={6}>
                    <FontAwesomeIcon icon={faJs} className="skills_icon" />
                    <span className="skills_lang">JavaScript</span>
                  </Col>
                  <Col md={4} xs={12}>
                    <FontAwesomeIcon icon={faReact} className="skills_icon" />
                    <span className="skills_lang">React + Redux</span>
                  </Col>
                </Row>
              </Card.Text>
            </Card.Body>
            <div className="transparent-box one"></div>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>Front-End Tools</Card.Title>
              <Card.Text>
                <Row>
                  <Col md={4} xs={6}>
                    <FontAwesomeIcon icon={faGitAlt} className="skills_icon" />
                    <span className="skills_lang">Git</span>
                  </Col>
                  <Col md={4} xs={6}>
                    <FontAwesomeIcon icon={faNpm} className="skills_icon" />
                    <span className="skills_lang">npm</span>
                  </Col>
                  <Col md={4} xs={12}>
                    <FontAwesomeIcon icon={faYarn} className="skills_icon" />
                    <span className="skills_lang">Yarn</span>
                  </Col>
                </Row>
                <Row>
                  <Col md={4} xs={6}>
                    <FontAwesomeIcon icon={faJira} className="skills_icon" />
                    <span className="skills_lang">Jira</span>
                  </Col>
                  <Col md={4} xs={6}>
                    <FontAwesomeIcon icon={faSlack} className="skills_icon" />
                    <span className="skills_lang">Slack</span>
                  </Col>
                  <Col md={4} xs={12}>
                    <FontAwesomeIcon icon={faUsers} className="skills_icon" />
                    <span className="skills_lang">Scrum</span>
                  </Col>
                </Row>
              </Card.Text>
            </Card.Body>
            <div className="transparent-box two"></div>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>Learning Now</Card.Title>
              <Card.Text>
                <Row>
                  <Col md={4} xs={6}>
                    <img
                      className="skills_icon"
                      src={Chakra}
                      alt="Logo of Chakra-ui"
                    />
                    {/* <FontAwesomeIcon icon={faNode} className="skills_icon" /> */}
                    <span className="skills_lang">Chakra Ui</span>
                  </Col>
                  <Col md={4} xs={6}>
                    <img
                      className="skills_icon"
                      src={Jwt}
                      alt="Jason Web Token"
                    />
                    {/* <FontAwesomeIcon icon={faEnvira} className="skills_icon" /> */}
                    <span className="skills_lang">JWT</span>
                  </Col>
                  <Col md={4} xs={12}>
                    <img
                      className="skills_icon"
                      src={Storybook}
                      alt="Storybook"
                    />
                    {/* <FontAwesomeIcon icon={faEnvira} className="skills_icon" /> */}
                    <span className="skills_lang">Storybook</span>
                  </Col>
                </Row>
                <Row>
                  <Col md={4} xs={6}>
                    <img
                      className="skills_icon_cypress"
                      src={Cypress}
                      alt="Cypress"
                    />
                    {/* <FontAwesomeIcon icon={faEnvira} className="skills_icon" /> */}
                    <span className="skills_lang">Cypress</span>
                  </Col>
                  <Col md={4} xs={6}>
                    <img
                      className="skills_icon"
                      src={Msw}
                      alt="Mock Service Worker"
                    />
                    <span className="skills_lang">MSW</span>
                  </Col>
                  <Col md={4} xs={12}>
                    <img className="skills_icon" src={Swagger} alt="Swagger" />
                    {/* <FontAwesomeIcon icon={faEnvira} className="skills_icon" /> */}
                    <span className="skills_lang">Swagger</span>
                  </Col>
                </Row>
              </Card.Text>
            </Card.Body>
            <div className="transparent-box three"></div>
          </Card>
        </CardDeck>
      </div>
    );
  }
}

export default Skills;
