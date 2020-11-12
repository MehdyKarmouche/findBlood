import React from 'react';
import './App.css';
import Home from './components/Home';
import CenterSignin from './components/center/pages/Signin';
import DonorSignin from './components/donor/pages/Signin';
import CenterSignup from './components/center/pages/Signup';
import CenterForgot from './components/center/pages/ForgotPassword';
import Dashboard from './components/center/pages/Dashboard';
import Donor from './components/donor/pages/Donor';
import DonorSignup from './components/donor/pages/Signup';
import {BrowserRouter as Router, Route, Switch} from  'react-router-dom'

const App = () => {
  return (
    
    <Router>
      <Switch>
      
        <Route exact path="/center/signin" component={CenterSignin} />
        <Route exact path="/donor/signin" component={DonorSignin} />
        <Route exact path="/donor" component={Donor} />
        <Route path="/" component={Home} />
      
      </Switch>
    </Router>
    
  );
}

export default App;
