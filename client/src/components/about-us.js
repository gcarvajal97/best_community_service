import React, { Component } from 'react';
import '../styles/home.css';

class AboutUs extends Component {

  constructor(props) {
      super(props);
      this.state = { apiResponse: "" };
  }
  
  render() {
    return (
      <div className="Home">
        <div className="Home-content">
        </div>
      </div>
    );
  }
  
}

export default AboutUs;
