import React from 'react';
import Navbar from '../../Navbar';
import Signinform from '../Signinform';
import {BrowserRouter as Router, Route} from  'react-router-dom'
import Signup from './Signup';

function Home() {
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
    </div>
    </Router>
  );
}

export default Home;
