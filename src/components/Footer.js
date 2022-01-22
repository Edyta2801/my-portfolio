import React, { Component } from 'react';
import '../components/styles/App-style.css';
import '../components/styles/Responsive.css';

import github from '../images/GitHub-logo.png';
import linkedin from '../images/linkedin-logo.png';
import email from '../images/email-logo.png';

class Footer extends Component {
  state={
    linkedin: linkedin,
    email: email,
    github:github,
  }

  render() {
    return (
      <div className="footer">
        <div className="footer-statement">
          Let's work together!
        </div>
        <div className="social-links">
          <div className="social">
            <a href="https://www.linkedin.com/in/edyta-szarowska/" target="_blank" rel="noopener noreferrer">
              <img className="linkedin" src={this.state.linkedin} alt="LinkedIn Logo"/>
            </a>
          </div>
          <div className="social">
            <a href="https://github.com/Edyta2801" target="_blank" rel="noopener noreferrer">
              <img className="github" src={this.state.github} alt="GitHub Logo"/>
            </a>
          </div>
          <div className="social-last">
            <a href="mailto:edyta.szarowska.dev@gmail.com" target="_blank" rel="noopener noreferrer">
              <img className="email" src={this.state.email} alt="Email Logo"/>
            </a>
          </div>
        </div>
        <div className="footer-copyright">
          © 2022, Edyta Szarowska
        </div>
      </div>
    );
  }
}

export default Footer;