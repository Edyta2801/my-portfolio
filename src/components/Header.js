import React from 'react';
import {  NavLink } from 'react-router-dom';
// import '../components/styles/Header.scss';
// import Icon from '../../common/Icon/Icon';
// import { Col } from 'react-flexbox-grid';
import '../components/styles/App-style.css';
import '../components/styles/Responsive.css';
import '../components/styles/Hamburgers.css';
import logo from "../../src/images/logo_color.svg";


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
      this.setState({hamburgerState: "on"})
    } else {
      hamburger.classList.remove("is-active");
      overlay.classList.remove("show");
      overlay.classList.add("hide");
      this.setState({hamburgerState: "off"})
    }
  }

  render() {
    return (
      <div className="body">
        <section className="header">
          <div className="navigation">
            <div className="anne"><NavLink exact to="/"><img src={logo} alt='logo'
            height='50px'

             /></NavLink></div>
            <button className="hamburger hamburger--spin mobile" type="button" onClick={this.toggleMenu}>
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>
            <div className="overlay mobile">
              <div className="submenus">
              <div className="aboutMe-mobile"><NavLink exact to="/" onClick={this.toggleMenu}>About</NavLink></div>
                <div className="work-mobile"><NavLink exact to="/projects" onClick={this.toggleMenu}>Projects</NavLink></div>
                <div className="about-mobile"><NavLink exact to="/skills" onClick={this.toggleMenu}>Skills</NavLink></div>
                <div className="articles-mobile"><NavLink exact to="/contact" onClick={this.toggleMenu}>Contact</NavLink></div>
              </div>
            </div>
            <div className="navigation-sub">
            <div className="aboutMe"><NavLink exact to="/">About</NavLink></div>
              <div className="work"><NavLink exact to="/projects">Projects</NavLink></div>
              <div className="about"><NavLink exact to="/skills" >Skills</NavLink></div>
              <div className="articles"><NavLink exact to="/contact" >Contact</NavLink></div>
            </div>
          </div>
          {/* <div className="speciality">
            Junior Front-End Developer
          </div> */}
        </section>
      </div>
    );
  }
}

export default Header;
