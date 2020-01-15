import React from 'react';
import { Card, CardColumns } from 'react-bootstrap';
import '../styles/Projects.css';
import linkedin from '../../images/linkedin-logo.png';
import github from '../../images/GitHub-logo.png';
import '../../components/styles/Responsive.css';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import { ZoomIn, Link } from 'react-feather';

const images= [
    '//placekitten.com/1500/500',
    '//placekitten.com/4000/3000',
    '//placekitten.com/800/1200',
    '//placekitten.com/1500/1500',
];
const images1= [
    '//placekitten.com/1500/500',
    '//placekitten.com/4000/3000',
    '//placekitten.com/800/1200',
    '//placekitten.com/1500/1500',
]




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
                        <div class="icon-description">
                            <div className="social-icons">
                                <div className="icon">
                                    <a href="https://www.linkedin.com/in/edyta-szarowska/" target="_blank" rel="noopener noreferrer">
                                        <Link />
                                    </a>
                                </div>
                                <div className="icon">
                                    <button type="button" onClick={() => this.setState({ isOpen: true })}>
                                        <ZoomIn /></button>

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
                        <Card.Img variant="top" src="https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                        <Card.Body>
                        <div class="icon-description">
                            <div className="social-icons">
                                <div className="icon">
                                    <a href="https://www.linkedin.com/in/edyta-szarowska/" target="_blank" rel="noopener noreferrer">
                                        <Link />
                                    </a>
                                </div>
                                <div className="icon">
                                    <button type="button" onClick={() => this.setState({ isOpen: true })}>
                                        <ZoomIn /></button>

                                    {isOpen && (
                                        <Lightbox 
                                            mainSrc={images1[photoIndex]}
                                    nextSrc={images1[(photoIndex + 1) % images1.length]}
                                    prevSrc={images1[(photoIndex + images1.length - 1) % images1.length]}
                                    onCloseRequest={() => this.setState({ isOpen: false })}
                                    onMovePrevRequest={() =>
                                        this.setState({
                                            photoIndex: (photoIndex + images1.length - 1) % images1.length,
                                        })
                                    }
                                    onMoveNextRequest={() =>
                                        this.setState({
                                            photoIndex: (photoIndex + 1) % images1.length,
                                        })
                                    }
                                    />
                                )}
                                </div>
                            </div>
                        </div>
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