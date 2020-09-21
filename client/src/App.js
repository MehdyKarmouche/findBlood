import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Signin from './components/center/Signin';
import {BrowserRouter as Router, Route} from  'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/" component={Home} />
      </div>
    </Router>
  );
}

export default App;
