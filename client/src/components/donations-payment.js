import React, { Component} from 'react';
import donationImage from '../public/donate-button.png';


export class DonationPayment extends Component {
    constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleSubmit(event) {
      alert('Payment Submitted!');
      event.preventDefault();
    }
  
    render() {
      let donationType = this.props.match.params.donationType;
      donationType = donationType.charAt(0).toUpperCase() + donationType.slice(1)
      return (
        <form onSubmit={this.handleSubmit} style={{fontFamily: 'cursive', 'text-align': 'center'}}>
            <div>
                <h1 style={{fontFamily: 'cursive', 'text-align': 'center'}}>Pledge your Donation!</h1>
            </div>
            <div>
                <header>
                    <img src={donationImage} alt={donationImage}/>
                </header>
            </div>
            {donationType === 'Known' && 
                <div>
                    <label>
                        Name:
                        <input type="text" onChange={this.handleChange} />
                    </label>
                </div>
            }
            <div>
                <label>
                    Email Address (for payment purposes):
                    <input type="text" onChange={this.handleChange} />
                </label>
            </div>
            <div>
                <h1>3RD PARTY DONATION API HERE...</h1>
            </div>
          <input type="submit" value="Submit"/>
        </form>
      );
    }
  }