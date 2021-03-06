import React from 'react'
import Navbar from '../../Navbar';
import ForgotForm from '../ForgotForm';
import Home from '../../Home'
import DonorSignin from './Signin'
import CenterSignin from '../../center/pages/Signin'
import Footer from '../../Footer'
import {BrowserRouter as Router, Route} from  'react-router-dom'

const ForgotPassword = () => {
    return (
      <Router>
        <div className="Home">
        <Route exact path='/donor/forgot' render={props =>
          <div>
            <Navbar />
            <ForgotForm />
            <Footer/>
          </div>
          
  } />
          <Route exact path="/" component={Home}/>
          <Route exact path="/center/signin" component={CenterSignin}/>
          <Route exact path="/donor/signin" component={DonorSignin}/>
        </div>
      </Router>
    );
  }
  
  export default ForgotPassword;