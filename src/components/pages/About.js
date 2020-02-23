import React from 'react';
import '../styles/App-style.css';
import '../styles/Responsive.css';
// import "../styles/Skills.scss";
//bootstrap
import { Row, Col } from "react-bootstrap";
//fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLayerGroup,
    faDatabase,
    faUsers
} from "@fortawesome/free-solid-svg-icons";
import {
    faHtml5,
    faCss3Alt,
    faSass,
    faBootstrap,
    faJs,
    faReact,
    faNode,
    faEnvira,
    faGitAlt,
    faNpm,
    faYarn,
    faJira,
    faSlack,
    faAdobe,
    faPhp
} from "@fortawesome/free-brands-svg-icons";


const About = () => {
    return (
        <section className="skills">
            <Row>
                <Col md={4}>
                    <FontAwesomeIcon icon={faHtml5} className="skills_icon" />
                    <span className="skills_lang">HTML</span>
                </Col>
                <Col md={4}>
                    <FontAwesomeIcon icon={faCss3Alt} className="skills_icon" />
                    <span className="skills_lang">CSS</span>
                </Col>
                <Col md={4}>
                    <FontAwesomeIcon icon={faSass} className="skills_icon" />
                    <span className="skills_lang">Sass</span>
                </Col>
            </Row>
            <Row>
                <Col md={4}>
                    <FontAwesomeIcon icon={faBootstrap} className="skills_icon" />
                    <span className="skills_lang">Bootstrap</span>
                </Col>
                <Col md={4}>
                    <FontAwesomeIcon icon={faJs} className="skills_icon" />
                    <span className="skills_lang">JavaScript</span>
                </Col>
                <Col md={4}>
                    <FontAwesomeIcon icon={faReact} className="skills_icon" />
                    <span className="skills_lang">React + Redux</span>
                </Col>
            </Row>

            <span className="skills_title">Back-end</span>
            <div className="skills_stack">
                <Row>
                    <Col md={4}>
                        <FontAwesomeIcon icon={faNode} className="skills_icon" />
                        <span className="skills_lang">Node.js - Express</span>
                    </Col>
                    <Col md={4}>
                        <FontAwesomeIcon icon={faEnvira} className="skills_icon" />
                        <span className="skills_lang">MongoDB</span>
                    </Col>
                    <Col md={4}>
                        <FontAwesomeIcon icon={faLayerGroup} className="skills_icon" />
                        <span className="skills_lang">Stack MERN</span>
                    </Col>
                </Row>
            </div>
            <span className="skills_title">Narzędzia i inne</span>
            <div className="skills_stack">
                <Row>
                    <Col md={4}>
                        <FontAwesomeIcon icon={faGitAlt} className="skills_icon" />
                        <span className="skills_lang">Git</span>
                    </Col>
                    <Col md={4}>
                        <FontAwesomeIcon icon={faNpm} className="skills_icon" />
                        <span className="skills_lang">npm</span>
                    </Col>
                    <Col md={4}>
                        <FontAwesomeIcon icon={faYarn} className="skills_icon" />
                        <span className="skills_lang">Yarn</span>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <FontAwesomeIcon icon={faJira} className="skills_icon" />
                        <span className="skills_lang">Jira</span>
                    </Col>
                    <Col md={4}>
                        <FontAwesomeIcon icon={faSlack} className="skills_icon" />
                        <span className="skills_lang">Slack</span>
                    </Col>
                    <Col md={4}>
                        <FontAwesomeIcon icon={faAdobe} className="skills_icon" />
                        <span className="skills_lang">Photoshop, Illustrator</span>
                    </Col>
                </Row>
            </div>
            <span className="skills_title">Aktualnie uczę się</span>
            <div className="skills_stack">
                <Row>
                    <Col md={4}>
                        <FontAwesomeIcon icon={faPhp} className="skills_icon" />
                        <span className="skills_lang">PHP</span>
                    </Col>
                    <Col md={4}>
                        <FontAwesomeIcon icon={faDatabase} className="skills_icon" />
                        <span className="skills_lang">MySQL</span>
                    </Col>
                    <Col md={4}>
                        <FontAwesomeIcon icon={faUsers} className="skills_icon" />
                        <span className="skills_lang">Scrum</span>
                    </Col>
                </Row>
            </div>
        </section>
    );
};

export default About;
