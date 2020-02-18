import React, { Component } from "react";
import axios from 'axios';
import Project from '../Project';
import Sectiontitle from "../Sectiontitle";
// import Layout from "../Layout";

class Projects extends Component {
  state = {
    portfolios: []
  }
  componentDidMount(){
    axios.get('/api/portfolios')
      .then( response => {
        this.setState({
          portfolios: response.data
        })
      })
  }
  render() {
    return (
        <div className="mi-about mi-section mi-padding-top mi-padding-bottom">
          <div className="container">
            <Sectiontitle title="Portfolios" />
            <div className="row mt-30-reverse">
              {this.state.portfolios.map(portfolio => (
                <div className="col-lg-4 col-md-6 col-12 mt-30" key={portfolio.id}>
                  <Project content={portfolio}/>
                </div>
              ))}
            </div>
          </div>
        </div>

    );
  }
}

export default Projects;