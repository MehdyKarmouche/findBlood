import React from 'react';
import Navbar from '../../Navbar';
import CallForAction from '../CallForAction';
import ListDonations from '../ListDonations';
import {BrowserRouter as Router, Route} from  'react-router-dom'
import Home from '../../Home'
import Footer from '../../Footer'

function Donor() {
  
    return (
      
        <div className="root">
            
            <Navbar />
            <div >
              <CallForAction/>      
              <ListDonations/>
              <Footer/>
            </div>
        </div>
      
    );
  }
  
  export default Donor;