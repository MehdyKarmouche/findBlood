import React from 'react';
import Navbar from '../../Navbar';
import Signinform from '../Signinform';
import Home from '../../Home'
import {BrowserRouter as Router, Route} from  'react-router-dom'
import Signup from './Signup';
import ForgotPassword from './ForgotPassword'
import Footer from '../../Footer'

function Signin() {
  return (
    <Router>
    <div className="Home">
        
        <Route exact path='/donor/signin' render={props =>
          <div>
            <Navbar/>
            <Signinform />
            <Footer/>
          </div>

} />
    <Route exact path="/donor/signup" component={Signup}/>
    <Route exact path="/" component={Home}/>
    <Route exact path="/donor/forgot" component={ForgotPassword}/>
    </div>
    </Router>
  );
}

export default Signin;
