import React from 'react';
import { Card, CardColumns } from 'react-bootstrap';
import '../styles/Projects.css';
import linkedin from '../../images/linkedin-logo.png';
import github from '../../images/GitHub-logo.png';
import '../../components/styles/Responsive.css';
import FsLightbox from "fslightbox-react";
import 'react-image-lightbox/style.css';
import { ZoomIn, Link } from 'react-feather';
import axios from 'axios';





class Projects extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            linkedin: linkedin,
            github: github,
            toggler: false,
            portfolios: [],

        };
    }
    setToggler(event) {
        this.setState({ toggler: event });
    }

    componentDidMount() {
        axios.get('/api/portfolios')
            .then(response => {
                this.setState({
                    portfolios: response.data
                })
            })
    };


    render() {
        const { imageUrl, largeImageUrl } = this.props.content;

        return (
            <div className="body">
                <CardColumns>
                    <Card>
                        {this.state.portfolios.map(portfolio => (
                            <div className='wholeCard'>
                                <Card.Img variant="top" src={imageUrl} alt="Project" content={portfolio} />
                                <Card.Body>
                                    <Card.Title>Card title that wraps to a new line</Card.Title>
                                </Card.Body>
                                <div className="icon-description">
                                    <div className="social-icons">
                                        <div className="icon">
                                            <a href="https://www.linkedin.com/in/edyta-szarowska/" target="_blank" rel="noopener noreferrer">
                                                <Link />
                                            </a>
                                        </div>
                                        <div className="icon">

                                            <button type="button" onClick={() => this.setToggler(!this.state.toggler)}>
                                                <ZoomIn />

                                            </button>

                                            <FsLightbox
                                                toggler={this.state.toggler}
                                                sources={largeImageUrl}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Card>
                    <Card>
                        {this.state.portfolios.map(portfolio => (
                            <div className='wholeCard'>
                                <Card.Img variant="top" src={imageUrl} alt="Project" content={portfolio} />
                                <Card.Body>
                                    <Card.Title>Card title that wraps to a new line</Card.Title>
                                </Card.Body>
                                <div className="icon-description">
                                    <div className="social-icons">
                                        <div className="icon">
                                            <a href="https://www.linkedin.com/in/edyta-szarowska/" target="_blank" rel="noopener noreferrer">
                                                <Link />
                                            </a>
                                        </div>
                                        <div className="icon">

                                            <button type="button" onClick={() => this.setToggler(!this.state.toggler)}>
                                                <ZoomIn />

                                            </button>

                                            <FsLightbox
                                                toggler={this.state.toggler}
                                                sources={largeImageUrl}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Card>
                    <Card>
                        {this.state.portfolios.map(portfolio => (
                            <div className='wholeCard'>
                                <Card.Img variant="top" src={imageUrl} alt="Project" content={portfolio} />
                                <Card.Body>
                                    <Card.Title>Card title that wraps to a new line</Card.Title>
                                </Card.Body>
                                <div className="icon-description">
                                    <div className="social-icons">
                                        <div className="icon">
                                            <a href="https://www.linkedin.com/in/edyta-szarowska/" target="_blank" rel="noopener noreferrer">
                                                <Link />
                                            </a>
                                        </div>
                                        <div className="icon">

                                            <button type="button" onClick={() => this.setToggler(!this.state.toggler)}>
                                                <ZoomIn />

                                            </button>

                                            <FsLightbox
                                                toggler={this.state.toggler}
                                                sources={largeImageUrl}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Card>
                </CardColumns>
            </div >
        );
    }
}


export default Projects;