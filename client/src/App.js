import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import CenterSignin from './components/center/pages/Signin';
import DonorSignin from './components/donor/pages/Signin';
import Signup from './components/center/pages/Signup';
import NumberOfDonation from './components/center/NumberOfDonations';
import {BrowserRouter as Router, Route} from  'react-router-dom'
import { Fragment } from 'react';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/center/signin" component={CenterSignin} />
        <Route exact path="/donor/signin" component={DonorSignin} />
        <Route exact path="/" component={Home} />
      </div>
    </Router>
  );
}

export default App;
