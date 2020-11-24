import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import LandingPage from './Landing/Landing';
import About from './About/About';
import Work from './Work/Work';
import Team from './Team/Team';
import Lawyers from './Lawyers/Lawyers';
import Owner from './Owners/Owners';
import OwnLoged from './Owner-Logged/Login';
import JoinUs from './JoinUs/Joinus';
import Details from './Details/Lawyer-details';


function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={LandingPage} />
        <Route path="/About" component={About} />
        <Route path="/Work" component={Work} />
        <Route path="/Team" component={Team} />
        <Route path="/Lawyers/:id" component={Lawyers} />
        <Route path="/Owners" component={Owner} />
        <Route path="/Owner-Login" component={OwnLoged} />
        <Route path="/Join-us" component={JoinUs} />
        <Route path="/lawyer-details/:id" component={Details} />
      </Router>

    </div>
  );
}

export default App;
