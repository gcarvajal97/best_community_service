import React, { Component} from 'react';
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";

export class EventRegistration extends Component {
    constructor(props) {
      super(props);
      this.state = {
        value: '',
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
      return (
        <form onSubmit={this.handleSubmit}>
            <div>
                <label>
                    Name:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
            </div>
            <div>
                <label>
                    Reservation Date:
                    <DatePicker selected={this.state.startDate} onChange={this.handleChange}/>
                </label>
            </div>
          
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }