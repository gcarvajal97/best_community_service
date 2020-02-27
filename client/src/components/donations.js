import React from 'react'
import DonationsPageCardAnonymous from './cards/DonationsPageCardAnonymous';
import DonationsPageCardKnown from './cards/DonationsPageCardKnown';
import donationPageImage from '../public/donationPageImage.jpeg'

class Donations extends React.Component {
  render() {
    return(
    <div className="Donations">
      <div>
          <h1 style={{fontFamily: 'cursive', 'text-align': 'center'}}>Donations</h1>
        </div>
        <div className="Donations-content">
          <header style={{fontFamily: 'cursive', 'text-align': 'center'}}>
            <img src={donationPageImage} alt={donationPageImage} />
          </header>
          <h2 style={{fontFamily: 'cursive'}}>
          Why your donation matters:
          </h2>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
          nisi ut aliquip ex ea commodo consequat.
          </p>
          <p />
          <div style={{display:'flex', 'flex-direction':'row'}}>
            <DonationsPageCardAnonymous/>
            <DonationsPageCardKnown />
          </div>
      </div>
    </div>
    )}
}
export default Donations