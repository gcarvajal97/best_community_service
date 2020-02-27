import React, { Component} from 'react';
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";


export class EventRegistration extends Component {
    constructor(props) {
      super(props);
      this.state = {
        start: new Date()
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange = date => {
        this.setState({
          startDate: date
        });
      };
  
    handleSubmit(event) {
      alert('Registered!');
      event.preventDefault();
    }
  
    render() {
      let eventSpace = this.props.match.params.eventSpace;
      eventSpace = eventSpace.charAt(0).toUpperCase() + eventSpace.slice(1)
      return (
        <form onSubmit={this.handleSubmit} style={{fontFamily: 'cursive', 'text-align': 'center'}}>
            <div>
                <h1 style={{fontFamily: 'cursive', 'text-align': 'center'}}>Reserve Your Event!</h1>
            </div>
            <div>
                <label>
                    Name:
                    <input type="text" onChange={this.handleChange} />
                </label>
            </div>
            <div>
                <label>
                    Reservation Date:
                    <DatePicker selected={this.state.startDate} onChange={this.handleChange}/>
                </label>
            </div>
            <div>
                <label>
                    Event Type:
                    <input type="text" onChange={this.handleChange} />
                </label>
            </div>
            <div>
                <label>
                    Equipment Needed:
                    <input type="text" onChange={this.handleChange} />
                </label>
            </div>
            <div>
                <label>
                    Event Space Needed:
                    <input type="text" value={eventSpace} onChange={this.handleChange} />
                </label>
            </div>
            <div>
                <label>
                    Email Address:
                    <input type="text" onChange={this.handleChange} />
                </label>
            </div>
          <input type="submit" value="Submit"/>
        </form>
      );
    }
  }