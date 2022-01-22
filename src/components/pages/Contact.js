import React, { Component } from "react";
import "../styles/App-style.css";
import "../styles/Responsive.css";
import resume from "./CV_Edyta Szarowska.pdf";
import { Row, Col, Container } from "react-bootstrap";

class Contact extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="body">
        <section className="about">
          <Container>
            <Row>
              <Col xs={12} md={6} className="title">
                <span className="about-title">
                  {" "}
                  Feel free to contact me for any inquiries about my portfolio
                  and work opportunities!
                </span>
                <br />
                <br />
              </Col>
              <Col xs={12} md={6}>
                <div className="about-resume">
                  <a href={resume} download className="about-download-button">
                    DOWNLOAD CV
                  </a>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    );
  }
}

export default Contact;
