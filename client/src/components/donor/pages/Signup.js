import React from 'react';
import Navbar from '../../Navbar';
import Signupform from '../Signupform';
import Signin from './Signin';
import {BrowserRouter as Router, Route} from  'react-router-dom'

function Home() {
  return (
    <Router>
    <div className="Home">
        <Route exact path='/donor/signup' render={props =>
          <div>
            <Navbar/>
            <Signupform />
          </div>

} />
    <Route exact path="/donor/signin" component={Signin}/>
    </div>
    </Router>
  );
}

export default Home;
