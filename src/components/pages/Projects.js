import React from 'react';
import { Card, CardColumns } from 'react-bootstrap';
import '../styles/Projects.css';
import linkedin from '../../images/linkedin-logo.png';
import github from '../../images/GitHub-logo.png';
import '../../components/styles/Responsive.css';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import * as Icon from "react-feather";


const images = [
    '//placekitten.com/1500/500',
    '//placekitten.com/4000/3000',
    '//placekitten.com/800/1200',
    '//placekitten.com/1500/1500',
];


class Projects extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            linkedin: linkedin,
            github: github,
            photoIndex: 0,
            isOpen: false,
        }
    }
    render() {
        const { photoIndex, isOpen } = this.state;

        return (
            <div className="body">
                <CardColumns>
                    <Card>
                        <Card.Img variant="top" src="https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                        <Card.Body>
                            <Card.Title>Card title that wraps to a new line</Card.Title>
                        </Card.Body>
                        <div class="brick-description">
                            <div className="social-links">
                                <div className="social">
                                    <a href="https://www.linkedin.com/in/edyta-szarowska/" target="_blank" rel="noopener noreferrer">
                                        <img className="linkedin" src={this.state.linkedin} alt="Linkedin Logo" />
                                    </a>
                                </div>
                                <div className="social">
                                    <a href="https://github.com/Edyta2801" target="_blank" rel="noopener noreferrer">
                                        <img className="github" src={this.state.github} alt="GitHub Logo" />
                                    </a>
                                </div>
                                <div>
                                    <button type="button" onClick={() => this.setState({ isOpen: true })}>
                                       <Icon.ZoomIn/></button>

                                    {isOpen && (
                                        <Lightbox
                                            mainSrc={images[photoIndex]}
                                            nextSrc={images[(photoIndex + 1) % images.length]}
                                            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                                            onCloseRequest={() => this.setState({ isOpen: false })}
                                            onMovePrevRequest={() =>
                                                this.setState({
                                                    photoIndex: (photoIndex + images.length - 1) % images.length,
                                                })
                                            }
                                            onMoveNextRequest={() =>
                                                this.setState({
                                                    photoIndex: (photoIndex + 1) % images.length,
                                                })
                                            }
                                        />
                                    )}
                                </div>
                            </div>
                        </div>

                    </Card>
                    <Card>
                        <div>
                            <button type="button" onClick={() => this.setState({ isOpen: true })}>
                                Open Lightbox
        </button>

                            {isOpen && (
                                <Lightbox
                                    mainSrc={images[photoIndex]}
                                    nextSrc={images[(photoIndex + 1) % images.length]}
                                    prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                                    onCloseRequest={() => this.setState({ isOpen: false })}
                                    onMovePrevRequest={() =>
                                        this.setState({
                                            photoIndex: (photoIndex + images.length - 1) % images.length,
                                        })
                                    }
                                    onMoveNextRequest={() =>
                                        this.setState({
                                            photoIndex: (photoIndex + 1) % images.length,
                                        })
                                    }
                                />
                            )}
                        </div>
                        <Card.Img variant="top" src="https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                        <Card.Body>
                            <Card.Title>Card title that wraps to a new line</Card.Title>
                            <Card.Text>

                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                        <Card.Body>
                            <Card.Title>Card title that wraps to a new line</Card.Title>
                            <Card.Text>

                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>

                        <Card.Body>
                            <Card.Title>Card title that wraps to a new line</Card.Title>
                            <Card.Text>

                            </Card.Text>
                        </Card.Body>
                        <Card.Img variant="top" src="https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                    </Card>
                    <Card>

                        <Card.Body>
                            <Card.Title>Card title that wraps to a new line</Card.Title>
                            <Card.Text>

                            </Card.Text>
                        </Card.Body>
                        <Card.Img variant="top" src="https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                    </Card>
                    <Card>

                        <Card.Body>
                            <Card.Title>Card title that wraps to a new line</Card.Title>
                            <Card.Text>

                            </Card.Text>
                        </Card.Body>
                        <Card.Img variant="top" src="https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                        <Card.Body>
                            <Card.Title>Card title that wraps to a new line</Card.Title>
                            <Card.Text>

                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                        <Card.Body>
                            <Card.Title>Card title that wraps to a new line</Card.Title>
                            <Card.Text>

                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                        <Card.Body>
                            <Card.Title>Card title that wraps to a new line</Card.Title>
                            <Card.Text>

                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardColumns>
            </div>
        );
    }
}

export default Projects;