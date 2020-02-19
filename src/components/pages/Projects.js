import React from 'react';
import { Card, CardColumns } from 'react-bootstrap';
import '../styles/Projects.css';
import linkedin from '../../images/linkedin-logo.png';
import github from '../../images/GitHub-logo.png';
import '../../components/styles/Responsive.css';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import { ZoomIn, Link } from 'react-feather';
import p2 from '../../images/Projects/blog_1.png';
import p1 from '../../images/projectfour.png';
import p3 from '../../images/Projects/2.png';

const images = [
    '//thumbs.dreamstime.com/z/conceptual-hand-writing-showing-my-portfolio-motivational-call-business-photo-showcasing-samples-work-art-drawings-photography-120435291.jpg',
    '//res.cloudinary.com/edyta/image/upload/v1582111989/blog_1_j0hxst.png',
];
const images1 = [
    '//res.cloudinary.com/edyta/image/upload/v1582111989/blog_1_j0hxst.png',
    '//res.cloudinary.com/edyta/image/upload/v1582111989/blog_2_ahoxou.png',
];
const images2 = [
    '//res.cloudinary.com/edyta/image/upload/v1582118320/1_ae0rm3.png',
    '//res.cloudinary.com/edyta/image/upload/v1582118320/2_xyybsf.png',
    '//res.cloudinary.com/edyta/image/upload/v1582118320/3_wcg4do.png',
    '//res.cloudinary.com/edyta/image/upload/v1582118320/4_edfmvx.png',
    '//res.cloudinary.com/edyta/image/upload/v1582118320/5_oinsqq.png',
    '//res.cloudinary.com/edyta/image/upload/v1582118320/6_mzbfgc.png',
    '//res.cloudinary.com/edyta/image/upload/v1582118320/7_ey4afk.png',
    '//res.cloudinary.com/edyta/image/upload/v1582118320/8_qeypzw.png',

]
const images3 = [
    '//res.cloudinary.com/edyta/image/upload/v1582111989/blog_1_j0hxst.png',
    '//res.cloudinary.com/edyta/image/upload/v1582111989/blog_2_ahoxou.png',]

const images4 = [
    '//res.cloudinary.com/edyta/image/upload/v1582111989/blog_1_j0hxst.png',
    '//res.cloudinary.com/edyta/image/upload/v1582111989/blog_2_ahoxou.png',
]
const images5 = [
    '//res.cloudinary.com/edyta/image/upload/v1582111989/blog_1_j0hxst.png',
    '//res.cloudinary.com/edyta/image/upload/v1582111989/blog_2_ahoxou.png',
];
const images6 = [
    '//res.cloudinary.com/edyta/image/upload/v1582111989/blog_1_j0hxst.png',
    '//res.cloudinary.com/edyta/image/upload/v1582111989/blog_2_ahoxou.png',
];
const images7 = [
    '//res.cloudinary.com/edyta/image/upload/v1582111989/blog_1_j0hxst.png',
    '//res.cloudinary.com/edyta/image/upload/v1582111989/blog_2_ahoxou.png',
];
const images8 = [
    '//res.cloudinary.com/edyta/image/upload/v1582111989/blog_1_j0hxst.png',
    '//res.cloudinary.com/edyta/image/upload/v1582111989/blog_2_ahoxou.png',
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
                            <Card.Img variant="top" src={p1} />
                            <Card.Body>
                                <Card.Title>Portfolio webpage</Card.Title>
                                <Card.Subtitle>React npm Sass Bootstrap </Card.Subtitle>
                            </Card.Body>
                            <div className="icon-description">
                                <div className="social-icons">
                                    <div className="icon">
                                        <a href="https://portfolio-edyta-szarowska.herokuapp.com/" target="_blank" rel="noopener noreferrer">
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
                        <div className='wholeCard'>
                            <Card.Img variant="top" src={p2} />
                            <Card.Body>
                                <Card.Title>JavaScript-blog</Card.Title>
                                <Card.Subtitle>JavaScript Sass npm</Card.Subtitle>
                            </Card.Body>
                            <div className="icon-description">
                                <div className="social-icons">
                                    <div className="icon">
                                        <a href="https://edyta2801.github.io/javascript-blog/" target="_blank" rel="noopener noreferrer">
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
                        </div>
                    </Card>
                    <Card>
                        <div className='wholeCard'>
                            <Card.Img variant="top" src={p3} />
                            <Card.Body>
                                <Card.Title>testYourself  App</Card.Title>
                                <Card.Subtitle>React Redux Firebase Material-ui </Card.Subtitle>
                            </Card.Body>
                            <div className="icon-description">
                                <div className="social-icons">
                                    <div className="icon">
                                        <a href="http://app.testyourself.jfddl6.is-academy.pl/" target="_blank" rel="noopener noreferrer">
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
                        </div>
                    </Card>
                    <Card>
                        <Card.Body>
                            <div className="icon-description">
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
                            <div className="icon-description">
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
                            <div className="icon-description">
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
                            <div className="icon-description">
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
                            <div className="icon-description">
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
                            <div className="icon-description">
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
