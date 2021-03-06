import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import { Tab } from '@material-ui/core';

import Home from './components/home';
import Services from './components/services';
import ExternalServices from './components/external-services';
import Donations from './components/donations';
import Events from './components/events';
import Employee from './components/employee-login';
import AboutUs from './components/about-us';
import { EventRegistration } from './components/event-registration';
import { DonationPayment } from './components/donations-payment';
import { ServiceRegistration } from './components/service-registration';
import Admin from './components/admin';

import './styles/index.css';

const routing = (
    <Router>
      <div>
        <div>
            <Tab label="Home" to="/" component={Link} />
            <Tab label="About Us" to="/aboutUs" component={Link} />
            <Tab label="Services" to="/services" component={Link} />
            <Tab label="Donations" to="/donations" component={Link} />
            <Tab label="Events" to="/events" component={Link} />
            <Tab label="External Services" to="/externalServices" component={Link} />
            <Tab label="Employee Login" to="/employee" component={Link} />
        </div>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route path="/aboutUs" component={AboutUs} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/services/:serviceType" component={ServiceRegistration} />
        <Route exact path="/donations" component={Donations} />
        <Route exact path="/donations/:donationType" component={DonationPayment} />
        <Route exact path="/events" component={Events} />
        <Route path="/externalServices" component={ExternalServices} />
        <Route exact path="/employee" component={Employee} />
        <Route exact path="/employee/admin" component={Admin} />
        <Route exact path='/events/registration/' component={EventRegistration}/>
        <Route exact path='/events/registration/:eventSpace' component={EventRegistration}/>
      </div>
    </Router>
  )
  ReactDOM.render(routing, document.getElementById('root'))