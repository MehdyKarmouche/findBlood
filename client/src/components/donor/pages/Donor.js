import React from 'react';
import Navbar from '../../Navbar';
import CallForAction from './CallForAction';
import ListDonations from './ListDonations';


function Donor() {
  
    return (
      <div className="root">
          <Navbar />
          <div >
            <CallForAction/>      
            <ListDonations/>
          </div>
      </div>
    );
  }
  
  export default Donor;