import React, { Component } from "react";
import Header from "../components/Header";
import BackgroundLines from "../components/BackgroundLines";

export default class Layout extends Component {
  render() {
    return (
      <div className="mi-wrapper">
        <BackgroundLines />
        <Header />
        {this.props.children}
      </div>
    );
  }
}