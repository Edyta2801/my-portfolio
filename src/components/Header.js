import React from 'react';
import {  Link } from 'react-router-dom';
// import '../components/styles/Header.scss';
// import Icon from '../../common/Icon/Icon';
// import { Col } from 'react-flexbox-grid';
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
            <div className="anne"><Link to="/" className="active">Edyta Szarowska</Link></div>
            <button className="hamburger hamburger--spin mobile" type="button" onClick={this.toggleMenu}>
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>
            <div className="overlay mobile">
              <div className="submenus">
                <div className="work-mobile"><Link to="/" className="active">Projects</Link></div>
                <div className="articles-mobile"><Link to="/contact"  className="active">Contact</Link></div>
                <div className="about-mobile"><Link to="/about" className="active">About</Link></div>
              </div>
            </div>
            <div className="navigation-sub">
              <div className="work"><Link to="/" className="active">Projects</Link></div>
              <div className="articles"><Link to="/contact" className="active" >Contact</Link></div>
              <div className="about"><Link to="/about" className="active">About</Link></div>
            </div>
          </div>
          <div className="speciality">
            Junior Front-End Developer
          </div>
        </section>
      </div>
    );
  }
}

export default Header;
