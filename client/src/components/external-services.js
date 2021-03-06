import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class ExternalServices extends Component {
  
  render() {
    return (
      <div className="ExternalServices">
        <div>
          <h1 style={{fontFamily: 'cursive', 'text-align': 'center'}}>External Services</h1>
        </div>
        <div className="ExternalServices-content">
          <h2 style={{fontFamily: 'cursive'}}>
          Services for Elderly:
          </h2>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
          nisi ut aliquip ex ea commodo consequat.
          </p>
          <Link style={{fontFamily: 'cursive', 'text-align': 'center'}}>
        Generic Link to external 1
        </Link>
          <p></p>
          <h2 style={{fontFamily: 'cursive'}}>
          Services for those with disabilities:
          </h2>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
          nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
        <Link style={{fontFamily: 'cursive', 'text-align': 'center'}}>
        Generic Link to external 2
        </Link>
      </div>
    );
  }
  
}

export default ExternalServices;
