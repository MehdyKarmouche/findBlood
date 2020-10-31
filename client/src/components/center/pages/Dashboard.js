import React, {useEffect}from 'react';
import Donationstable from '../Donationstable';
import NumDonations from '../NumDonations';
import Navbar from '../../Navbar';
import Footer from '../../Footer'
import createHistory from 'history/createBrowserHistory'




function Dashboard() {
  
  const history = createHistory();
 
  setTimeout(function(){ history.go(1); }, 100000);
  
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
