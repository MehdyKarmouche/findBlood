import React,{useEffect,useState} from 'react';
import Navbar from '../../Navbar';
import Signinform from '../Signinform';
import Home from '../../Home'
import {BrowserRouter as Router, Route,Switch} from  'react-router-dom'
import Signup from './Signup';
import ForgotPassword from './ForgotPassword'
import Footer from '../../Footer'

function Signin() {
  

  return (
    <Router>
    <div className="signin">
        <Switch>
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
    </Switch>
    </div>
    </Router>
  );
}

export default Signin;
