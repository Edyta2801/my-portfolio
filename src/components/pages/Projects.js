import React from 'react';
import { Card, CardColumns } from 'react-bootstrap';
import '../styles/Projects.css';
import linkedin from '../../images/linkedin-logo.png';
import github from '../../images/GitHub-logo.png';
import '../../components/styles/Responsive.css';



class Projects extends React.Component {
    state = {
        linkedin: linkedin,
        github: github,

    }
    render() {
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
                            </div>
                        </div>
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