import React from 'react';
import Navbar from '../../Navbar';
import Signupform from '../Signupform';
import Signin from './Signin';
import Home from '../../Home'
import DonorSignin from '../../donor/pages/Signin'
import {BrowserRouter as Router, Route} from  'react-router-dom'

const Signup = () => {
  return (
    <Router>
    <div className="Home">
        <Route exact path='/center/signup' render={props =>
          <div>
            <Navbar/>
            <Signupform />
          </div>

} />
    <Route exact path="/center/signin" component={Signin}/>
    <Route exact path="/donor/signin" component={DonorSignin}/>
    <Route exact path="/" component={Home}/>
    </div>
    </Router>
  );
}

export default Signup;
