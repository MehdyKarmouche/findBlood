import React, {useEffect} from 'react';
import Donationstable from '../Donationstable';
import NumDonations from '../NumDonations';
import Navbar from '../../Navbar';
import Footer from '../../Footer'





function Dashboard() {
  
  
  
  return (
    <div className="root">
        <Navbar />
        <div >
          <NumDonations/>      
          <Donationstable/>
        </div>
        <Footer/>
    </div>
  );
}

export default Dashboard;
