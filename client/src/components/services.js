import React from 'react'
import HomePageCardServices from './cards/HomePageCardServices';
import ServicesPageCardPaidServices from './cards/ServicesPageCardPaidServices';

class Services extends React.Component {
  render() {
    return (
      <div className="Services">
      <div>
          <h1 style={{fontFamily: 'cursive', 'text-align': 'center'}}>Services and Programs</h1>
        </div>
        <div className="Services-content" style={{display:'flex', 'flex-direction':'row'}}>
          <HomePageCardServices />
          <ServicesPageCardPaidServices />
      </div>
    </div>
    )
  }
}
export default Services