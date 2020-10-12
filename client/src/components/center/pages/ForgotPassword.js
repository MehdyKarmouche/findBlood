import React from 'react'
import Navbar from '../../Navbar';
import ForgotForm from '../ForgotForm';
import Home from '../../Home'
import Footer from '../../Footer'
import {BrowserRouter as Router, Route} from  'react-router-dom'

function ForgotPassword() {
    return (
      <Router>
        <div className="Home">
        <Route exact path='/center/forgot' render={props =>
          <div>
            <Navbar />
            <ForgotForm />
            <Footer/>
          </div>
          
  } />
          <Route exact path="/" component={Home}/>
        </div>
      </Router>
    );
  }
  
  export default ForgotPassword;