import React, { Component } from 'react';
import HomePageCardServices from './cards/HomePageCardServices';
import HomePageCardAboutUs from './cards/HomePageCardAboutUs';
import HomePageCardDonate from './cards/HomePageCardDonate';
import '../styles/home.css';

class Home extends Component {
  
  render() {
    return (
      <div className="Home">
        <div>
          <h1 className="Home-h1">Welcome to Best Community Service!</h1>
        </div>
        <div className="Home-content">
          <HomePageCardAboutUs />
          <HomePageCardServices />
          <HomePageCardDonate />
        </div>
      </div>
    );
  }
  
}

export default Home;
