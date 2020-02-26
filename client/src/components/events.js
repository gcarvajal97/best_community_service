import React from 'react'
import HomePageCardServices from './cards/HomePageCardServices';
import ServicesPageCardPaidServices from './cards/ServicesPageCardPaidServices';
class Events extends React.Component {
  render() {
    return (
      <div className="Events">
      <div>
          <h1 style={{fontFamily: 'cursive', 'text-align': 'center'}}>Events and Space Reservation</h1>
        </div>
        <div className="Events-content">
          <HomePageCardServices />
          <ServicesPageCardPaidServices />
      </div>
    </div>
    )
  }
}
export default Events