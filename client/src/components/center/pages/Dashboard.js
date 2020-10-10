import React from 'react';
import Grid from '@material-ui/core/Grid';
import Donationstable from './Donationstable';
import NumDonations from './NumDonations';
import Navbar from '../../Navbar';
import {BrowserRouter as Router, Route} from  'react-router-dom'



function Home() {
  
  return (
    <div className="root">
        <Navbar />
        <div >
          <NumDonations/>      
        <Donationstable/>
        </div>
    </div>
  );
}

export default Home;
