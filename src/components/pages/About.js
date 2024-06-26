import React, { Component } from "react";
import "../styles/App-style.css";
import "../styles/Responsive.css";
import profile from "../../images/foto.jpg";
import { Row, Col, Container, Figure } from "react-bootstrap";

class About extends Component {
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
                <h2>Hi, I'm Edyta</h2>
                <hr />
                <span className="about-title">
                  {" "}
                  <h6>I'm coding enthusiast :)</h6>
                  My motto is 
                  <br/><b>"If you just try, you will find out that you can."</b>
                </span>
                <br />
                <br />
              </Col>
              <Col xs={12} md={6} className="about-figure">
                <Figure>
                  <Figure.Image
                    width={200}
                    alt="profile"
                    src={profile}
                    roundedCircle
                  />
                </Figure>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    );
  }
}

export default About;
