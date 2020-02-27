import React from 'react'
import EventPageCardReservationsGym from './cards/EventPageCardReservationsGym'
import EventPageCardReservationsCourtyard from './cards/EventPageCardReservationsCourtyard'

class Events extends React.Component {
  render() {
    return (
      <div className="Events">
      <div>
          <h1 style={{fontFamily: 'cursive', 'text-align': 'center'}}>Events and Space Reservation</h1>
        </div>
        <div className="Events-content" style={{display:'flex', 'flex-direction':'row'}}>
          <EventPageCardReservationsGym />
          <EventPageCardReservationsCourtyard />
        </div>
    </div>
    )
  }
}
export default Events