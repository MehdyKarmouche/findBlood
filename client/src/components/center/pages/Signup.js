import React from 'react';
import Navbar from '../../Navbar';
import Signupform from '../Signupform';
import Signin from './Signin';
import {BrowserRouter as Router, Route} from  'react-router-dom'

function Signup() {
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
    </div>
    </Router>
  );
}

export default Signup;
