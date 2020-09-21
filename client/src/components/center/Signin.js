import React from 'react';
import Navbar from '../Navbar';
import Signinform from './Signinform';
import {BrowserRouter as Router, Route} from  'react-router-dom'

function Home() {
  return (
    <Router>
      <div className="Home">
          <Navbar/>
          <Signinform/>
      </div>
    </Router>
  );
}

export default Home;
