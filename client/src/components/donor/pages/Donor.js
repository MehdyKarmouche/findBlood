import React from 'react';
import Navbar from '../../Navbar';
import CallForAction from './CallForAction';
import ListDonations from './ListDonations';
import {BrowserRouter as Router, Route} from  'react-router-dom'
import Home from '../../Home'

function Donor() {
  
    return (
      <Router>
        <div className="root">
            <Route exact path="/" component={Home} />
            <Navbar />
            <div >
              <CallForAction/>      
              <ListDonations/>
            </div>
        </div>
      </Router>
    );
  }
  
  export default Donor;