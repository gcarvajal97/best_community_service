import React, { Component } from 'react';

class Admin extends Component {
  
  render() {
    return (
      <div className="Admin">
        <div>
          <h1 style={{fontFamily: 'cursive', 'text-align': 'center'}}>Admin</h1>
        </div>
        <div className="Admin-content">
          <h2 style={{fontFamily: 'cursive'}}>
          Divider of admin stuff:
          </h2>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
          nisi ut aliquip ex ea commodo consequat.
          </p>
          <p></p>
          <h2 style={{fontFamily: 'cursive'}}>
          Some Other divider:
          </h2>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
          nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    );
  }
  
}

export default Admin;
