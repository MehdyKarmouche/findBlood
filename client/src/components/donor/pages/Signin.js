import React,{useEffect,useState} from 'react';
import Navbar from '../../Navbar';
import Signinform from '../Signinform';
import Home from '../../Home'
import CenterSignin from '../../center/pages/Signin'
import {BrowserRouter as Router, Route,Switch} from  'react-router-dom'
import Signup from './Signup';
import ForgotPassword from './ForgotPassword'
import Footer from '../../Footer'
import Donor from './Donor'

const Signin = () => {
  

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
      <Route exact path="/center/signin" component={CenterSignin}/>
      <Route exact path="/" component={Home}/>
      <Route exact path="/donor/forgot" component={ForgotPassword}/>
      <Route exact path="/donor" component={Donor}/>
      </Switch>
      </div>
    </Router>
  );
}

export default Signin;
