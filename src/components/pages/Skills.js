import React, { Component } from "react";
import "../styles/App-style.css";
import "../styles/Responsive.css";
import "../styles/Skills.css";
import { Row, Col, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faSass,
  faBootstrap,
  faJs,
  faReact,
  faGitAlt,
  faNpm,
  faJira,
  faSlack,
} from "@fortawesome/free-brands-svg-icons";

import Node from "../../images/skills/node.svg.png";
import TypeScript from "../../images/skills/ts.webp";
import Next from "../../images/skills/nextjs.webp";
import Nx from "../../images/skills/nx.webp";
import Nest from "../../images/skills/nestjs.webp";
import Make from "../../images/skills/make.webp";
import RestApi from "../../images/skills/rest-api-icon.svg";
import Storybook from "../../images/skills/storybook.svg";



class Skills extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="body skills">
        <Row xs={1} md={2} className="card-deck">
          <Card>
            <Card.Body>
              <Card.Title className='title-skills'>Web Development</Card.Title>
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
              <Card.Title className='title-skills'>Front-End Tools</Card.Title>
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
                  <img
                      className="skills_icon-rest"
                      src={RestApi}
                      alt="RestApi"
                    />
                    <span className="skills_lang">Rest API</span>
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
                  <img
                      className="skills_icon-storybook"
                      src={Storybook}
                      alt="Storybook"
                    />
                    <span className="skills_lang">Storybook</span>
                  </Col>
                </Row>
              </Card.Text>
            </Card.Body>
            <div className="transparent-box two"></div>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title className='title-skills'>Learning Now</Card.Title>
              <Card.Text>
                <Row>
                  <Col md={4} xs={6}>
                    <img
                      className="skills_icon-node"
                      src={Node}
                      alt="Logo of Node.js"
                    />
                    {/* <FontAwesomeIcon icon={faNode} className="skills_icon" /> */}
                    <span className="skills_lang">Node.js</span>
                  </Col>
                  <Col md={4} xs={6}>
                    <img
                      className="skills_icon"
                      src={Next}
                      alt="Next.js"
                    />
                    {/* <FontAwesomeIcon icon={faEnvira} className="skills_icon" /> */}
                    <span className="skills_lang">Next.js</span>
                  </Col>
                  <Col md={4} xs={12}>
                    <img
                      className="skills_icon-nx"
                      src={Nx}
                      alt="Nx"
                    />
                    {/* <FontAwesomeIcon icon={faEnvira} className="skills_icon" /> */}
                    <span className="skills_lang">Nx</span>
                  </Col>
                </Row>
                <Row>
                  <Col md={4} xs={6}>
                    <img
                      className="skills_icon"
                      src={TypeScript}
                      alt="TypeScript"
                    />
                    {/* <FontAwesomeIcon icon={faEnvira} className="skills_icon" /> */}
                    <span className="skills_lang">TypeScript</span>
                  </Col>
                  <Col md={4} xs={6}>
                    <img
                      className="skills_icon"
                      src={Nest}
                      alt="Nest.js"
                    />
                    <span className="skills_lang">Nest.js</span>
                  </Col>
                  <Col md={4} xs={12}>
                    <img className="skills_icon-make" src={Make} alt="Make" />
                    {/* <FontAwesomeIcon icon={faEnvira} className="skills_icon" /> */}
                    <span className="skills_lang">Make</span>
                  </Col>
                </Row>
              </Card.Text>
            </Card.Body>
            <div className="transparent-box three"></div>
          </Card>
        </Row>
      </div>
    );
  }
}

export default Skills;
