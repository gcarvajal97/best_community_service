import React from 'react'
import HomePageCardServices from './cards/HomePageCardServices';
import ServicesPageCardPaidServices from './cards/ServicesPageCardPaidServices';

class Services extends React.Component {
  render() {
    return (
      <div className="Services">
        <div style={{fontFamily: 'cursive', 'text-align': 'center'}}>
          <h1>Services and Programs</h1>
          <h2>Calendar component here to select dates....</h2>
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