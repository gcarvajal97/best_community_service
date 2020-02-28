import React, { Component} from 'react';

export class ServiceRegistration extends Component {
    constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleSubmit(event) {
      alert('Registered!');
      event.preventDefault();
    }
  
    render() {
      let service = this.props.match.params.serviceType;
      service = service.charAt(0).toUpperCase() + service.slice(1)
      if (service.includes("Paid") || service.includes("paid")) {
        service = service.substring(4, service.length);
      }
      
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
                    Service:
                    <input type="text" value={service} onChange={this.handleChange} />
                </label>
            </div>
            <div>
                <label>
                    Email Address:
                    <input type="text" onChange={this.handleChange} />
                </label>
            </div>
            {this.props.match.params.serviceType.includes("paid") && 
              <div>
                <h1>3RD PARTY PAYMENT API HERE...</h1>
              </div>
            }
          <input type="submit" value="Submit"/>
        </form>
      );
    }
  }