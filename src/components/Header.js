import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../components/styles/Header.scss';
// import Icon from '../../common/Icon/Icon';
import { Grid, Row, Col } from 'react-flexbox-grid';

class Header extends React.Component {
    render() {
        return (
            <header className='component'>
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
                                <NavLink to='/projects' activeClassName='active'>Projects</NavLink>
                                <NavLink to='/about' activeClassName='active'>About</NavLink>
                                <NavLink to='/contact' activeClassName='active'>Contact</NavLink>
                            </nav>
                        </Col>
                    </Row>
                </Grid>
            </header>
        );
    }
}

export default Header;
