import React, { Component } from 'react';
import '../styles/App-style.css';
import '../styles/Responsive.css';
// import "../styles/Skills.scss";
//bootstrap
import { Row, Col, Card, CardDeck } from "react-bootstrap";
//fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLayerGroup,
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

} from "@fortawesome/free-brands-svg-icons";


class About extends Component {


    componentDidMount() {
        window.scrollTo(0, 0);
    }


    render() {
        return (
            <div className="body skills">
                <CardDeck>
                    <Card>
                        <Card.Body>
                            <Card.Title>Web Development
                        </Card.Title>
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
                                        <FontAwesomeIcon icon={faBootstrap} className="skills_icon" />
                                        <span className="skills_lang">Bootstrap</span>
                                    </Col>
                                    <Col md={4}xs={6}>
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
                                        <FontAwesomeIcon icon={faNode} className="skills_icon" />
                                        <span className="skills_lang">Node.js - Express</span>
                                    </Col>
                                    <Col md={4} xs={6}>
                                        <FontAwesomeIcon icon={faEnvira} className="skills_icon" />
                                        <span className="skills_lang">MongoDB</span>
                                    </Col>
                                    <Col md={4} xs={12}>
                                        <FontAwesomeIcon icon={faLayerGroup} className="skills_icon" />
                                        <span className="skills_lang">Stack MERN</span>
                                    </Col>
                                </Row>
                            </Card.Text>
                        </Card.Body>
                        <div className="transparent-box three"></div>
                    </Card>
                </CardDeck>
            </div>
        );
    };
};

export default About;
