import React from 'react';
import Navbar from '../../Navbar';
import Signupform from '../Signupform';
import Signin from './Signin';
import Home from '../../Home'
import Footer from '../../Footer'
import {BrowserRouter as Router, Route} from  'react-router-dom'

function Signup() {
  return (
    <Router>
    <div className="Home">
        <Route exact path='/donor/signup' render={props =>
          <div>
            <Navbar/>
            <Signupform />
            <Footer/>
          </div>

} />
    <Route exact path="/donor/signin" component={Signin}/>
    <Route exact path="/" component={Home}/>
    </div>
    </Router>
  );
}

export default Signup;
