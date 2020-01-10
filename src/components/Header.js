import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../components/styles/Header.scss';
// import Icon from '../../common/Icon/Icon';
import { Grid, Row, Col } from 'react-flexbox-grid';
import '../components/styles/App-style.css';
import '../components/styles/Responsive.css';
import '../components/styles/Hamburgers.css';

class Header extends React.Component {
    state = {
        hamburgerState: "off"
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    toggleMenu = () => {
        let hamburger = document.querySelector(".hamburger");
        let overlay = document.querySelector(".overlay");
        if (this.state.hamburgerState === "off") {
            hamburger.classList.add("is-active");
            overlay.classList.remove("hide");
            overlay.classList.add("show");
            this.setState({ hamburgerState: "on" })
        } else {
            hamburger.classList.remove("is-active");
            overlay.classList.remove("show");
            overlay.classList.add("hide");
            this.setState({ hamburgerState: "off" })
        }
    }
    render() {
        return (
            <header className='component'>
                <button className="hamburger hamburger--spin mobile" type="button" onClick={this.toggleMenu}>
                    <span className="hamburger-box">
                        <span className="hamburger-inner"></span>
                    </span>
                </button>
                <Grid>
                    <Row between="md" middle="xs">
                        <Col>
                            <Link to='/'>
                                <div className='logo'>
                                    {/* <Icon name='laptop-code' /> */}
                                    <div className='name'>Edyta Szarowska</div>
                                    <div className='nameJunior'> Junior Front-End</div>
                                    <div className='nameJunior'> Developer</div>
                                </div>
                            </Link>
                        </Col>
                        <Col md={6}>
                            <nav>
                                <div className="overlay mobile">
                                    <div className="submenus">
                                        <div className="work-mobile"><Link to="/" className="active">Work</Link></div>
                                        <div className="articles-mobile"><Link to="/articles">Articles</Link></div>
                                        <div className="about-mobile"><Link to="/about">About</Link></div>
                                    </div>
                                </div>
                                <NavLink to='/projects' activeClassName='active'>Projects</NavLink>
                                <NavLink to='/about' activeClassName='active'>About</NavLink>
                                <NavLink to='/contact' activeClassName='active'>Contact</NavLink>
                            </nav>
                        </Col>
                    </Row>
                </Grid>
            </header >
        );
    }
}

export default Header;
