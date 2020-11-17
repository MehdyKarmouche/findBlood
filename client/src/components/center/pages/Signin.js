import React from 'react';
import Navbar from '../../Navbar';
import Signinform from '../Signinform';
import Signup from './Signup';
import DonorSignin from '../../donor/pages/Signin'
import Dashboard from './Dashboard';
import ForgotPassword from './ForgotPassword';
import Home from '../../Home'
import Footer from '../../Footer'
import {BrowserRouter as Router, Route,Switch} from  'react-router-dom'

const Signin = () => {
  return (
    <Router>
      <div className="Home">
        <Switch>
      <Route exact path='/center/signin' render={props =>
        <div>
          <Navbar />
          <Signinform />
          <Footer/>
        </div>
        
} />
        <Route exact path="/center/signup" component={Signup}/>
        <Route exact path="/donor/signin" component={DonorSignin}/>
        <Route exact path="/" component={Home}/>
        <Route exact path="/center/forgot" component={ForgotPassword}/>
        <Route exact  path ="/center/dashboard" component={Dashboard} />
        </Switch>
      </div>
    </Router>
  );
}

export default Signin;
