import React from 'react';
import Navbar from '../../Navbar';
import Signinform from '../Signinform';
import Signup from './Signup';
import Home from '../../Home'
import Footer from '../../Footer'
import {BrowserRouter as Router, Route} from  'react-router-dom'

function Signin() {
  return (
    <Router>
      <div className="Home">
      <Route exact path='/center/signin' render={props =>
        <div>
          <Navbar />
          <Signinform />
          <Footer/>
        </div>
        
} />
        <Route exact path="/center/signup" component={Signup}/>
        <Route exact path="/" component={Home}/>
      </div>
    </Router>
  );
}

export default Signin;
