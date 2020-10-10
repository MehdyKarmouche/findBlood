import React from 'react';
import Navbar from '../../Navbar';
import Signinform from '../Signinform';
import Home from '../../Home'
import {BrowserRouter as Router, Route} from  'react-router-dom'
import Signup from './Signup';

function Signin() {
  return (
    <Router>
    <div className="Home">
        
        <Route exact path='/donor/signin' render={props =>
          <div>
            <Navbar/>
            <Signinform />
          </div>

} />
    <Route exact path="/donor/signup" component={Signup}/>
    <Route exact path="/" component={Home}/>
    </div>
    </Router>
  );
}

export default Signin;
