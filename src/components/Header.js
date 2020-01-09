import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import styles from '../components/styles/Header.scss';
// import Icon from '../../common/Icon/Icon';
import { Grid, Row, Col } from 'react-flexbox-grid';

class Header extends React.Component {
    render() {
        return (
            <header className={styles.component}>
                <Grid>
                    <Row between="md" middle="xs">
                        <Col md={1} lg={2}>
                            <Link to='/'>
                                <div className={styles.logo}>
                                    {/* <Icon name='laptop-code' /> */}
                                    <div className={styles.name}>Edyta Szarowska</div>
                                    <div className={styles.nameJunior}> Junior Front-End Developer</div>
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
