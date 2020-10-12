import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import CenterSignin from './components/center/pages/Signin';
import DonorSignin from './components/donor/pages/Signin';
import CenterSignup from './components/center/pages/Signup';
import CenterForgot from './components/center/pages/ForgotPassword';
import Dashboard from './components/center/pages/Dashboard';
import Donor from './components/donor/pages/Donor';
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
        <Route exact path="/center/dashboard" component={Dashboard} />
        <Route exact path="/donor" component={Donor} />
        <Route exact path="/" component={Home} />
        <Route exact path="/center/forgot" component={CenterForgot} />
      </div>
    </Router>
  );
}

export default App;
