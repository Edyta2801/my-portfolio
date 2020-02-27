import React, { Component } from 'react';
import '../styles/App-style.css';
import '../styles/Responsive.css';
import profile from '../../images/foto.jpg';
import resume from './CV.pdf';
import { Row, Col, Container, Image, } from 'react-bootstrap';


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
                            <Col xs={6} md={6}>
                                <Image src={profile} roundedCircle />
                            </Col>
                            <Col xs={12} md={6} className='title'>
                                <span className="about-title"> Feel free to contact me for any inquiries about my portfolio and work opportunities!</span><br /><br />
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={12} >
                                <div className="about-resume">
                                    <a href={resume} download className="about-download-button">DOWNLOAD CV</a>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </div >
        );
    }
}

export default Contact;