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
import p1 from '../../images/Projects/portfolio.jpg';
import p3 from '../../images/Projects/test.png';
import p4 from '../../images/Projects/memory_new1.png';
import p5 from '../../images/Projects/webpage_1_.png';
import p6 from '../../images/Projects/pizzeria_new.png';
import p7 from '../../images/Projects/travel.png';
import p8 from '../../images/Projects/to_do.png';
import p9 from '../../images/Projects/admin_panel.jpg';


const images6 = [
    '//res.cloudinary.com/edyta/image/upload/v1582118382/screenshot_1_aa0cew.png',
    '//res.cloudinary.com/edyta/image/upload/v1582118382/screenshot_2_nhnoiy.png',
    '//res.cloudinary.com/edyta/image/upload/v1582118382/screenshot_3_s2dqhr.png',
    '//res.cloudinary.com/edyta/image/upload/v1582118381/screenshot_4_ikx1en.png',
    '//res.cloudinary.com/edyta/image/upload/v1582118381/screenshot_5_wmznsb.png',
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
                        <Card.Img variant="top" src={p1} />
                        <Card.Body>
                            <Card.Title>Portfolio webpage</Card.Title>
                            <Card.Subtitle>React npm Sass Bootstrap </Card.Subtitle>
                            <div className="icon-description">
                                <div className="social-icons">
                                    <div className="icon">
                                        <a href="https://github.com/Edyta2801/potfolio-3" target="_blank" rel="noopener noreferrer">
                                            <Link />
                                        </a>
                                    </div>
                                    <div className="icon">
                                        <a href="https://portfolio-edyta-szarowska.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                                            <ZoomIn />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={p2} />
                        <Card.Body>
                            <Card.Title>JavaScript-blog</Card.Title>
                            <Card.Subtitle>JavaScript Sass npm</Card.Subtitle>
                            <div className="icon-description">
                                <div className="social-icons">
                                    <div className="icon">
                                        <a href="https://github.com/Edyta2801/javascript-blog" target="_blank" rel="noopener noreferrer">
                                            <Link />
                                        </a>
                                    </div>
                                    <div className="icon">
                                        <a href="https://edyta2801.github.io/javascript-blog/" target="_blank" rel="noopener noreferrer">
                                            <ZoomIn />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={p3} />
                        <Card.Body>
                            <Card.Title>testYourself  App</Card.Title>
                            <Card.Subtitle>React Redux Firebase</Card.Subtitle>
                            <div className="icon-description">
                                <div className="social-icons">
                                    <div className="icon">
                                        <a href="https://github.com/Edyta2801/jfddl6-testyourself-app" target="_blank" rel="noopener noreferrer">
                                            <Link />
                                        </a>
                                    </div>
                                    <div className="icon">
                                        <a href="http://app.testyourself.jfddl6.is-academy.pl/" target="_blank" rel="noopener noreferrer">
                                            <ZoomIn />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Body>
                            <div className="icon-description">
                                <div className="social-icons">
                                    <div className="icon">
                                        <a href="https://github.com/Edyta2801/jfddl6-testyourself" target="_blank" rel="noopener noreferrer">
                                            <Link />
                                        </a>
                                    </div>
                                    <div className="icon">
                                        <a href="http://www.testyourself.jfddl6.is-academy.pl/thank-you.html" target="_blank" rel="noopener noreferrer">
                                            <ZoomIn />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <Card.Title>Memory game</Card.Title>
                            <Card.Subtitle>JavaScript OOP </Card.Subtitle>
                        </Card.Body>
                        <Card.Img variant="top" src={p4} />
                    </Card>
                    <Card>
                        <Card.Body>
                            <div className="icon-description">
                                <div className="social-icons">
                                    <div className="icon">
                                        <a href="https://github.com/Edyta2801/jfddl6-testyourself" target="_blank" rel="noopener noreferrer">
                                            <Link />
                                        </a>
                                    </div>
                                    <div className="icon">
                                        <a href="http://www.testyourself.jfddl6.is-academy.pl/" target="_blank" rel="noopener noreferrer">
                                            <ZoomIn />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <Card.Title>Team webpage </Card.Title>
                            <Card.Subtitle>
                                JavaScript Layout
                            </Card.Subtitle>
                        </Card.Body>
                        <Card.Img variant="top" src={p5} />
                    </Card>
                    <Card>
                        <Card.Body>
                            <div className="icon-description">
                                <div className="social-icons">
                                    <div className="icon">
                                        <a href="https://github.com/Edyta2801/pizzeria-app" target="_blank" rel="noopener noreferrer">
                                            <Link />
                                        </a>
                                    </div>
                                    <div className="icon">
                                        <a href="https://project-restaurant-pizzeria.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                                            <ZoomIn />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <Card.Title>Pizzeria App </Card.Title>
                            <Card.Subtitle>
                                JavaScript Sass OOP API
                            </Card.Subtitle>
                        </Card.Body>
                        <Card.Img variant="top" src={p6} />
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={p7} />
                        <Card.Body>
                            <div className="icon-description">
                                <div className="social-icons">
                                    <div className="icon">
                                        <a href="https://github.com/Edyta2801/travel-agency-version-2" target="_blank" rel="noopener noreferrer">
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
                            <Card.Title>Travel agency App </Card.Title>
                            <Card.Subtitle>
                                React Redux Sass AJAX API
                            </Card.Subtitle>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={p8} />
                        <Card.Body>
                            <div className="icon-description">
                                <div className="social-icons">
                                    <div className="icon">
                                        <a href="https://to-do-app-using-react.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                                            <Link />
                                        </a>
                                    </div>
                                    <div className="icon">
                                        <a href="https://github.com/Edyta2801/to-do-app-using-React" target="_blank" rel="noopener noreferrer">
                                            <ZoomIn />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <Card.Title>To do App</Card.Title>
                            <Card.Subtitle>
                                React Webpack Npm Sass
                            </Card.Subtitle>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={p9} />
                        <Card.Body>
                            <div className="icon-description">
                                <div className="social-icons">
                                    <div className="icon">
                                        <a href="https://github.com/Edyta2801" target="_blank" rel="noopener noreferrer">
                                            <Link />
                                        </a>
                                    </div>
                                    <div className="icon">
                                        <a href="https://res.cloudinary.com/edyta/image/upload/v1582145857/coming-soon_qeqbr6.jpg" target="_blank" rel="noopener noreferrer">

                                            <ZoomIn />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <Card.Title>Admin Panel</Card.Title>
                            <Card.Subtitle>
                                JavaScript RWD Sass
                            </Card.Subtitle>
                        </Card.Body>
                    </Card>
                </CardColumns>
            </div >
        );
    }
}

export default Projects;
