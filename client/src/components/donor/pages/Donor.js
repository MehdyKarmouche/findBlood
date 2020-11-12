import React from 'react';
import Navbar from '../../Navbar';
import CallForAction from '../CallForAction';
import ListDonations from '../ListDonations';
import Footer from '../../Footer'

const Donor = () => {
  
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