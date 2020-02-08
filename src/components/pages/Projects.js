import React from 'react';
import { Card, CardColumns } from 'react-bootstrap';
import '../styles/Projects.css';
import linkedin from '../../images/linkedin-logo.png';
import github from '../../images/GitHub-logo.png';
import '../../components/styles/Responsive.css';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import { ZoomIn, Link } from 'react-feather';

const images = [
    '//placekitten.com/1500/500',
    '//placekitten.com/4000/3000',
    '//placekitten.com/800/1200',
    '//placekitten.com/1500/1500',
];
const images1 = [
    '//placekitten.com/1500/500',
    '//placekitten.com/4000/3000',
    '//placekitten.com/800/1200',
    '//placekitten.com/1500/1500',
];
const images2 = [
    '//placekitten.com/1500/500',
    '//placekitten.com/4000/3000',
    '//placekitten.com/800/1200',
    '//placekitten.com/1500/1500',
]
const images3 = [
    '//placekitten.com/1500/500',
    '//placekitten.com/4000/3000',
    '//placekitten.com/800/1200',
    '//placekitten.com/1500/1500',
]
const images4 = [
    '//placekitten.com/1500/500',
    '//placekitten.com/4000/3000',
    '//placekitten.com/800/1200',
    '//placekitten.com/1500/1500',
]
const images5 = [
    '//placekitten.com/1500/500',
    '//placekitten.com/4000/3000',
    '//placekitten.com/800/1200',
    '//placekitten.com/1500/1500',
];
const images6 = [
    '//placekitten.com/1500/500',
    '//placekitten.com/4000/3000',
    '//placekitten.com/800/1200',
    '//placekitten.com/1500/1500',
];
const images7 = [
    '//placekitten.com/1500/500',
    '//placekitten.com/4000/3000',
    '//placekitten.com/800/1200',
    '//placekitten.com/1500/1500',
];
const images8 = [
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
                        <div className='wholeCard'>
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
                                                mainSrc={images2[photoIndex]}
                                                nextSrc={images2[(photoIndex + 1) % images2.length]}
                                                prevSrc={images2[(photoIndex + images2.length - 1) % images2.length]}
                                                onCloseRequest={() => this.setState({ isOpen: false })}
                                                onMovePrevRequest={() =>
                                                    this.setState({
                                                        photoIndex: (photoIndex + images2.length - 1) % images2.length,
                                                    })
                                                }
                                                onMoveNextRequest={() =>
                                                    this.setState({
                                                        photoIndex: (photoIndex + 1) % images2.length,
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
                                                mainSrc={images3[photoIndex]}
                                                nextSrc={images3[(photoIndex + 1) % images3.length]}
                                                prevSrc={images3[(photoIndex + images3.length - 1) % images3.length]}
                                                onCloseRequest={() => this.setState({ isOpen: false })}
                                                onMovePrevRequest={() =>
                                                    this.setState({
                                                        photoIndex: (photoIndex + images3.length - 1) % images3.length,
                                                    })
                                                }
                                                onMoveNextRequest={() =>
                                                    this.setState({
                                                        photoIndex: (photoIndex + 1) % images3.length,
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
                        <Card.Img variant="top" src="https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                    </Card>
                    <Card>

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
                                                mainSrc={images4[photoIndex]}
                                                nextSrc={images4[(photoIndex + 1) % images4.length]}
                                                prevSrc={images4[(photoIndex + images4.length - 1) % images4.length]}
                                                onCloseRequest={() => this.setState({ isOpen: false })}
                                                onMovePrevRequest={() =>
                                                    this.setState({
                                                        photoIndex: (photoIndex + images4.length - 1) % images4.length,
                                                    })
                                                }
                                                onMoveNextRequest={() =>
                                                    this.setState({
                                                        photoIndex: (photoIndex + 1) % images4.length,
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
                        <Card.Img variant="top" src="https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                    </Card>
                    <Card>

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
                                                mainSrc={images5[photoIndex]}
                                                nextSrc={images5[(photoIndex + 1) % images5.length]}
                                                prevSrc={images5[(photoIndex + images5.length - 1) % images5.length]}
                                                onCloseRequest={() => this.setState({ isOpen: false })}
                                                onMovePrevRequest={() =>
                                                    this.setState({
                                                        photoIndex: (photoIndex + images5.length - 1) % images5.length,
                                                    })
                                                }
                                                onMoveNextRequest={() =>
                                                    this.setState({
                                                        photoIndex: (photoIndex + 1) % images5.length,
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
                        <Card.Img variant="top" src="https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
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
                                                mainSrc={images6[photoIndex]}
                                                nextSrc={images6[(photoIndex + 1) % images6.length]}
                                                prevSrc={images6[(photoIndex + images6.length - 1) % images6.length]}
                                                onCloseRequest={() => this.setState({ isOpen: false })}
                                                onMovePrevRequest={() =>
                                                    this.setState({
                                                        photoIndex: (photoIndex + images6.length - 1) % images6.length,
                                                    })
                                                }
                                                onMoveNextRequest={() =>
                                                    this.setState({
                                                        photoIndex: (photoIndex + 1) % images6.length,
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
                                                mainSrc={images7[photoIndex]}
                                                nextSrc={images7[(photoIndex + 1) % images7.length]}
                                                prevSrc={images7[(photoIndex + images7.length - 1) % images7.length]}
                                                onCloseRequest={() => this.setState({ isOpen: false })}
                                                onMovePrevRequest={() =>
                                                    this.setState({
                                                        photoIndex: (photoIndex + images7.length - 1) % images7.length,
                                                    })
                                                }
                                                onMoveNextRequest={() =>
                                                    this.setState({
                                                        photoIndex: (photoIndex + 1) % images7.length,
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
                                                mainSrc={images8[photoIndex]}
                                                nextSrc={images8[(photoIndex + 1) % images8.length]}
                                                prevSrc={images8[(photoIndex + images8.length - 1) % images8.length]}
                                                onCloseRequest={() => this.setState({ isOpen: false })}
                                                onMovePrevRequest={() =>
                                                    this.setState({
                                                        photoIndex: (photoIndex + images8.length - 1) % images8.length,
                                                    })
                                                }
                                                onMoveNextRequest={() =>
                                                    this.setState({
                                                        photoIndex: (photoIndex + 1) % images8.length,
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
                </CardColumns>
            </div>
        );
    }
}

export default Projects;