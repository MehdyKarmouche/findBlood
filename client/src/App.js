import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import CenterSignin from './components/center/pages/Signin';
import DonorSignin from './components/donor/pages/Signin';
import CenterSignup from './components/center/pages/Signup';
import dashboard from './components/center/pages/Dashboard';
import DonorSignup from './components/donor/pages/Signup';
import NumberOfDonation from './components/center/NumberOfDonations';
import {BrowserRouter as Router, Route} from  'react-router-dom'
import { Fragment } from 'react';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/center/signin" component={CenterSignin} />
        <Route exact path="/donor/signin" component={DonorSignin} />
        <Route exact path="/center/signup" component={CenterSignup} />
        <Route exact path="/donor/signup" component={DonorSignup} />
        <Route exact path="/center/dashboard" component={dashboard} />
        <Route exact path="/" component={Home} />
      </div>
    </Router>
  );
}

export default App;
