import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class AboutUs extends Component {
  
  render() {
    return (
      <div className="AboutUs">
      <div>
          <h1 style={{fontFamily: 'cursive', 'text-align': 'center'}}>About Us</h1>
        </div>
        <div className="AboutUs-content">
        <h1>
        Generic header image here...
        </h1>
          <h2 style={{fontFamily: 'cursive'}}>
          Our Mission:
          </h2>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
          nisi ut aliquip ex ea commodo consequat.
          </p>
          <p></p>
          <h2 style={{fontFamily: 'cursive'}}>
          Our Goal:
          </h2>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
          nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
        <Link style={{fontFamily: 'cursive', 'text-align': 'center'}}>
        Get involved today!
        </Link>
      </div>
    );
  }
  
}

export default AboutUs;
