import React from 'react';
import Donationstable from './Donationstable';
import NumDonations from './NumDonations';
import Navbar from '../../Navbar';
import {BrowserRouter as Router, Route} from  'react-router-dom'

function Home() {
  return (
    <div>
        <Navbar />
        <NumDonations/>
        <Donationstable/>
    </div>
  );
}

export default Home;
