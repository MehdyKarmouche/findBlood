import React from 'react';
import Navbar from '../../Navbar';
import Signinform from '../Signinform';
import Signup from './Signup';
import {BrowserRouter as Router, Route} from  'react-router-dom'

function Home() {
  return (
    <Router>
      <div className="Home">
      <Route exact path='/center/signin' render={props =>
        <div>
          <Navbar />
          <Signinform />
        </div>
} />
        <Route exact path="/center/signup" component={Signup}/>
      </div>
    </Router>
  );
}

export default Home;
